import { FC } from 'react'

import s from './my-pack.module.scss'

import { Skeleton, Table, TableColumns, THead } from '@/components'
import { Pagination } from '@/components/ui/pagination'
import { DecksCUDModals } from '@/pages/decks-page/decksCUDModals.tsx'
import { useDeckModalState } from '@/pages/decks-page/hook/useDeckModalState.ts'
import { useGetDecks } from '@/pages/decks-page/hook/useGetDecks.tsx'
import { useSkeletonHeightState } from '@/pages/decks-page/hook/useSkeletonHeightState.ts'
import { MyPackHeaders } from '@/pages/my-pack/my-pack-headers.tsx'
import { MyPackTableBody } from '@/pages/my-pack/my-pack-table-body.tsx'
import { DecksOrderName } from '@/services/decks/decks.types.ts'

const decksColumnsTitles: TableColumns<DecksOrderName> = [
  { title: 'Question', orderName: 'question' },
  { title: 'Answer', orderName: 'answer' },
  { title: 'LastUpdate', orderName: 'updated' },
  { title: 'Grade' },
]
const perPageCountVariant = ['10', '20', '30', '50', '100']
const initialSkeletonHeight = 374

export const MyPack: FC = () => {
  const {
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
    onChangeSearchInputMemo,
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
      <MyPackHeaders
        disabled={isFetching}
        onChangeSearchInput={onChangeSearchInputMemo}
        maxCardsCount={maxCardsCount}
        onClickAddDeck={onClickAddDeck}
      />
      <Table variant={'packs'}>
        <THead
          columns={decksColumnsTitles}
          onSort={setSortMemo}
          currentSort={sort}
          disabled={isFetching}
        />
        <MyPackTableBody
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
