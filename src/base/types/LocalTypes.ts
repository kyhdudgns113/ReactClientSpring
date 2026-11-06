import type {Dispatch, SetStateAction} from 'react'

export type APIReturnType = {
  isSuccess: boolean
  [key: string]: any
}
export type CallbackType = () => void
export type Setter<T> = Dispatch<SetStateAction<T>>
