import {useAppSelector, useAppDispatch} from '@redux'

import {SideBarSlice} from './SideBarSlice'

import * as LT from '@localType'

export const useSideBarStates = () => useAppSelector(state => state.sideBar)

export const useSideBarActions = () => {
  const dispatch = useAppDispatch()

  return {
    closeLefter: () => dispatch(SideBarSlice.actions.closeLefter()),
    closeRighter: () => dispatch(SideBarSlice.actions.closeRighter()),

    openLefter: () => dispatch(SideBarSlice.actions.openLefter()),

    setRighterType: (type: LT.RighterType) => dispatch(SideBarSlice.actions.setRighterType({type})),

    toggleLefter: () => dispatch(SideBarSlice.actions.toggleLefter()),
  }
}

export const useIsLefterOpen = () => useAppSelector(state => state.sideBar.isLefterOpen)
export const useRighterType = () => useAppSelector(state => state.sideBar.righterType)
