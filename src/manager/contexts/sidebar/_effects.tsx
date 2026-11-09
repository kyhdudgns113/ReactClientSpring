import {createContext, useContext} from 'react'

import type {FC, PropsWithChildren} from 'react'

// prettier-ignore
type ContextType = {}
// prettier-ignore
export const SidebarEffectsContext = createContext<ContextType>({})

export const useSidebarEffectsContext = () => useContext(SidebarEffectsContext)

export const SidebarEffectsProvider: FC<PropsWithChildren> = ({children}) => {
  //
  return <SidebarEffectsContext.Provider value={{}}>{children}</SidebarEffectsContext.Provider>
}
