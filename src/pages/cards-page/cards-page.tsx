import { FC } from 'react'

import { Link, Navigate, useParams } from 'react-router-dom'

import s from './cards.module.scss'

import { ReactComponent as ArrowBack } from '@/assets/icons/arrow-back-outline.svg'
import { Skeleton, Table, TableColumns, THead, Typography } from '@/components'
import { Pagination } from '@/components/ui/pagination'
import { CardsHeaders } from '@/pages/cards-page/cards-headers.tsx'
import { CardsTableBody } from '@/pages/cards-page/cards-table-body.tsx'
import { CardsCUDModals } from '@/pages/cards-page/cardsCUDModals.tsx'
import { useCardModalState } from '@/pages/cards-page/hooks/useCardModalState.ts'
import { useGetCards } from '@/pages/cards-page/hooks/useGetCards.ts'
import { DecksCUDModals } from '@/pages/decks-page'
import { useDeckModalState } from '@/pages/decks-page/hook/useDeckModalState.ts'
import { useSkeletonHeightState } from '@/pages/decks-page/hook/useSkeletonHeightState.ts'
import { useGetMeQuery } from '@/services/auth/auth.service.ts'
import { useGetDeckQuery } from '@/services/cards/cards.service.ts'
import { friendsOrderName } from '@/services/cards/cards.types.ts'

const myColumnsTitles: TableColumns<friendsOrderName> = [
  { title: 'Question', orderName: 'question' },
  { title: 'Answer', orderName: 'answer' },
  { title: 'LastUpdate', orderName: 'updated' },
  { title: 'Grade' },
  { title: '' },
]

const friendsColumnsTitles: TableColumns<friendsOrderName> = [...myColumnsTitles]

friendsColumnsTitles.pop()

const perPageCountVariant = ['10', '20', '30', '50', '100']
const initialSkeletonHeight = 374

export const CardsPage: FC = () => {
  const {
    isFetching,
    isError,
    profileData: { id: authorId },
    cardData: {
      pagination: { currentPage, itemsPerPage, totalPages },
      items,
    },
    isLoadingDecksData,
    sort,
    setSortMemo,
    setCurrentPageMemo,
    setItemsPerPageMemo,
  } = useGetCards()

  const { deckId } = useParams()

  const packId = deckId ? deckId : ''

  const { data } = useGetDeckQuery(packId)

  const { data: userData } = useGetMeQuery()

  const isAuthorDeck = data?.userId === userData.id
  const deckTitle = data?.name
  const isDeckEmpty = data?.cardsCount === 0

  let [skeletonHeight, setSkeletonHeight] = useSkeletonHeightState(initialSkeletonHeight)

  const {
    modalCardVariant,
    currentCardData,
    isOpenCardModal,
    onClickAddCard,
    onClickEditOrDeleteCard,
    setIsOpenCardModal,
  } = useCardModalState()

  const { isOpenModal, setIsOpenModal, modalVariant, currentDeckData, onClickEditOrDeleteDeck } =
    useDeckModalState()

  const onShowDeleteDeckModal = () => {
    if (data)
      onClickEditOrDeleteDeck(
        {
          id: packId,
          name: data.name,
          isPrivate: data.isPrivate,
          cover: data.cover,
        },
        'deleteDeck'
      )
  }

  const onShowEditDeckModal = () => {
    if (data)
      onClickEditOrDeleteDeck(
        {
          id: packId,
          name: data.name,
          isPrivate: data.isPrivate,
          cover: data.cover,
        },
        'updateDeck'
      )
  }

  if (isError) return <Navigate to={'/'} />

  return (
    <div className={s.pageWrapper}>
      <CardsCUDModals
        packId={packId}
        isOpenCardModal={isOpenCardModal}
        setIsOpenCardModal={setIsOpenCardModal}
        variant={modalCardVariant}
        currentCardData={currentCardData}
      />
      <DecksCUDModals
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        variant={modalVariant}
        currentDeckData={currentDeckData}
      />
      <Link style={{ textDecoration: 'none' }} to={'/'}>
        <div className={s.linkArrowContainer}>
          <ArrowBack />
          <Typography variant={'body2'}>Back to Deck List</Typography>
        </div>
      </Link>
      <CardsHeaders
        isDeckEmpty={isDeckEmpty}
        isAuthorDeck={isAuthorDeck}
        cardsPageTitle={deckTitle}
        disabled={isFetching}
        onClickAddCard={onClickAddCard}
        onShowDeleteModal={onShowDeleteDeckModal}
        onShowEditModal={onShowEditDeckModal}
      />
      {!isDeckEmpty && (
        <>
          <Table variant={isAuthorDeck ? 'myCards' : 'cards'}>
            <THead
              columns={isAuthorDeck ? myColumnsTitles : friendsColumnsTitles}
              onSort={setSortMemo}
              currentSort={sort}
              disabled={isFetching}
            />
            <CardsTableBody
              items={items}
              onChangeHeight={setSkeletonHeight}
              onClickEditOrDeleteCardIcons={onClickEditOrDeleteCard}
              authorId={authorId}
            />
          </Table>
          <Skeleton
            isFetching={isFetching}
            isLoading={isLoadingDecksData}
            currentHeight={skeletonHeight.current}
          />
          <div className={s.paginationWrapper}>
            <Pagination
              disabled={isFetching}
              perPageCountVariant={perPageCountVariant}
              currentPage={currentPage}
              totalPages={totalPages}
              itemsPerPage={itemsPerPage}
              changePage={setCurrentPageMemo}
              changeItemsPerPage={setItemsPerPageMemo}
              className={s.pagination}
            />
          </div>
        </>
      )}
    </div>
  )
}
