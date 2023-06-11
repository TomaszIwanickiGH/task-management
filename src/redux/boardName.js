import { createSlice } from '@reduxjs/toolkit'

export const boardNameSlice = createSlice({
  name: 'boardnName',
  initialState: {
    name: 'Platform Launch',
  },
  reducers: {
    setBoardName: (state, action) => {
      state.name = action.payload
    },
  },
})

export const { setBoardName } = boardNameSlice.actions

export default boardNameSlice.reducer
