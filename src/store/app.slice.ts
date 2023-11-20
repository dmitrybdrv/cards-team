import { AnyAction, createSlice } from '@reduxjs/toolkit'

export type LoadingState = 'idle' | 'loading' | 'success'

export type InitialStateType = {
  isLoading: LoadingState
  notifications: string | null
}

const initialState: InitialStateType = {
  isLoading: 'idle',
  notifications: null,
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
          state.notifications = 'Ok'
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
