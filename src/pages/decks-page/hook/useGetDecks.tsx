import { useCallback, useState } from 'react'

import { debounce } from '@/common/utils/debounce.ts'
import { useGetMeQuery } from '@/services/auth/auth.service.ts'
import { useGetDecksQuery } from '@/services/decks/decks.service.ts'
import { DecksParams, DecksResponse } from '@/services/decks/decks.types.ts'

export type ChangeSwitcherValues = {
  setMinValue: Function
  setMaxValue: Function
}
export const useGetDecks = () => {
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
  const getFuncForChangeSliderValue = (funcForChange: ChangeSwitcherValues) => {
    setChangeSwitcherValues(funcForChange)
  }

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
  const onChangeSlider = debounce((minValue: number, maxValue: number) => {
    setMinCardsCount(minValue.toString())
    setMaxCardsCount(maxValue.toString())
    setCurrentPage(1)
  }, 1000)
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

  const { data, isLoading, isSuccess, isError, isFetching } = useGetDecksQuery(queryParams)
  const initialData: DecksResponse = {
    items: [],
    maxCardsCount: 100,
    pagination: {
      currentPage: 1,
      itemsPerPage: 10,
      totalItems: 0,
      totalPages: 0,
    },
  }
  const onChangeSearchInputMemo = useCallback(onChangeSearchInput, [])
  const onChangeTabSwitcherMemo = useCallback(onChangeTabSwitcher, [])
  const onChangeSliderMemo = useCallback(onChangeSlider, [])
  const clearFilterMemo = useCallback(clearFilter, [changeSwitcherValues])
  const getFuncForChangeSliderValueMemo = useCallback(getFuncForChangeSliderValue, [])
  const setCurrentPageMemo = useCallback(setCurrentPage, [])
  const setItemsPerPageMemo = useCallback(setItemsPerPage, [])

  return {
    isFetching,
    isError,
    profileData,
    decksData: data || initialData,
    isLoadingDecksData: isLoading,
    isHasDecksData: isSuccess,
    switcherValue,
    onChangeSearchInputMemo,
    onChangeTabSwitcherMemo,
    onChangeSliderMemo,
    clearFilterMemo,
    getFuncForChangeSliderValueMemo,
    setCurrentPageMemo,
    setItemsPerPageMemo,
  }
}
