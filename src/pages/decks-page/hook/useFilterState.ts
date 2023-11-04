import { ChangeEvent, useCallback, useState } from 'react'

import { debounce } from '@/common/utils/debounce.ts'
import { useAppDispatch } from '@/hooks/hooks.ts'
import { tabSwitcherValue } from '@/pages/decks-page'
import { useGetMeQuery } from '@/services/auth/auth.service.ts'
import {
  changeAuthorId,
  changeCardsCount,
  changeSearchName,
  resetState,
} from '@/services/decks/decks.slice.ts'

export const useFilterState = () => {
  const dispatch = useAppDispatch()

  //----------input----------
  // const setSearchNameForFetch = useCallback(
  //   debounce((searchValue: string) => dispatch(changeSearchName(searchValue)), 1000),
  //   []
  // )
  const [searchInputValue, setSearchInputValue] = useState('')
  const changeSearchInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //for UI
    setSearchInputValue(e.currentTarget.value)
    //for fetch with debounce
    // setSearchNameForFetch(e.currentTarget.value)
    dispatch(changeSearchName(e.currentTarget.value))
  }

  //---------switcher-------------
  const { data: profileData } = useGetMeQuery()
  const [switcherValue, setSwitcherValue] = useState(tabSwitcherValue[1].value)

  const onChangeTabSwitcher = (value: string) => {
    // switcher can return empty string if second click same button
    if (value !== '') {
      //for UI
      setSwitcherValue(value)
      //for fetch
      dispatch(changeAuthorId(value === tabSwitcherValue[0].value ? profileData.id : null))
    }
  }

  //-------Slider--------------
  const [isResetSlider, setIsResetSlider] = useState(false)
  const onChangeSlider = useCallback(
    debounce((minValue: number, maxValue: number) => {
      setIsResetSlider(false)
      const minCardsCount = minValue.toString()
      const maxCardsCount = maxValue.toString()

      dispatch(changeCardsCount({ minCardsCount, maxCardsCount }))
    }, 1000),
    []
  )

  //-------clear filter button------
  const onClickClearFilter = () => {
    setSearchInputValue('')
    setIsResetSlider(true)
    setSwitcherValue('All Cards')
    dispatch(resetState())
  }

  // reset redux state if user leave from page
  // useEffect(() => {
  //   return () => {
  //     dispatch(resetState())
  //   }
  // }, [])

  return {
    searchInputValue,
    changeSearchInputHandler,
    switcherValue,
    onChangeTabSwitcher,
    isResetSlider,
    onChangeSlider,
    onClickClearFilter,
  }
}
