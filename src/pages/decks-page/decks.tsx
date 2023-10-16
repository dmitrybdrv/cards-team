import { useState } from 'react'

import s from './decks.module.scss'

import { debounce } from '@/common/utils/debounce.ts'
import { Table, THead } from '@/components'
import { Pagination } from '@/components/ui/pagination'
import { DecksHeaderFilters } from '@/pages/decks-page/decksHeaderFilters.tsx'
import { DecksTableBody } from '@/pages/decks-page/decksTableBody.tsx'
import { useGetMeQuery } from '@/services/auth/auth.service.ts'
import { useGetDecksQuery } from '@/services/decks/decks.service.ts'
import { DecksParams } from '@/services/decks/decks.types.ts'

// export type SwitcherValue = 'All Cards' | 'My Cards'
export type ChangeSwitcherValues = {
  setMinValue: Function
  setMaxValue: Function
}

const useGetDecks = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [searchValue, setSearchValue] = useState('')
  const [switcherValue, setSwitcherValue] = useState('All Cards')
  const [minCardsCount, setMinCardsCount] = useState('0')
  const [maxCardsCount, setMaxCardsCount] = useState<string | null>(null)
  const [changeSwitcherValues, setChangeSwitcherValues] = useState<ChangeSwitcherValues | null>(
    null
  )
  // callBacks
  const getFuncForChangeSliderValue = (funcForChange: ChangeSwitcherValues) =>
    setChangeSwitcherValues(funcForChange)
  const clearFilter = () => {
    setSearchValue('')
    setSwitcherValue('All Cards')
    setMinCardsCount('0')
    setMaxCardsCount(null)
    changeSwitcherValues?.setMinValue(0)
    changeSwitcherValues?.setMaxValue(data?.maxCardsCount)
  }
  const onChangeSearchInput = debounce((searchValue: string) => {
    setSearchValue(searchValue)
    setCurrentPage(1)
  }, 1000)
  const onChangeSlider = (minValue: number, maxValue: number) => {
    setMinCardsCount(minValue.toString())
    setMaxCardsCount(maxValue.toString())
    setCurrentPage(1)
  }
  const onChangeTabSwitcher = (value: string) => {
    setSwitcherValue(value)
    setCurrentPage(1)
  }

  // get me data
  const { data: profileData, isSuccess: isHasProfileData } = useGetMeQuery()

  // prepare params for decks query
  const queryParams: DecksParams = {
    currentPage,
    itemsPerPage,
    name: searchValue,
    minCardsCount,
  }

  if (maxCardsCount) queryParams.maxCardsCount = maxCardsCount

  if (switcherValue === 'My Cards' && isHasProfileData) queryParams.authorId = profileData.id

  const { data, isLoading, isSuccess } = useGetDecksQuery(queryParams)

  return {
    decksData: data,
    isLoadingDeckData: isLoading,
    isHasDecksData: isSuccess,
    setItemsPerPage,
    getFuncForChangeSliderValue,
    clearFilter,
    onChangeSearchInput,
    onChangeSlider,
    onChangeTabSwitcher,
  }
}

export const Decks = () => {
  // const [currentPage, setCurrentPage] = useState(1)
  // const [itemsPerPage, setItemsPerPage] = useState(10)
  // const [searchValue, setSearchValue] = useState('')
  // const [switcherValue, setSwitcherValue] = useState('All Cards')
  // const [minCardsCount, setMinCardsCount] = useState('0')
  // const [maxCardsCount, setMaxCardsCount] = useState<string | null>(null)
  // const [changeSwitcherValues, setChangeSwitcherValues] = useState<ChangeSwitcherValues | null>(
  //   null
  // )
  // // callBacks
  // const getFuncSetting = (funcForChange: ChangeSwitcherValues) =>
  //   setChangeSwitcherValues(funcForChange)
  // const clearFilter = () => {
  //   setSearchValue('')
  //   setSwitcherValue('All Cards')
  //   setMinCardsCount('0')
  //   setMaxCardsCount(null)
  //   changeSwitcherValues?.setMinValue(0)
  //   changeSwitcherValues?.setMaxValue(data?.maxCardsCount)
  // }
  // const onChangeSearchInput = debounce((searchValue: string) => {
  //   setSearchValue(searchValue)
  //   setCurrentPage(1)
  // }, 1000)
  // const onChangeSlider = (minValue: number, maxValue: number) => {
  //   setMinCardsCount(minValue.toString())
  //   setMaxCardsCount(maxValue.toString())
  //   setCurrentPage(1)
  // }
  // const onChangeTabSwitcher = (value: string) => {
  //   setSwitcherValue(value)
  //   setCurrentPage(1)
  // }
  //
  // // get me data
  // const { data: profileData, isSuccess: isHasProfileData } = useGetMeQuery()
  //
  // // prepare params for decks query
  // const queryParams: DecksParams = {
  //   currentPage,
  //   itemsPerPage,
  //   name: searchValue,
  //   minCardsCount,
  // }
  //
  // if (maxCardsCount) queryParams.maxCardsCount = maxCardsCount
  //
  // if (switcherValue === 'My Cards' && isHasProfileData) queryParams.authorId = profileData.id
  //
  // const { data, isLoading, isSuccess: isHasDecksData } = useGetDecksQuery(queryParams)

  if (isLoading) return <div>Loading...</div>

  // render data
  let dataItem = isHasDecksData ? data.items : []

  let paginationRender = null

  if (isHasDecksData) {
    paginationRender = (
      <div className={s.paginationWrapper}>
        <Pagination
          currentPage={data.pagination.currentPage}
          totalPages={data.pagination.totalPages}
          itemsPerPage={data.pagination.itemsPerPage}
          changePage={setCurrentPage}
          changeItemsPerPage={setItemsPerPage}
        />
      </div>
    )
  }

  return (
    <div className={s.pageWrapper}>
      <DecksHeaderFilters
        switcherValue={switcherValue}
        onChangeSearchInput={onChangeSearchInput}
        onChangeTabSwitcher={onChangeTabSwitcher}
        maxCardsCount={data?.maxCardsCount ?? 100}
        minCardsCount={+minCardsCount}
        onChangeSlider={onChangeSlider}
        clearFilter={clearFilter}
        getFuncSetting={getFuncSetting}
      />
      <Table variant={'packs'}>
        <THead columns={['Name', 'Cards', 'LastUpdate', 'Created by', '']} />
        <DecksTableBody items={dataItem} authorId={profileData.id} />
      </Table>
      {paginationRender}
    </div>
  )
}
