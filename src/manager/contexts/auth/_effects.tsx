import {createContext, useContext, useEffect} from 'react'

import {useAuthCallbacksContext} from './_callbacks'

import type {FC, PropsWithChildren} from 'react'

// prettier-ignore
type ContextType = {}
// prettier-ignore
export const AuthEffectsContext = createContext<ContextType>({})

export const useAuthEffectsContext = () => useContext(AuthEffectsContext)

export const AuthEffectsProvider: FC<PropsWithChildren> = ({children}) => {
  const {refreshToken} = useAuthCallbacksContext()

  // 자동갱신 : 회원정보 local 에서 불러오기
  useEffect(() => {
    refreshToken()
  }, [])

  //
  return <AuthEffectsContext.Provider value={{}}>{children}</AuthEffectsContext.Provider>
}
