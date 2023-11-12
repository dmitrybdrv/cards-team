import { toCardFormData } from '@/common/utils/toCardFormData.ts'
import { baseApi } from '@/services/base-api.ts'
import {
  CardResponse,
  CardsParams,
  CardsResponse,
  CardsResponseItems,
  CurrentCardData,
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
      providesTags: ['Cards'],
    }),
    createCard: builder.mutation<CardsResponseItems, CurrentCardData>({
      query: params => {
        const { id, ...rest } = params

        if (params.questionImg || params.answerImg) {
          const body = toCardFormData(rest)

          return { url: `v1/decks/${id}/cards`, method: 'POST', body }
        }

        return { url: `v1/decks/${id}/cards`, method: 'POST', body: rest }
      },
      invalidatesTags: ['Cards'],
    }),
    getCard: builder.query<CardResponse, string>({
      query: id => {
        return { url: `v1/decks/${id}/learn`, method: 'GET' }
      },
      providesTags: ['Cards'],
    }),
    deleteCard: builder.mutation<CardResponse, string>({
      query: id => {
        return { url: `v1/cards/${id}`, method: 'DELETE' }
      },
      invalidatesTags: ['Cards'],
    }),
    updateCard: builder.mutation<CardResponse, CurrentCardData>({
      query: params => {
        const { id, ...rest } = params

        if (params.questionImg || params.answerImg) {
          const body = toCardFormData(rest)

          return { url: `v1/cards/${id}`, method: 'PATCH', body }
        }

        return { url: `v1/cards/${id}`, method: 'PATCH', body: rest }
      },
      invalidatesTags: ['Cards'],
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
  useCreateCardMutation,
  useGetDeckQuery,
  useGetUserCardsQuery,
  useDeleteCardMutation,
  useUpdateCardMutation,
  useUpdateGradeCardMutation,
} = cardsService
