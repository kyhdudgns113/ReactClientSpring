import {useAppSelector, useAppDispatch} from '@redux'

import {LockSlice} from './LockSlice'

export const useLockStates = () => useAppSelector(state => state.lock)

export const useLockActions = () => {
  const dispatch = useAppDispatch()

  return {
    setLock: (key: string) => dispatch(LockSlice.actions.setLock({key, value: true})),

    resetLock: (key: string) => dispatch(LockSlice.actions.setLock({key, value: false})),
  }
}

// export const useCopyMeCount = () => useAppSelector(state => state.copyMe.count)
export const useLockValue = (key: string) => {
  const {lockMap} = useLockStates()

  return lockMap[key]
}
