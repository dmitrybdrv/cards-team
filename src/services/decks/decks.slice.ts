import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { DecksParams } from '@/services/decks/decks.types.ts'

const initialState = {
  decksParams: null as unknown as DecksParams,
}

export const decksSlice = createSlice({
  name: 'decks',
  initialState: initialState,
  reducers: {
    updateDecksParams: (state, action: PayloadAction<DecksParams>) => {
      state.decksParams = action.payload
    },
  },
})
