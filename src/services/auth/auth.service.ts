import { LoginArgs, LoginResponse } from './auth.types.ts'

import { baseApi } from '@/services/base-api.ts'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<any, void>({
      query: () => ({
        url: 'v1/auth/me',
      }),
      providesTags: ['Me'],
    }),
    login: builder.mutation<LoginResponse, LoginArgs>({
      query: params => ({
        url: 'v1/auth/login',
        method: 'POST',
        body: params,
      }),
      invalidatesTags: ['Me'],
    }),
    signUp: builder.mutation<any, { email: string; password: string }>({
      query: params => ({
        url: 'v1/auth/sign-up',
        method: 'POST',
        body: params,
      }),
    }),
  }),
})

export const { useLoginMutation, useSignUpMutation, useGetMeQuery } = authService
