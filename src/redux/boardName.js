import { createSlice } from '@reduxjs/toolkit'

export const boardNameSlice = createSlice({
  name: 'boardnName',
  initialState: {
    name: 'Platform Launch',
    isClosed: false,
  },
  reducers: {
    setBoardName: (state, action) => {
      state.name = action.payload
    },
    openTask: (state) => {
      state.isClosed = true
    },
    closeTask: (state) => {
      state.isClosed = false
    },
  },
})

export const { setBoardName, openTask, closeTask } = boardNameSlice.actions

export default boardNameSlice.reducer
