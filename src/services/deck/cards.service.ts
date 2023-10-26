import { baseApi } from '@/services/base-api.ts'
import { CardsParams, CardsResponse } from '@/services/deck/cards.types.ts'
import { DecksResponseItems } from '@/services/decks/decks.types.ts'

export const cardsService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getUserCards: builder.query<CardsResponse, CardsParams>({
      query: params => {
        const { id, ...rest } = params

        return { url: `v1/decks/${id}/cards`, method: 'GET', params: rest }
      },
      providesTags: ['Cards'],
    }),
    getDeck: builder.query<DecksResponseItems, string>({
      query: id => {
        return { url: `v1/decks/${id}`, method: 'GET' }
      },
      providesTags: ['Deck'],
    }),
  }),
})

export const { useGetDeckQuery, useGetUserCardsQuery } = cardsService
