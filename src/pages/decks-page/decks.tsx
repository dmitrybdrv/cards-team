import s from './decks.module.scss'

import { Table, THead } from '@/components'
import { Pagination } from '@/components/ui/pagination'
import { DecksHeaderFilters } from '@/pages/decks-page/decksHeaderFilters.tsx'
import { DecksTableBody } from '@/pages/decks-page/decksTableBody.tsx'
import { useGetDecks } from '@/pages/decks-page/hook/useGetDecks.tsx'

export const Decks = () => {
  const {
    isFetching,
    isError,
    profileData,
    decksData: {
      maxCardsCount,
      pagination: { currentPage, itemsPerPage, totalPages },
      items,
    },
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

  const decksColumnsTitles = ['Name', 'Cards', 'LastUpdate', 'Created by', '']

  return (
    <div className={s.pageWrapper}>
      <DecksHeaderFilters
        disabled={isFetching}
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
        <DecksTableBody items={items} authorId={profileData.id} />
      </Table>
      <div className={s.paginationWrapper}>
        <Pagination
          // TODO add disabled props
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          changePage={setCurrentPage}
          changeItemsPerPage={setItemsPerPage}
        />
      </div>
    </div>
  )
}
