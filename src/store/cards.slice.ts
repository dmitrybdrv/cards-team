import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CardsState {
  currentPage: number
  itemPerPage: number
  searchValue: string
}
const initialState: CardsState = {
  currentPage: 1,
  itemPerPage: 10,
  searchValue: '',
}

export const cardsSlice = createSlice({
  name: 'friendsPack',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setItemPerPage: (state, action: PayloadAction<number>) => {
      state.itemPerPage = action.payload
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    },
  },
})

export const { setCurrentPage, setItemPerPage, setSearchValue } = cardsSlice.actions
