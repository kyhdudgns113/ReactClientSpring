import * as CU from '@commonUtil'
import * as U from '@util'

const getOrDel = (methodName: string) => (path: string, jwt: string | null | undefined) => {
  const headers = {'Content-Type': 'application/json'}
  const url = U.getServerURL(path)
  let init: RequestInit = {
    method: methodName,
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

  try {
    // ::
  } catch (err) {
    // ::
    U.alertErrObj(methodName, err)
  }
}

export const get = getOrDel('GET')
export const del = getOrDel('DELETE')
