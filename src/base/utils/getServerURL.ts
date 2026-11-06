import {SERVER_URL} from '@secret'

export const getServerURL = (path: string) => {
  return `${SERVER_URL}${path}`
}
