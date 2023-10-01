import { LoginArgs, LoginResponse } from './auth.types.ts'

import { baseApi } from '@/services/base-api.ts'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<any, void>({
      async queryFn(_name, _api,_extraOptions, baseQuery) {
        const result = await baseQuery({
          url: 'v1/auth/me',
          method: 'GET',
        })
        if(result.error) {
          return {data: {success: false}}
        }
        return {data: result.data}
      },
      extraOptions: {
        maxRetries: 0,
      },
      providesTags: ['Me'],
      }),


    login: builder.mutation<LoginResponse, LoginArgs>({
      query: data => ({
        url: 'v1/auth/login',
        method: 'POST',
        body: data,
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
