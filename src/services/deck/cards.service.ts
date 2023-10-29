import { baseApi } from '@/services/base-api.ts'
import { CardsParams, CardsResponse, CardsResponseItems } from '@/services/deck/cards.types.ts'
import { DecksResponseItem } from '@/services/decks/decks.types.ts'

export const cardsService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getUserCards: builder.query<CardsResponse, CardsParams>({
      query: params => {
        const { id, ...rest } = params

        return { url: `v1/decks/${id}/cards`, method: 'GET', params: rest }
      },
      providesTags: ['Cards'],
    }),
    getDeck: builder.query<DecksResponseItem, string>({
      query: id => {
        return { url: `v1/decks/${id}`, method: 'GET' }
      },
      providesTags: ['Deck'],
    }),
    createCard: builder.mutation<CardsResponseItems, CardsParams>({
      query: params => {
        return { url: `v1/decks/${params.id}`, method: 'POST' }
      },
    }),
  }),
})

export const { useCreateCardMutation, useGetDeckQuery, useGetUserCardsQuery } = cardsService
