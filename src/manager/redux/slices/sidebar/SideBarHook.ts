import {useAppSelector, useAppDispatch} from '@redux'

import {SideBarSlice} from './SideBarSlice'

export const useSideBarStates = () => useAppSelector(state => state.sideBar)

export const useSideBarActions = () => {
  const dispatch = useAppDispatch()

  return {
    closeLefter: () => dispatch(SideBarSlice.actions.closeLefter()),
    closeRighter: () => dispatch(SideBarSlice.actions.closeRighter()),

    openLefter: () => dispatch(SideBarSlice.actions.openLefter()),
    openRighterLogIn: () => dispatch(SideBarSlice.actions.openRighterLogIn()),
    openRighterSignUp: () => dispatch(SideBarSlice.actions.openRighterSignUp()),

    toggleLefter: () => dispatch(SideBarSlice.actions.toggleLefter()),
  }
}

export const useIsLefterOpen = () => useAppSelector(state => state.sideBar.isLefterOpen)
export const useRighterType = () => useAppSelector(state => state.sideBar.righterType)
