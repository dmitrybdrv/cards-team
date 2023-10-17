import s from './decks.module.scss'

import { Table, THead } from '@/components'
import { Pagination } from '@/components/ui/pagination'
import { DecksHeaderFilters } from '@/pages/decks-page/decksHeaderFilters.tsx'
import { DecksTableBody } from '@/pages/decks-page/decksTableBody.tsx'
import { useGetDecks } from '@/pages/decks-page/hook/useGetDecks.tsx'

export const Decks = () => {
  const {
    isError,
    profileData,
    decksData,
    isLoadingDecksData,
    switcherValue,
    onChangeSearchInput,
    onChangeTabSwitcher,
    onChangeSlider,
    clearFilter,
    getFuncForChangeSliderValue,
    setCurrentPage,
    setItemsPerPage,
  } = useGetDecks()

  if (isLoadingDecksData) return <div>Loading...</div>
  if (isError) return <h1>Error!</h1>

  const maxCardsCount = decksData?.maxCardsCount ?? 100
  const decks = decksData?.items ?? []
  const decksColumnsTitles = ['Name', 'Cards', 'LastUpdate', 'Created by', '']

  return (
    <div className={s.pageWrapper}>
      <DecksHeaderFilters
        switcherValue={switcherValue}
        onChangeSearchInput={onChangeSearchInput}
        onChangeTabSwitcher={onChangeTabSwitcher}
        maxCardsCount={maxCardsCount}
        onChangeSlider={onChangeSlider}
        clearFilter={clearFilter}
        getFuncSetting={getFuncForChangeSliderValue}
      />
      <Table variant={'packs'}>
        <THead columns={decksColumnsTitles} />
        <DecksTableBody items={decks} authorId={profileData.id} />
      </Table>
      <div className={s.paginationWrapper}>
        <Pagination
          currentPage={decksData?.pagination.currentPage ?? 1}
          totalPages={decksData?.pagination.totalPages ?? 0}
          itemsPerPage={decksData?.pagination.itemsPerPage ?? 10}
          changePage={setCurrentPage}
          changeItemsPerPage={setItemsPerPage}
        />
      </div>
    </div>
  )
}
