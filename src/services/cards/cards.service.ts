import { baseApi } from '@/services/base-api.ts'
import {
  CardResponse,
  CardsParams,
  CardsResponse,
  CardsResponseItems,
  UpdateGradeCardArgs,
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
        return { url: `v1/decks/${params.id}`, method: 'POST' }
      },
    }),
    getCard: builder.query<CardResponse, string>({
      query: id => ({
        url: `v1/decks/${id}/learn`,
      }),
    }),
    updateGradeCard: builder.mutation<CardResponse, UpdateGradeCardArgs>({
      query: arg => {
        const { id, ...body } = arg

        return {
          url: `v1/decks/${id}/learn`,
          method: 'POST',
          body,
        }
      },
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          const result = await queryFulfilled

          dispatch(
            cardsService.util.updateQueryData('getCard', arg.id, _draft => {
              return result.data
            })
          )
        } catch (e) {
          /* empty */
        }
      },
    }),
  }),
})

export const {
  useGetCardQuery,
  useUpdateGradeCardMutation,
  useCreateCardMutation,
  useGetDeckQuery,
  useGetUserCardsQuery,
} = cardsService
