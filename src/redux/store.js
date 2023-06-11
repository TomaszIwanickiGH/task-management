import { configureStore } from '@reduxjs/toolkit'
import boardNameReducer from './boardName'

export default configureStore({
  reducer: {
    boardName: boardNameReducer,
  },
})
