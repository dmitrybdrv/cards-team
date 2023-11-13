import { AnyAction, createSlice } from '@reduxjs/toolkit'

export type LoadingState = 'idle' | 'loading' | 'success'

const initialState = {
  isLoading: 'idle' as LoadingState,
}

export const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    //   changeIsLoading: (state, action: PayloadAction<LoadingState>) => {
    //     state.isLoading = action.payload
    //   },
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        (action: AnyAction) => action.type.endsWith('/pending'),
        (state, _action) => {
          state.isLoading = 'loading'
        }
      )
      .addMatcher(
        (action: AnyAction) => action.type.endsWith('/fulfilled'),
        (state, _action) => {
          state.isLoading = 'success'
        }
      )
    //catch error
    // .addMatcher(
    //   (action: AnyAction) => action.type.endsWith('/rejected'),
    //   (state, _action) => {
    //     state.isLoading = 'loading'
    //   }
    // )
  },
})
