import {createSlice} from '@reduxjs/toolkit'

import type {PayloadAction} from '@reduxjs/toolkit' // eslint-disable-line

interface LockState {
  lockMap: {[key: string]: boolean}
}

const initialState: LockState = {
  lockMap: {},
}

export const LockSlice = createSlice({
  name: 'lock',
  initialState,
  reducers: {
    setLock: (state, action: PayloadAction<{key: string; value: boolean}>) => {
      const {key, value} = action.payload

      state.lockMap[key] = value
    },
  },
})
