import { FC, useState } from 'react'

import s from './decks.module.scss'

import { Skeleton, Table, TableColumns, THead } from '@/components'
import { Pagination } from '@/components/ui/pagination'
import { DecksHeaderFilters } from '@/pages/decks-page/decksHeaderFilters.tsx'
import { DecksTableBody } from '@/pages/decks-page/decksTableBody.tsx'
import { useGetDecks } from '@/pages/decks-page/hook/useGetDecks.tsx'
import { DecksOrderName } from '@/services/decks/decks.types.ts'

const decksColumnsTitles: TableColumns<DecksOrderName> = [
  { title: 'Name', orderName: 'name' },
  { title: 'Cards', orderName: 'cardsCount' },
  { title: 'LastUpdate', orderName: 'updated' },
  { title: 'Created by' },
  { title: '' },
]
const perPageCountVariant = ['10', '20', '30', '50', '100']

export const DecksPage: FC = () => {
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
    switcherValue,
    sort,
    setSortMemo,
    onChangeSearchInputMemo,
    onChangeTabSwitcherMemo,
    onChangeSliderMemo,
    clearFilterMemo,
    getFuncForChangeSliderValueMemo,
    setCurrentPageMemo,
    setItemsPerPageMemo,
  } = useGetDecks()

  // state for object with Dispatch function, which set skeleton height
  let [skeletonSettings, setSkeletonSettings] = useState<{ setHeight: Function } | null>(null)

  if (isError) return <h1>Error!</h1>

  return (
    <div className={s.pageWrapper}>
      <DecksHeaderFilters
        disabled={isFetching}
        switcherValue={switcherValue}
        onChangeSearchInput={onChangeSearchInputMemo}
        onChangeTabSwitcher={onChangeTabSwitcherMemo}
        maxCardsCount={maxCardsCount}
        onChangeSlider={onChangeSliderMemo}
        clearFilter={clearFilterMemo}
        getFuncSetting={getFuncForChangeSliderValueMemo}
      />
      <Table variant={'packs'}>
        <THead
          columns={decksColumnsTitles}
          onSort={setSortMemo}
          currentSort={sort}
          disabled={isFetching}
        />
        <DecksTableBody items={items} authorId={authorId} skeletonSettings={skeletonSettings} />
      </Table>
      <Skeleton
        transferSkeletonSettings={setSkeletonSettings}
        isFetching={isFetching}
        isLoading={isLoadingDecksData}
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
