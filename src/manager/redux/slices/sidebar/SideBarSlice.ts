import {createSlice} from '@reduxjs/toolkit'

// import type {PayloadAction} from '@reduxjs/toolkit' // eslint-disable-line
import type {RighterType} from '@localType'

interface SideBarState {
  isLefterOpen: boolean
  righterType: RighterType
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
    openRighterLogIn: state => {
      state.righterType = 'logIn'
    },
    openRighterSignUp: state => {
      state.righterType = 'signUp'
    },

    toggleLefter: state => {
      state.isLefterOpen = !state.isLefterOpen
    },
  },
})
