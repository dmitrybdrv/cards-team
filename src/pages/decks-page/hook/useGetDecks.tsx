import { useCallback, useState } from 'react'

import { debounce } from '@/common/utils/debounce.ts'
import { Sort } from '@/components'
import { useAppSelector } from '@/hooks/hooks.ts'
import { useGetMeQuery } from '@/services/auth/auth.service.ts'
import { useGetDecksQuery } from '@/services/decks/decks.service.ts'
import { InitialDeck } from '@/services/decks/decks.slice.ts'
import { DecksParams, DecksResponse } from '@/services/decks/decks.types.ts'

export type ChangeSwitcherValues = {
  setMinValue: Function
  setMaxValue: Function
}
export const useGetDecks = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  // const [searchValue, setSearchValue] = useState('')
  // const [switcherValue, setSwitcherValue] = useState('All Cards')
  const [minCardsCount, setMinCardsCount] = useState('0')
  const [maxCardsCount, setMaxCardsCount] = useState<string | null>(null)
  const [changeSwitcherValues, setChangeSwitcherValues] = useState<ChangeSwitcherValues | null>(
    null
  )
  const [sort, setSort] = useState<Sort>({ orderName: null, direction: null })

  // callBacks
  const getFuncForChangeSliderValue = (funcForChange: ChangeSwitcherValues) => {
    setChangeSwitcherValues(funcForChange)
  }

  const clearFilter = () => {
    // setSearchValue('')
    // setSwitcherValue('All Cards')
    setMinCardsCount('0')
    setMaxCardsCount(null)
    changeSwitcherValues?.setMinValue(0)
    changeSwitcherValues?.setMaxValue(data?.maxCardsCount)
  }
  // const onChangeSearchInput = debounce((searchValue: string) => {
  //   setSearchValue(searchValue)
  //   setCurrentPage(1)
  // }, 1000)
  const onChangeSlider = debounce((minValue: number, maxValue: number) => {
    setMinCardsCount(minValue.toString())
    setMaxCardsCount(maxValue.toString())
    setCurrentPage(1)
  }, 1000)
  // const onChangeTabSwitcher = (value: string) => {
  //   setSwitcherValue(value)
  //   setCurrentPage(1)
  // }
  const onChangeItemsPerPage = (itemsPerPage: number) => {
    setItemsPerPage(itemsPerPage)
    setCurrentPage(1)
  }

  // get me data
  const { data: profileData } = useGetMeQuery()

  // prepare params for decks query
  const getDeckParams = (decksState: InitialDeck) => {
    const { name, authorId } = decksState

    const queryParams: DecksParams = {
      currentPage,
      itemsPerPage,
      name,
      minCardsCount,
    }

    if (authorId) queryParams.authorId = authorId
    if (maxCardsCount) queryParams.maxCardsCount = maxCardsCount
    if (sort.direction) queryParams.orderBy = `${sort.orderName}-${sort.direction}`

    return queryParams
  }
  const decksState = useAppSelector(state => state.decks)
  const { data, isLoading, isSuccess, isError, isFetching } = useGetDecksQuery(
    getDeckParams(decksState)
  )
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
  // const onChangeSearchInputMemo = useCallback(onChangeSearchInput, [])
  // const onChangeTabSwitcherMemo = useCallback(onChangeTabSwitcher, [])
  const onChangeSliderMemo = useCallback(onChangeSlider, [])
  const clearFilterMemo = useCallback(clearFilter, [changeSwitcherValues, data?.maxCardsCount])
  const getFuncForChangeSliderValueMemo = useCallback(getFuncForChangeSliderValue, [])
  const setCurrentPageMemo = useCallback(setCurrentPage, [])
  const setItemsPerPageMemo = useCallback(onChangeItemsPerPage, [])
  const setSortMemo = useCallback(setSort, [])

  return {
    isFetching,
    isError,
    profileData,
    decksData: data || initialData,
    isLoadingDecksData: isLoading,
    isHasDecksData: isSuccess,
    // switcherValue,
    sort,
    setSortMemo,
    // onChangeSearchInputMemo,
    // onChangeTabSwitcherMemo,
    onChangeSliderMemo,
    clearFilterMemo,
    getFuncForChangeSliderValueMemo,
    setCurrentPageMemo,
    setItemsPerPageMemo,
  }
}
