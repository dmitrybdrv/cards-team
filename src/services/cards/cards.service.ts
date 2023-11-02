import { baseApi } from '@/services/base-api.ts'
import {
  CardResponse,
  CardsParams,
  CardsResponse,
  CardsResponseItems,
} from '@/services/cards/cards.types.ts'
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
        const { id, ...rest } = params

        return { url: `v1/decks/${id}/cards`, method: 'POST', body: rest }
      },
      invalidatesTags: ['Cards'],
    }),
    getCard: builder.query<CardResponse, string>({
      query: id => ({
        url: `v1/decks/${id}/learn`,
      }),
    }),
  }),
})

export const { useGetCardQuery, useCreateCardMutation, useGetDeckQuery, useGetUserCardsQuery } =
  cardsService
