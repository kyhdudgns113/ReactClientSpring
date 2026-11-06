import * as COT from '@commonObjType'
import * as S from '@secret'

/**
 * NullAuthBodyObject
 * - 이거 일반 Object 로 선언하면 안된다.
 * - 값이 바뀌면 안된다
 */
export const NullAuthBodyObject = () => {
  const ret: COT.AuthObjectType = {
    jwtFromServer: '',
    userAuth: S.AUTH_NONE,
    userId: '',
    userEmail: '',
    userName: '',
  }
  return ret
}
