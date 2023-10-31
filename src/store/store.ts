import { configureStore } from '@reduxjs/toolkit'

import { baseApi } from '@/services/base-api.ts'
import { decksSlice } from '@/services/decks/decks.slice.ts'
import { cardsSlice } from '@/store/cards.slice.ts'
import { emailSlice } from '@/store/email.slice.ts'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [decksSlice.name]: decksSlice.reducer,
    [emailSlice.name]: emailSlice.reducer,
    [cardsSlice.name]: cardsSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})
