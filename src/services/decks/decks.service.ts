import { getDeckParams } from '@/common/utils/getDeckParams.ts'
import { toDeckFormData } from '@/common/utils/toDeckFormData.ts'
import { RootState } from '@/hooks/hooks.ts'
import { baseApi } from '@/services/base-api.ts'
import {
  CreateDeckArgs,
  DecksParams,
  DecksResponse,
  DecksResponseItem,
} from '@/services/decks/decks.types.ts'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDecks: builder.query<DecksResponse, DecksParams>({
      query: params => ({
        url: 'v1/decks',
        method: 'GET',
        params: params ?? {},
      }),
      providesTags: ['Decks'],
    }),
    createDeck: builder.mutation<DecksResponseItem, CreateDeckArgs>({
      query: body => {
        const formData = toDeckFormData(body)

        return {
          url: 'v1/decks',
          method: 'POST',
          body: formData,
        }
      },
      onQueryStarted: async (_, { getState, dispatch, queryFulfilled }) => {
        const state = getState() as RootState
        const decksParams = getDeckParams(state.decks)

        try {
          const result = await queryFulfilled

          dispatch(
            decksService.util.updateQueryData('getDecks', decksParams, draft => {
              draft.items.push(result.data)
            })
          )
        } catch (e) {
          /* empty */
        }
      },
      invalidatesTags: ['Decks'],
    }),
    deleteDecks: builder.mutation<DecksResponseItem, { id: string }>({
      query: data => ({
        url: `v1/decks/${data.id}`,
        method: 'DELETE',
      }),
      onQueryStarted: async ({ id }, { getState, dispatch, queryFulfilled }) => {
        const state = getState() as RootState
        const decksParams = getDeckParams(state.decks)
        const patchResult = dispatch(
          decksService.util.updateQueryData('getDecks', decksParams, draft => {
            draft.items.splice(
              draft.items.findIndex(item => item.id === id),
              1
            )
          })
        )

        try {
          await queryFulfilled
        } catch (e) {
          patchResult.undo()
        }
      },
      invalidatesTags: ['Decks', 'Cards'],
    }),
    updateDecks: builder.mutation<DecksResponseItem, CreateDeckArgs & { id: string }>({
      query: data => {
        const { id, ...body } = data

        const formData = toDeckFormData(body)

        return {
          url: `v1/decks/${id}`,
          method: 'PATCH',
          body: formData,
        }
      },
      onQueryStarted: async ({ id, cover, ...body }, { getState, dispatch, queryFulfilled }) => {
        // TODO  add cover (file64) to optimistic update
        const state = getState() as RootState
        const decksParams = getDeckParams(state.decks)
        const patchResult = dispatch(
          decksService.util.updateQueryData('getDecks', decksParams, draft => {
            const index = draft.items.findIndex(item => item.id === id)

            if (index !== -1) draft.items[index] = { ...draft.items[index], ...body }
          })
        )

        try {
          await queryFulfilled
        } catch (e) {
          patchResult.undo()
        }
      },
      invalidatesTags: ['Decks'],
    }),
  }),
})

export const {
  useUpdateDecksMutation,
  useGetDecksQuery,
  useCreateDeckMutation,
  useDeleteDecksMutation,
} = decksService
