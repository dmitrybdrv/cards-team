import { baseApi } from '@/services/base-api.ts'
import { DeckParams, DeckResponse } from '@/services/deck/deck.types.ts'

export const deckService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDeck: builder.query<DeckResponse, DeckParams>({
      query: params => ({
        url: `v1/decks/${params.id}/cards`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetDeckQuery } = deckService
