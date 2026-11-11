export type BaseType = {
  ok: boolean
  body: any
  statusCode: number
  gkdErrMsg: string
  message: string
}

export type Auth_LogInBodyType = {
  jwtFromServer: string
  userAuth: number
  userId: string
  userEmail: string
  userName: string
}

export type Auth_RefreshTokenBodyType = {
  jwtFromServer: string
  userAuth: number
  userEmail: string
  userId: string
  userName: string
}

export type Auth_SignUpBodyType = {
  jwtFromServer: string
  userAuth: number
}
