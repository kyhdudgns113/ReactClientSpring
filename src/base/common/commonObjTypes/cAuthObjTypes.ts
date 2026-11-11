export type AuthObjectType = {
  jwtFromServer: string // 서버에서 넘겨주는 jwt 를 그대로 받는편이 코드가 간결해진다

  userAuth: number
  userEmail: string
  userId: string
  userName: string
}
