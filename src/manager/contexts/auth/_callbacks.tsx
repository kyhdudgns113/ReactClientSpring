import {createContext, useCallback, useContext} from 'react'

import {useAuthActions} from '@redux'

import type {FC, PropsWithChildren} from 'react'

import * as COT from '@commonObjType'
import * as F from '@fetch'
import * as LT from '@localType'
import * as NV from '@nullValue'
import * as U from '@util'

// prettier-ignore
type ContextType = {
  refreshToken: (authLevel: number, errCallback?: LT.CallbackType) => Promise<LT.APIReturnType>
}
// prettier-ignore
export const AuthCallbacksContext = createContext<ContextType>({
  refreshToken: async () => ({isSuccess: false, errMsg: '[AuthContext] refreshToken 이 초기화되지 않았어요'}),
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

  const refreshToken = useCallback(async (authLevel: number, errCallback?: LT.CallbackType) => {
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
          return {isSuccess: true}
        } // ::
        else {
          U.alertErrMsg(url, statusCode, gkdErrMsg, message)
          _writeAuthBodyObject(NV.NullAuthBodyObject())
          return {isSuccess: false}
        }
      })
      .catch(errObj => {
        U.alertErrObj(url, errObj)
        _writeAuthBodyObject(NV.NullAuthBodyObject())

        if (errCallback) {
          errCallback()
        }
        return {isSuccess: false}
      })
  }, [])

  // prettier-ignore
  const value: ContextType = {
    refreshToken,
  }
  return <AuthCallbacksContext.Provider value={value}>{children}</AuthCallbacksContext.Provider>
}
