import {useAppSelector, useAppDispatch} from '@redux'

import {authSlice} from './AuthSlice'

import * as COT from '@commonObjType'

export const useAuthStates = () => useAppSelector(state => state.auth)

export const useAuthActions = () => {
  const dispatch = useAppDispatch()

  return {
    clearAuth: () => dispatch(authSlice.actions.clearAuth()),

    setAuth: (auth: COT.AuthObjectType) => dispatch(authSlice.actions.setAuth(auth)),
  }
}

export const useAuth_IsLoggedIn = () => {
  const {userId} = useAuthStates()
  return userId !== ''
}

export const useAuth_UserAuth = () => {
  const {userAuth} = useAuthStates()
  return userAuth
}
export const useAuth_UserEmail = () => {
  const {userEmail} = useAuthStates()
  return userEmail
}
export const useAuth_UserId = () => {
  const {userId} = useAuthStates()
  return userId
}
export const useAuth_UserName = () => {
  const {userName} = useAuthStates()
  return userName
}
