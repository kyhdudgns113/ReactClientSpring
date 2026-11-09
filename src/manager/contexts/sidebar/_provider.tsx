import {SidebarCallbacksProvider} from './_callbacks'
import {SidebarEffectsProvider} from './_effects'

import type {FC, PropsWithChildren} from 'react'

export const SidebarProvider: FC<PropsWithChildren> = ({children}) => {
  return (
    <SidebarCallbacksProvider>
      <SidebarEffectsProvider>{children}</SidebarEffectsProvider>
    </SidebarCallbacksProvider>
  )
}
