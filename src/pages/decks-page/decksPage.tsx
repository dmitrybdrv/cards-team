import { FC } from 'react'

import s from './decks.module.scss'

import { Table, TableColumns, THead } from '@/components'
import { Preloader } from '@/components/layout/preloader/preloader.tsx'
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

export const DecksPage: FC<void> = () => {
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

  if (isLoadingDecksData) return <Preloader className={s.preloader} />
  if (isError) return <h1>Error!</h1>

  return (
    <div className={s.pageWrapper}>
      {isFetching && <Preloader className={s.preloader} />}
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
        {/*TODO add disabled props for sort*/}
        <THead columns={decksColumnsTitles} onSort={setSortMemo} currentSort={sort} />
        <DecksTableBody items={items} authorId={authorId} />
      </Table>
      <div className={s.paginationWrapper}>
        <Pagination
          // TODO add disabled props
          perPageCountVariant={perPageCountVariant}
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          changePage={setCurrentPageMemo}
          changeItemsPerPage={setItemsPerPageMemo}
        />
      </div>
    </div>
  )
}
