export type BaseType = {
  ok: boolean
  body: any
  statusCode: number
  gkdErrMsg: string
  message: string
}

export type Auth_SignUpBodyType = {
  jwtFromServer: string
  userAuth: number
}
