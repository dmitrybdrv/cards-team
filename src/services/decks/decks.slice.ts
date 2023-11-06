import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { tabSwitcherValue } from '@/pages/decks-page'
import { TabSwitcher } from '@/services/decks/decks.types.ts'

const initialState = {
  name: '',
  currentPage: 1,
  itemsPerPage: 10,
  minCardsCount: '0',
  maxCardsCount: null as unknown as string | null,
  orderBy: null as unknown as string | null,
  switcherValue: tabSwitcherValue[1].value as TabSwitcher,
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
    changeCardsCount: (
      state,
      action: PayloadAction<{ minCardsCount: string; maxCardsCount: string }>
    ) => {
      state.minCardsCount = action.payload.minCardsCount
      state.maxCardsCount = action.payload.maxCardsCount
      state.currentPage = 1
    },
    changeOrderBy: (state, action: PayloadAction<string | null>) => {
      state.orderBy = action.payload
    },
    changeSwitcherValue: (state, action: PayloadAction<TabSwitcher>) => {
      state.switcherValue = action.payload
      state.currentPage = 1
    },
    resetState: (state, _action: PayloadAction<void>) => {
      state.name = ''
      state.switcherValue = tabSwitcherValue[1].value
      state.minCardsCount = '0'
      state.maxCardsCount = null
      state.currentPage = 1
      state.orderBy = null
    },
  },
})

export const {
  changeOrderBy,
  changeSwitcherValue,
  changeCardsCount,
  changeItemsPerPage,
  changeCurrentPage,
  changeSearchName,
  resetState,
} = decksSlice.actions
