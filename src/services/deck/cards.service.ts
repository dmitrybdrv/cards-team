import { baseApi } from '@/services/base-api.ts'
import { CardsParams, CardsResponse, CardsResponseItems } from '@/services/deck/cards.types.ts'

export const cardsService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCards: builder.query<CardsResponse, CardsParams>({
      query: params => {
        const { id, ...rest } = params

        return { url: `v1/decks/${id}/cards`, method: 'GET', params: rest }
      },
    }),
    getUserCard: builder.query<CardsResponseItems, { id: string }>({
      query: id => {
        return { url: `v1/decks/${id}`, method: 'GET' }
      },
    }),
  }),
})

export const { useGetCardsQuery, useGetUserCardQuery } = cardsService
