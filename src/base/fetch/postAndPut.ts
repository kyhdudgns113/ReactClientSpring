import * as CU from '@commonUtil'
import * as HTTP from '@httpType'
import * as U from '@util'

import {_handleResponse} from './_handleResponse.ts'

const postOrPutNoJWT =
  (methodName: string) =>
  (path: string, data: object): Promise<HTTP.BaseType> => {
    const url = U.getServerURL(path)
    const init: RequestInit = {
      method: methodName,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    }

    return _handleResponse(methodName, fetch(url, init))
  }

export const postOrPutWithJWT =
  (methodName: string) =>
  (path: string, data: object): Promise<HTTP.BaseType> => {
    return U.readStringInLocal('jwt').then(jwt => {
      if (!jwt) {
        U.alertErrMsg(methodName, 401, '토큰이 없습니다', '토큰이 없습니다')
        throw new Error('토큰이 없습니다')
      }

      const url = U.getServerURL(path)
      const init: RequestInit = {
        method: methodName,
        headers: {
          'Content-Type': 'application/json',
          Authorization: CU.encodeJwtFromClient(jwt),
        },
        body: JSON.stringify(data),
      }

      return _handleResponse(methodName, fetch(url, init))
    })
  }

export const post_NoJWT = postOrPutNoJWT('POST')
export const put_NoJWT = postOrPutNoJWT('PUT')
export const post_WithJWT = postOrPutWithJWT('POST')
export const put_WithJWT = postOrPutWithJWT('PUT')
