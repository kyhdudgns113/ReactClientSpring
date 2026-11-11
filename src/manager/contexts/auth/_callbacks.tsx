import {createContext, useCallback, useContext} from 'react'

import {useAuthActions} from '@redux'

import type {FC, PropsWithChildren} from 'react'

import * as COT from '@commonObjType'
import * as F from '@fetch'
import * as HTTP from '@httpType'
import * as LT from '@localType'
import * as NV from '@nullValue'
import * as S from '@secret'
import * as U from '@util'

// prettier-ignore
type ContextType = {
  refreshToken: (authLevel?: number, errCallback?: LT.CallbackType) => Promise<LT.APIReturnType>

  signUp: (userId: string, userEmail: string, userName: string, userPassword: string) => Promise<LT.APIReturnType>
}
// prettier-ignore
export const AuthCallbacksContext = createContext<ContextType>({
  refreshToken: async () => ({isSuccess: false, errMsg: '[AuthContext] refreshToken 이 초기화되지 않았어요'}),

  signUp: async () => ({isSuccess: false, errMsg: '[AuthContext] signUp 이 초기화되지 않았어요'}),
})

export const useAuthCallbacksContext = () => useContext(AuthCallbacksContext)

export const AuthCallbacksProvider: FC<PropsWithChildren> = ({children}) => {
  const {setAuth} = useAuthActions()

  const _writeAuthBodyObject = useCallback(async (body: COT.AuthObjectType, callback?: LT.CallbackType) => {
    await Promise.all([
      U.writeStringInLocal('jwtFromServer', body.jwtFromServer),
      U.writeStringInLocal('userAuth', body.userAuth.toString()),
      U.writeStringInLocal('userId', body.userId),
      U.writeStringInLocal('userEmail', body.userEmail),
      U.writeStringInLocal('userName', body.userName),
    ])

    setAuth(body)

    if (callback) {
      callback()
    }
  }, [])

  const refreshToken = useCallback(async (authLevel: number = S.AUTH_NONE, errCallback?: LT.CallbackType) => {
    const isJwt = await U.readStringInLocal('jwtFromServer')

    if (!isJwt) {
      _writeAuthBodyObject(NV.NullAuthBodyObject())

      if (errCallback) {
        errCallback()
      }

      return new Promise<LT.APIReturnType>(resolve => resolve({isSuccess: false}))
    }

    const url = '/auth/refreshToken'
    return F.get(url, isJwt)
      .then(res => {
        const {ok, body, statusCode, gkdErrMsg, message} = res

        if (ok) {
          const {jwtFromServer, userAuth, userId, userEmail, userName} = body
          _writeAuthBodyObject({jwtFromServer, userAuth, userId, userEmail, userName})

          if ((!userAuth || userAuth < authLevel) && errCallback) {
            errCallback()
          }
          return {isSuccess: true} as LT.APIReturnType
        } // ::
        else {
          U.alertErrMsg(url, statusCode, gkdErrMsg, message)
          _writeAuthBodyObject(NV.NullAuthBodyObject())
          return {isSuccess: false} as LT.APIReturnType
        }
      })
      .catch(errObj => {
        U.alertErrObj(url, errObj)
        _writeAuthBodyObject(NV.NullAuthBodyObject())

        if (errCallback) {
          errCallback()
        }
        return {isSuccess: false} as LT.APIReturnType
      })
  }, [])

  const signUp = useCallback((userId: string, userEmail: string, userName: string, userPassword: string) => {
    const url = '/auth/signUp'
    const body: HTTP.SignUpRequestType = {
      userId,
      userEmail,
      userName,
      userPassword,
    }
    return F.post(url, body, null)
      .then(res => {
        const {ok, body, statusCode, gkdErrMsg, message} = res

        if (ok) {
          const {jwtFromServer, userAuth} = body as HTTP.Auth_SignUpBodyType
          _writeAuthBodyObject({jwtFromServer, userAuth, userId, userEmail, userName})
          return {isSuccess: true} as LT.APIReturnType
        } // ::
        else {
          U.alertErrMsg(url, statusCode, gkdErrMsg, message)
          return {isSuccess: false} as LT.APIReturnType
        }
      })
      .catch(errObj => {
        U.alertErrObj(url, errObj)
        return {isSuccess: false} as LT.APIReturnType
      })
  }, [])

  // prettier-ignore
  const value: ContextType = {
    refreshToken,

    signUp,
  }
  return <AuthCallbacksContext.Provider value={value}>{children}</AuthCallbacksContext.Provider>
}
