import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Sort } from '@/components'
import { tabSwitcherValue } from '@/pages/decks-page'
import { TabSwitcher } from '@/services/decks/decks.types.ts'

const initialState = {
  name: '',
  currentPage: 1,
  itemsPerPage: 10,
  minCardsCount: '0',
  maxCardsCount: null as unknown as string | null,
  orderBy: { orderName: null, direction: null } as Sort,
  switcherValue: tabSwitcherValue[1].value as TabSwitcher,
  userId: null as unknown as string | null,
}

export type InitialDeck = typeof initialState

export const decksSlice = createSlice({
  name: 'decks',
  initialState: initialState,
  reducers: {
    changeSearchName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
      state.currentPage = 1
    },
    changeCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    changeItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload
      state.currentPage = 1
    },
    changeMinCardsCount: (state, action: PayloadAction<string>) => {
      state.minCardsCount = action.payload
      state.currentPage = 1
    },
    changeMaxCardsCount: (state, action: PayloadAction<string>) => {
      state.maxCardsCount = action.payload
      state.currentPage = 1
    },
    changeOrderBy: (state, action: PayloadAction<Sort>) => {
      state.orderBy = action.payload
    },
    changeSwitcherValue: (state, action: PayloadAction<TabSwitcher>) => {
      state.switcherValue = action.payload
      state.currentPage = 1
    },
    changeUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload
    },
    resetState: (state, _action: PayloadAction<void>) => {
      state.name = ''
      state.switcherValue = tabSwitcherValue[1].value
      state.minCardsCount = '0'
      state.maxCardsCount = null
      state.currentPage = 1
      // state.orderBy = { orderName: null, direction: null }
    },
  },
})

export const {
  changeOrderBy,
  changeSwitcherValue,
  changeMinCardsCount,
  changeMaxCardsCount,
  changeItemsPerPage,
  changeCurrentPage,
  changeSearchName,
  changeUserId,
  resetState,
} = decksSlice.actions
