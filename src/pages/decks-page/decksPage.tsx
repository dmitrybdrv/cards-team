import { FC } from 'react'

import s from './decks.module.scss'

import { Skeleton, Table, THead } from '@/components'
import { Pagination } from '@/components/ui/pagination'
import { DecksCUDModals } from '@/pages/decks-page/decksCUDModals.tsx'
import { DecksHeaderFilters } from '@/pages/decks-page/decksHeaderFilters.tsx'
import { DecksTableBody } from '@/pages/decks-page/decksTableBody.tsx'
import {
  decksColumnsTitles,
  initialSkeletonHeight,
  perPageCountVariant,
} from '@/pages/decks-page/enums'
import { useDeckModalState } from '@/pages/decks-page/hook/useDeckModalState.ts'
import { useGetDecks } from '@/pages/decks-page/hook/useGetDecks.ts'
import { useSkeletonHeightState } from '@/pages/decks-page/hook/useSkeletonHeightState.ts'

export const DecksPage: FC = () => {
  let {
    isFetching,
    isError,
    profileData: { id: authorId },
    decksData: {
      maxCardsCount,
      pagination: { currentPage, itemsPerPage, totalPages },
      items,
    },
    isLoadingDecksData,
    sort,
    setSortMemo,
    setCurrentPageMemo,
    setItemsPerPageMemo,
  } = useGetDecks()

  let [skeletonHeight, setSkeletonHeight] = useSkeletonHeightState(initialSkeletonHeight)

  const {
    isOpenModal,
    setIsOpenModal,
    modalVariant,
    currentDeckData,
    onClickAddDeck,
    onClickEditOrDeleteDeck,
  } = useDeckModalState()

  if (isError) return <h1>Error!</h1>

  return (
    <div className={s.pageWrapper}>
      <DecksCUDModals
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        variant={modalVariant}
        currentDeckData={currentDeckData}
      />
      <DecksHeaderFilters onClickAddDeck={onClickAddDeck} boundaryMaxValue={maxCardsCount} />
      <Table variant={'packs'}>
        <THead columns={decksColumnsTitles} onSort={setSortMemo} currentSort={sort} />
        <DecksTableBody
          items={items}
          authorId={authorId}
          onChangeHeight={setSkeletonHeight}
          onClickEditOrDeleteIcons={onClickEditOrDeleteDeck}
        />
      </Table>
      <Skeleton
        isFetching={isFetching}
        isLoading={isLoadingDecksData}
        currentHeight={skeletonHeight.current}
      />
      <div className={s.paginationWrapper}>
        <Pagination
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
