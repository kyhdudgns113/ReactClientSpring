import {createContext, useContext, useEffect} from 'react'

import {useAuth_UserId, useAuth_UserEmail} from '@redux'

import type {FC, PropsWithChildren} from 'react'

// prettier-ignore
type ContextType = {}
// prettier-ignore
export const AuthEffectsContext = createContext<ContextType>({})

export const useAuthEffectsContext = () => useContext(AuthEffectsContext)

export const AuthEffectsProvider: FC<PropsWithChildren> = ({children}) => {
  const userId = useAuth_UserId()
  const userEmail = useAuth_UserEmail()

  // 자동갱신 : 회원정보 local 에서 불러오기
  useEffect(() => {
    //
  }, [])

  //
  return <AuthEffectsContext.Provider value={{}}>{children}</AuthEffectsContext.Provider>
}
