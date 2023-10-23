import {
  LoginArgs,
  LoginResponse,
  ProfileResponse,
  SingUpArgs,
  SingUpResponse,
  UpdateProfile,
} from './auth.types.ts'

import { baseApi } from '@/services/base-api.ts'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<any, void>({
      async queryFn(_name, _api, _extraOptions, baseQuery) {
        const result = await baseQuery({
          url: 'v1/auth/me',
          method: 'GET',
        })

        if (result.error) {
          return { data: { success: false } }
        }

        return { data: result.data }
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
    logout: builder.mutation<void, void>({
      query: () => ({
        url: 'v1/auth/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Me'],
    }),
    signUp: builder.mutation<SingUpResponse, SingUpArgs>({
      query: params => ({
        url: 'v1/auth/sign-up',
        method: 'POST',
        body: params,
      }),
    }),
    //TODO типизировать ANY
    updateProfile: builder.mutation<ProfileResponse, UpdateProfile>({
      query: data => ({
        url: 'v1/auth/me',
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Me'],
    }),
  }),
})

export const {
  useLoginMutation,
  useSignUpMutation,
  useGetMeQuery,
  useLogoutMutation,
  useUpdateProfileMutation,
} = authService
