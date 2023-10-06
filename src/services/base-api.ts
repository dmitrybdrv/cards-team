import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  tagTypes: ['Me', 'Decks'],
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    // prepareHeaders: headers => {
    //   headers.append('x-auth-skip', 'true')
    // },
  }),
  endpoints: () => ({}),
})
