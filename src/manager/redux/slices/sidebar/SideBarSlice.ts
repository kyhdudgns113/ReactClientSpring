import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

// import type {PayloadAction} from '@reduxjs/toolkit' // eslint-disable-line
import * as LT from '@localType'

interface SideBarState {
  isLefterOpen: boolean
  righterType: LT.RighterType
}

const initialState: SideBarState = {
  isLefterOpen: false,
  righterType: null,
}

export const SideBarSlice = createSlice({
  name: 'sideBar',
  initialState,
  reducers: {
    closeLefter: state => {
      state.isLefterOpen = false
    },
    closeRighter: state => {
      state.righterType = null
    },

    openLefter: state => {
      state.isLefterOpen = true
    },

    setRighterType: (state, action: PayloadAction<{type: LT.RighterType}>) => {
      state.righterType = action.payload.type
    },

    toggleLefter: state => {
      state.isLefterOpen = !state.isLefterOpen
    },
  },
})
