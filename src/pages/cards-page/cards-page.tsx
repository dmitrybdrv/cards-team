import { FC } from 'react'

import { Link, useParams } from 'react-router-dom'

import { ReactComponent as ArrowBack } from '../../assets/icons/arrow-back-outline.svg'

import s from './cards.module.scss'

import { Skeleton, Table, TableColumns, THead, Typography } from '@/components'
import { Pagination } from '@/components/ui/pagination'
import { CardsHeaders } from '@/pages/cards-page/cards-headers.tsx'
import { CardsTableBody } from '@/pages/cards-page/cards-table-body.tsx'
import { useGetCards } from '@/pages/cards-page/useGetCards.tsx'
import { useSkeletonHeightState } from '@/pages/decks-page/hook/useSkeletonHeightState.ts'
import { useGetMeQuery } from '@/services/auth/auth.service.ts'
import { useGetDeckQuery } from '@/services/deck/cards.service.ts'
import { friendsOrderName } from '@/services/deck/cards.types.ts'

const friendsColumnsTitles: TableColumns<friendsOrderName> = [
  { title: 'Question', orderName: 'question' },
  { title: 'Answer', orderName: 'answer' },
  { title: 'LastUpdate', orderName: 'updated' },
  { title: 'Grade' },
  // { title: '' },
  // authorId check extra column
]

const perPageCountVariant = ['10', '20', '30', '50', '100']
const initialSkeletonHeight = 374

export const CardsPage: FC = () => {
  const {
    isFetching,
    isError,
    deckData: {
      pagination: { currentPage, itemsPerPage, totalPages },
      items,
    },
    isLoadingDecksData,
    sort,
    setSortMemo,
    onChangeSearchInputMemo,
    setCurrentPageMemo,
    setItemsPerPageMemo,
  } = useGetCards()

  const { deckId } = useParams()

  const packId = deckId ? deckId : ''

  const { data } = useGetDeckQuery(packId)

  const { data: userData } = useGetMeQuery()

  const isAuthorDeck = data?.userId === userData.id
  const deckTitle = data?.name

  let [skeletonHeight, setSkeletonHeight] = useSkeletonHeightState(initialSkeletonHeight)

  if (isError) return <h1>Error!</h1>

  return (
    <div className={s.pageWrapper}>
      <Link style={{ textDecoration: 'none' }} to={'/'}>
        <div className={s.linkArrowContainer}>
          <ArrowBack />
          <Typography variant={'body2'}>Back to Deck List</Typography>
        </div>
      </Link>
      <CardsHeaders
        isAuthorDeck={isAuthorDeck}
        cardsPageTitle={deckTitle}
        disabled={isFetching}
        onChangeSearchInput={onChangeSearchInputMemo}
      />
      <Table variant={isAuthorDeck ? 'myCards' : 'cards'}>
        <THead
          columns={friendsColumnsTitles}
          onSort={setSortMemo}
          currentSort={sort}
          disabled={isFetching}
        />
        <CardsTableBody items={items} onChangeHeight={setSkeletonHeight} />
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
    </div>
  )
}
