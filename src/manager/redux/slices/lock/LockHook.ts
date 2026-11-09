import {store} from '@redux'

import {LockSlice} from './LockSlice'

/*
export const useLockStates = () => useAppSelector(state => state.lock)
*/

/*
export const useLockActions = () => {
  const dispatch = useAppDispatch()

  return {
    setLock: (key: string) => dispatch(LockSlice.actions.setLock({key, value: true})),

    resetLock: (key: string) => dispatch(LockSlice.actions.setLock({key, value: false})),
  }
}
  */

const isLocked = (key: string) => Boolean(store.getState().lock.lockMap[key])
const lock = (key: string) => store.dispatch(LockSlice.actions.setLock({key, value: true}))
const unlock = (key: string) => store.dispatch(LockSlice.actions.setLock({key, value: false}))

/**
 * checkLock
 *
 * - useCallback 안에서 쓰는 lock 래퍼이다
 * - lock 이 걸려있으면 errFunc 를 호출한다
 * - 아니면 lock 을 걸고 함수를 실행한 뒤, 끝나면 푼다
 * - Promise 를 반환하면 resolve/reject 이후에 푼다
 *
 * @example
 * const onClick = useCallback(
 *   checkLock('righter', () => {
 *     // ...
 *   }, () => alert('아직 처리 중')),
 *   []
 * )
 */
export function checkLock<Args extends unknown[], R>(
  key: string,
  originalFunc: (...args: Args) => R,
  errFunc?: () => void
): (...args: Args) => R | undefined {
  return (...args: Args) => {
    if (isLocked(key)) {
      errFunc?.()
      return
    }

    lock(key)

    try {
      const result = originalFunc(...args)

      if (result instanceof Promise) {
        return result.finally(() => unlock(key)) as R
      }

      unlock(key)
      return result
      // ::
    } catch (err) {
      // ::
      unlock(key)
      throw err
      // ::
    }
  }
}
