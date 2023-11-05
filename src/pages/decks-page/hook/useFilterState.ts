import { ChangeEvent, useCallback, useState } from 'react'

import { debounce } from '@/common/utils/debounce.ts'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks.ts'
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
  const searchInputValue = useAppSelector(state => state.decks.name)
  const changeSearchInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
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
    // setSearchInputValue('')
    setIsResetSlider(true)
    setSwitcherValue(tabSwitcherValue[1].value)
    dispatch(resetState())
  }

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
