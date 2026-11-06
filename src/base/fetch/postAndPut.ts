import * as CU from '@commonUtil'
import * as U from '@util'

const postOrPut = (methodName: string) => (path: string, data: object, jwt: string | null | undefined) => {
  const headers = {'Content-Type': 'application/json'}
  const url = U.getServerURL(path)
  let init: RequestInit = {
    method: methodName,
    body: JSON.stringify(data),
  }

  if (jwt) {
    init = {
      ...init,
      headers: {
        ...headers,
        Authorization: CU.BareeredJwt(jwt),
        url,
      },
    }
  } // ::
  else {
    init = {...init, headers}
  }

  return fetch(url, init)
    .then(res => res.json())
    .then(data => {
      if (data.statusCode) {
        U.alertErrMsg(methodName, data.statusCode, data.gkdErrMsg, data.message)
      }
      return data
    })
    .catch(err => {
      U.alertErrObj(methodName, err)
    })
}

export const post = postOrPut('POST')
export const put = postOrPut('PUT')
