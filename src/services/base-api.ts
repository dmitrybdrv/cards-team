import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {baseQueryWithReauth} from "@/services/base-querty-reauth.ts";

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: ['Decks', 'Me'],
  baseQuery: baseQueryWithReauth({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
  }),
  endpoints: () => ({}),
})
