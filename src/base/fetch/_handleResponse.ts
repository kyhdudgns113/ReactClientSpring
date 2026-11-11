import * as HTTP from '@httpType'
import * as U from '@util'

export const _handleResponse = (methodName: string, resPromise: Promise<Response>): Promise<HTTP.BaseType> => {
  return resPromise
    .then(res => {
      const contentType = res.headers.get('content-type') ?? ''
      const isJson = contentType.toLowerCase().includes('application/json')

      if (!isJson) {
        const err = new Error(res.statusText || 'JSON이 아닌 응답입니다') as Error & {statusCode: number}
        err.statusCode = res.status
        throw err
      }

      return res.json()
    })
    .then(data => {
      if (!data.ok) {
        U.alertErrMsg(methodName, data.statusCode, data.gkdErrMsg, data.message)
      }
      return data as HTTP.BaseType
    })
    .catch(err => {
      U.alertErrObj(methodName, err)
      throw err
    })
}
