import {AuthProvider} from './auth'
import {LockProvider} from './lock'

import type {FC, PropsWithChildren} from 'react'

/**
 * TotalProvider
 *
 * - context 폴더 내에서 만든 Context 들의 Provider 들을 모두 감싸는 Provider
 * - context 폴더 내의 상하관계를 여기서 정리하기 위해 만들었다
 */
export const TotalProvider: FC<PropsWithChildren> = ({children}) => {
  return (
    <LockProvider>
      <AuthProvider>{children}</AuthProvider>
    </LockProvider>
  )
}
