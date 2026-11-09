import {useAppSelector, useAppDispatch} from '@redux'

import {CopyMeSlice} from './CopyMeSlice'

export const useCopyMeStates = () => useAppSelector(state => state.copyMe)

export const useCopyMeActions = () => {
  const dispatch = useAppDispatch()

  return {
    switchCopyMe: () => dispatch(CopyMeSlice.actions.switchCopyMe()),
    setCountCopyMe: (count: number) => dispatch(CopyMeSlice.actions.setCountCopyMe(count)),
    setArgsCopyMe: (count: number, name: string) => dispatch(CopyMeSlice.actions.setArgsCopyMe({count, name})),
  }
}

// export const useCopyMeCount = () => useAppSelector(state => state.copyMe.count)
