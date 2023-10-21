import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface EmailState {
  value: string
}
const initialState: EmailState = {
  value: '',
}

const emailSlice = createSlice({
  name: 'emailValue',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setEmail } = emailSlice.actions
export default emailSlice.reducer
