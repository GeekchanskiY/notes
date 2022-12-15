import { configureStore } from '@reduxjs/toolkit'
import JWTReducer from '../features/JWTSlice'

export default configureStore({
    reducer: {
        jwt: JWTReducer,
    },
  })