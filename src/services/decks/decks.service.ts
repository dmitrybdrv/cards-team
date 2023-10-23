import { baseApi } from '@/services/base-api.ts'
import { decksSlice } from '@/services/decks/decks.slice.ts'
import {
  CreateDeckArgs,
  DecksParams,
  DecksResponse,
  DecksResponseItems,
} from '@/services/decks/decks.types.ts'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDecks: builder.query<DecksResponse, DecksParams>({
      query: params => ({
        url: 'v1/decks',
        method: 'GET',
        params: params ?? {},
      }),
      onQueryStarted: async (params, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled
          dispatch(decksSlice.actions.updateDecksParams(params))
        } catch (e) {
          console.log(e)
        }
      },
      providesTags: ['Decks'],
    }),
    createDeck: builder.mutation<any, CreateDeckArgs>({
      query: body => ({
        url: 'v1/decks',
        method: 'POST',
        body,
      }),
      // async onQueryStarted(_, { dispatch, queryFulfilled }) {
      //   try {
      //     const response = await queryFulfilled
      //
      //     console.log(response)
      //     dispatch(
      //       decksService.util.updateQueryData(
      //         'getDecks',
      //         { authorId: '1', currentPage: 1 },
      //         draft => {
      //           draft.items.push(response.data)
      //         }
      //       )
      //     )
      //
      //     await queryFulfilled
      //   } catch (error) {
      //     console.log(error)
      //   }
      //   /**
      //    * Alternatively, on failure you can invalidate the corresponding cache tags
      //    * to trigger a re-fetch:
      //    * dispatch(api.util.invalidateTags(['Post']))
      //    */
      // },
      invalidatesTags: ['Decks'],
    }),
    deleteDecks: builder.mutation<DecksResponseItems, { id: string }>({
      query: data => ({
        url: `v1/decks/${data.id}`,
        method: 'DELETE',
      }),
      // async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
      //   const patchResult = dispatch(
      //     decksService.util.updateQueryData('getDecks', { currentPage: 1 }, draft => {
      //       draft.items = draft.items.filter(item => item.id !== id)
      //     })
      //   )
      //
      //   try {
      //     await queryFulfilled
      //   } catch (error) {
      //     patchResult.undo()
      //   }
      // },
      invalidatesTags: ['Decks'],
    }),
    updateDecks: builder.mutation<DecksResponseItems, CreateDeckArgs & { id: string }>({
      query: data => ({
        url: `v1/decks/${data.id}`,
        method: 'PATCH',
        body: {
          name: data.name,
          isPrivate: data.isPrivate,
          cover: data.cover ?? null,
        },
      }),
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
