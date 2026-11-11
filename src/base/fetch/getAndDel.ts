import {_handleResponse} from './_handleResponse.ts'

import * as CU from '@commonUtil'
import * as HTTP from '@httpType'
import * as U from '@util'

const getOrDelNoJWT =
  (methodName: string) =>
  (path: string): Promise<HTTP.BaseType> => {
    const url = U.getServerURL(path)
    const init: RequestInit = {
      method: methodName,
    }

    return _handleResponse(methodName, fetch(url, init))
  }

export const getOrDelWithJWT =
  (methodName: string) =>
  (path: string): Promise<HTTP.BaseType> => {
    return U.readStringInLocal('jwt').then(jwt => {
      if (!jwt) {
        U.alertErrMsg(methodName, 401, '토큰이 없습니다', '토큰이 없습니다')
        throw new Error('토큰이 없습니다')
      }

      const url = U.getServerURL(path)
      const init: RequestInit = {
        method: methodName,
        headers: {
          Authorization: CU.encodeJwtFromClient(jwt),
        },
      }

      return _handleResponse(methodName, fetch(url, init))
    })
  }

export const get_NoJWT = getOrDelNoJWT('GET')
export const del_NoJWT = getOrDelNoJWT('DELETE')
export const get_WithJWT = getOrDelWithJWT('GET')
export const del_WithJWT = getOrDelWithJWT('DELETE')
