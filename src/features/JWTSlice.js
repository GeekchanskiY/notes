import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
    authentificated: false,
    token: null,
    username: null,
    email: null,
    role: null,
  }

export const JWTSlice = createSlice({
  name: 'JWT',
  initialState,
  reducers: {
    login: (state, action) => {
        state.authentificated = action.payload.authentificated
        state.token = action.payload.token
        state.username = action.payload.username
        state.role = action.payload.role
        state.email = action.payload.email
    },
    logout: (state, action) => {
        state.authentificated = action.payload.authentificated
        state.token = action.payload.token
        state.username = action.payload.username
        state.role = action.payload.role
        state.email = action.payload.email
    }
  },
})

export const { login, logout } = JWTSlice.actions

export default JWTSlice.reducer