import {createContext, useCallback, useContext} from 'react'

import {useAuthActions} from '@redux'

import type {FC, PropsWithChildren} from 'react'

import * as COT from '@commonObjType'
import * as CU from '@commonUtil'
import * as F from '@fetch'
import * as HTTP from '@httpType'
import * as LT from '@localType'
import * as NV from '@nullValue'
import * as S from '@secret'
import * as U from '@util'

// prettier-ignore
type ContextType = {
  logIn: (userIdOrEmail: string, password: string) => Promise<LT.APIReturnType>
  logOut: () => Promise<void>
  refreshToken: (authLevel?: number, errCallback?: LT.CallbackType) => Promise<LT.APIReturnType>
  signUp: (userId: string, userEmail: string, userName: string, userPassword: string) => Promise<LT.APIReturnType>
}
// prettier-ignore
export const AuthCallbacksContext = createContext<ContextType>({
  logIn: async () => ({isSuccess: false, errMsg: '[AuthContext] logIn 이 초기화되지 않았어요'}),
  logOut: async () => {throw new Error('[AuthContext] logOut 이 초기화되지 않았어요')},
  refreshToken: async () => ({isSuccess: false, errMsg: '[AuthContext] refreshToken 이 초기화되지 않았어요'}),
  signUp: async () => ({isSuccess: false, errMsg: '[AuthContext] signUp 이 초기화되지 않았어요'}),
})

export const useAuthCallbacksContext = () => useContext(AuthCallbacksContext)

export const AuthCallbacksProvider: FC<PropsWithChildren> = ({children}) => {
  const {setAuth} = useAuthActions()

  const _writeAuthBodyObject = useCallback(async (body: COT.AuthObjectType, callback?: LT.CallbackType) => {
    await Promise.all([
      U.writeStringInLocal('jwt', CU.encodeJwtFromClient(CU.decodeJwtFromServer(body.jwtFromServer))),
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

  const logIn = useCallback(async (userIdOrEmail: string, password: string) => {
    const url = '/auth/logIn'
    const body: HTTP.LogInRequestType = {
      userIdOrEmail,
      password,
    }
    return F.post_NoJWT(url, body)
      .then(async res => {
        const {ok, body, statusCode, gkdErrMsg, message} = res

        if (ok) {
          const {jwtFromServer, userAuth, userId, userEmail, userName} = body as HTTP.Auth_LogInBodyType
          await _writeAuthBodyObject({jwtFromServer, userAuth, userId, userEmail, userName})
          return {isSuccess: true} as LT.APIReturnType
        } // ::
        else {
          U.alertErrMsg(url, statusCode, gkdErrMsg, message)
          await _writeAuthBodyObject(NV.NullAuthBodyObject())
          return {isSuccess: false} as LT.APIReturnType
        }
      })
      .catch(async errObj => {
        U.alertErrObj(url, errObj)
        await _writeAuthBodyObject(NV.NullAuthBodyObject())
        return {isSuccess: false} as LT.APIReturnType
      })
  }, [])

  const logOut = useCallback(async () => {
    await _writeAuthBodyObject(NV.NullAuthBodyObject())
  }, [])

  const refreshToken = useCallback(async (authLevel: number = S.AUTH_NONE, errCallback?: LT.CallbackType) => {
    const isJwt = await U.readStringInLocal('jwt')

    if (!isJwt) {
      await _writeAuthBodyObject(NV.NullAuthBodyObject())

      if (errCallback) {
        errCallback()
      }

      return new Promise<LT.APIReturnType>(resolve => resolve({isSuccess: false}))
    }

    const url = '/auth/refreshToken'
    return F.get_WithJWT(url)
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
      .catch(async errObj => {
        U.alertErrObj(url, errObj)
        await _writeAuthBodyObject(NV.NullAuthBodyObject())

        if (errCallback) {
          errCallback()
        }
        return {isSuccess: false} as LT.APIReturnType
      })
  }, [])

  const signUp = useCallback(async (userId: string, userEmail: string, userName: string, userPassword: string) => {
    const url = '/auth/signUp'
    const body: HTTP.SignUpRequestType = {
      userId,
      userEmail,
      userName,
      userPassword,
    }
    return F.post_NoJWT(url, body)
      .then(async res => {
        const {ok, body, statusCode, gkdErrMsg, message} = res

        if (ok) {
          const {jwtFromServer, userAuth} = body as HTTP.Auth_SignUpBodyType
          await _writeAuthBodyObject({jwtFromServer, userAuth, userId, userEmail, userName})
          return {isSuccess: true} as LT.APIReturnType
        } // ::
        else {
          U.alertErrMsg(url, statusCode, gkdErrMsg, message)
          await _writeAuthBodyObject(NV.NullAuthBodyObject())
          return {isSuccess: false} as LT.APIReturnType
        }
      })
      .catch(async errObj => {
        U.alertErrObj(url, errObj)
        await _writeAuthBodyObject(NV.NullAuthBodyObject())
        return {isSuccess: false} as LT.APIReturnType
      })
  }, [])

  // prettier-ignore
  const value: ContextType = {
    logIn,
    logOut,
    refreshToken,
    signUp,
  }
  return <AuthCallbacksContext.Provider value={value}>{children}</AuthCallbacksContext.Provider>
}
