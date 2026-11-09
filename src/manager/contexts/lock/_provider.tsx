import {LockCallbacksProvider} from './_callbacks'
import {LockEffectsProvider} from './_effects'

import type {FC, PropsWithChildren} from 'react'

export const LockProvider: FC<PropsWithChildren> = ({children}) => {
  return (
    <LockCallbacksProvider>
      <LockEffectsProvider>{children}</LockEffectsProvider>
    </LockCallbacksProvider>
  )
}
