import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  currentPage: 1,
  itemPerPage: 10,
  orderBy: null as unknown as string | null,
  name: '',
}

export type InitialCards = typeof initialState

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setItemPerPage: (state, action: PayloadAction<number>) => {
      state.itemPerPage = action.payload
      state.currentPage = 1
    },
    changeOrderBy: (state, action: PayloadAction<string | null>) => {
      state.orderBy = action.payload
    },
    changeSearchName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
      state.currentPage = 1
    },
  },
})

export const { setCurrentPage, setItemPerPage, changeOrderBy, changeSearchName } =
  cardsSlice.actions
