import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { DecksParams } from '@/services/decks/decks.types.ts'

const initialState = {
  decksParams: null as unknown as DecksParams,
  name: '',
  currentPage: 1,
  itemsPerPage: 10,
  minCardsCount: '0',
  maxCardsCount: null as unknown as string,
  orderBy: null as unknown as string | null,
  authorId: null as unknown as string | null,
}

export type InitialDeck = typeof initialState

export const decksSlice = createSlice({
  name: 'decks',
  initialState: initialState,
  reducers: {
    updateDecksParams: (state, action: PayloadAction<DecksParams>) => {
      state.decksParams = action.payload
    },
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
    changeOrderBy: (state, action: PayloadAction<string | null>) => {
      state.orderBy = action.payload
    },
    changeAuthorId: (state, action: PayloadAction<string | null>) => {
      state.authorId = action.payload
      state.currentPage = 1
    },
    resetState: (state, _action: PayloadAction<void>) => {
      state.name = ''
      state.authorId = null
      state.currentPage = 1
    },
  },
})

export const {
  changeOrderBy,
  changeAuthorId,
  changeMaxCardsCount,
  changeMinCardsCount,
  changeItemsPerPage,
  changeCurrentPage,
  changeSearchName,
  updateDecksParams,
  resetState,
} = decksSlice.actions
