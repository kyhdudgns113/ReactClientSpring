import {createContext, useCallback, useContext} from 'react'

import {checkLock, useSideBarActions} from '@redux'

import type {FC, PropsWithChildren} from 'react'

import * as LT from '@localType'
import * as SV from '@settingValue'

// prettier-ignore
type ContextType = {
  changeRighter: ReturnType<typeof checkLock<[LT.RighterType, LT.RighterType], Promise<void>>>
}
// prettier-ignore
export const SidebarCallbacksContext = createContext<ContextType>({
  changeRighter: checkLock('righter', async (_before: LT.RighterType, _after: LT.RighterType) => {}),
})

export const useSidebarCallbacksContext = () => useContext(SidebarCallbacksContext)

export const SidebarCallbacksProvider: FC<PropsWithChildren> = ({children}) => {
  const {closeRighter, setRighterType} = useSideBarActions()
  // ::
  const changeRighter = useCallback(
    checkLock(
      'righter',
      async (before: LT.RighterType, after: LT.RighterType): Promise<void> => {
        // 같은걸 눌렀을때
        if (before === after) {
          await new Promise(resolve => setTimeout(resolve, SV.RIGHTER_TRANSITION_MS))
          return
        } // ::
        else {
          closeRighter()
          await new Promise(resolve => setTimeout(resolve, SV.RIGHTER_TRANSITION_MS))
          setRighterType(after)
          return
        }
      },
      () => {}
    ),
    []
  )

  // prettier-ignore
  const value: ContextType = {
    changeRighter,
  }
  return <SidebarCallbacksContext.Provider value={value}>{children}</SidebarCallbacksContext.Provider>
}
