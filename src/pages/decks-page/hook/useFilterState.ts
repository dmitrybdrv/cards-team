import { ChangeEvent, useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/hooks/hooks.ts'
// import { tabSwitcherValue } from '@/pages/decks-page'
// import { useGetMeQuery } from '@/services/auth/auth.service.ts'
import {
  changeSwitcherValue,
  changeSearchName,
  resetState,
  changeMinCardsCount,
  changeMaxCardsCount,
} from '@/services/decks/decks.slice.ts'
import { TabSwitcher } from '@/services/decks/decks.types.ts'

export const useFilterState = () => {
  const dispatch = useAppDispatch()

  //----------input----------
  const searchInputValue = useAppSelector(state => state.decks.name)
  const changeSearchInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchName(e.currentTarget.value))
  }

  //---------switcher-------------
  // const { data: profileData } = useGetMeQuery()
  // const [switcherValue, setSwitcherValue] = useState(tabSwitcherValue[1].value)
  const switcherValue = useAppSelector(state => state.decks.switcherValue)
  const onChangeTabSwitcher = (value: '' | TabSwitcher) => {
    // switcher can return empty string if second click same button
    if (value !== '') {
      //for UI
      // setSwitcherValue(value)
      //for fetch
      dispatch(changeSwitcherValue(value))
    }
  }

  //-------Slider--------------
  const minCardsCount = useAppSelector(state => state.decks.minCardsCount)
  const maxCardsCount = useAppSelector(state => state.decks.maxCardsCount)
  const currentSliderValue = [Number(minCardsCount), Number(maxCardsCount)] as [number, number]
  const onChangeMinCardsCount = (minValue: string) => {
    dispatch(changeMinCardsCount(minValue))
  }
  const onChangeMaxCardsCount = (maxValue: string) => {
    dispatch(changeMaxCardsCount(maxValue))
  }
  // const [isResetSlider, setIsResetSlider] = useState(false)
  // const onChangeSlider = (minValue: number, maxValue: number) => {
  //   setIsResetSlider(false)
  //   const minCardsCount = minValue.toString()
  //   const maxCardsCount = maxValue.toString()
  //
  //   dispatch(changeMinCardsCount(minCardsCount))
  //   dispatch(changeMaxCardsCount(maxCardsCount))
  // }

  //-------clear filter button------
  const onClickClearFilter = () => {
    // setSearchInputValue('')
    // setIsResetSlider(true)
    // setSwitcherValue(tabSwitcherValue[1].value)
    dispatch(resetState())
  }

  return {
    searchInputValue,
    changeSearchInputHandler,
    switcherValue,
    onChangeTabSwitcher,
    currentSliderValue,
    // isResetSlider,
    // onChangeSlider,
    onChangeMinCardsCount,
    onChangeMaxCardsCount,
    onClickClearFilter,
  }
}
