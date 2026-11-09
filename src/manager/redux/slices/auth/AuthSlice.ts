import {createSlice} from '@reduxjs/toolkit'

import type {PayloadAction} from '@reduxjs/toolkit' // eslint-disable-line

import * as COT from '@commonObjType'

interface AuthState {
  userAuth: number
  userId: string
  userEmail: string
  userName: string
}

const initialState: AuthState = {
  userAuth: 0,
  userId: '',
  userEmail: '',
  userName: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuth: state => {
      state.userAuth = initialState.userAuth
      state.userId = initialState.userId
      state.userEmail = initialState.userEmail
      state.userName = initialState.userName
    },

    setAuth: (state, action: PayloadAction<COT.AuthObjectType>) => {
      const {userAuth, userId, userEmail, userName} = action.payload
      state.userAuth = userAuth
      state.userId = userId
      state.userEmail = userEmail
      state.userName = userName
    },
  },
})
