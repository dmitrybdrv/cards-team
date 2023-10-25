import { baseApi } from '@/services/base-api.ts'
import { DeckParams, DeckResponse } from '@/services/deck/deck.types.ts'

export const deckService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCards: builder.query<DeckResponse, DeckParams>({
      query: params => {
        const { id, ...rest } = params

        return { url: `v1/decks/${id}/cards`, method: 'GET', params: rest }
      },
    }),
  }),
})

export const { useGetCardsQuery } = deckService
