import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FriendsPackState {
  currentPage: number
}
const initialState: FriendsPackState = {
  currentPage: 1,
}

export const friendsPackSlice = createSlice({
  name: 'friendsPack',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
  },
})

export const { setCurrentPage } = friendsPackSlice.actions
