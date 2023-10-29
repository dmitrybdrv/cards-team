import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FriendsPackState {
  currentPage: number
  itemPerPage: number
}
const initialState: FriendsPackState = {
  currentPage: 1,
  itemPerPage: 10,
}

export const friendsPackSlice = createSlice({
  name: 'friendsPack',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setItemPerPage: (state, action: PayloadAction<number>) => {
      state.itemPerPage = action.payload
    },
  },
})

export const { setCurrentPage, setItemPerPage } = friendsPackSlice.actions
