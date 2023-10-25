import { baseApi } from '@/services/base-api.ts'
import { DeckParams, DeckResponse } from '@/services/deck/cards.types.ts'

export const cardsService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCards: builder.query<DeckResponse, DeckParams>({
      query: params => {
        const { id, ...rest } = params

        return { url: `v1/decks/${id}/cards`, method: 'GET', params: rest }
      },
    }),
  }),
})

export const { useGetCardsQuery } = cardsService
