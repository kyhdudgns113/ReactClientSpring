export const readObjectInLocal = <T extends object>(key: string) => {
  return new Promise<T | null>((resolve, reject) => {
    try {
      const value = localStorage.getItem(key)
      resolve(value ? JSON.parse(value) : null)
      // ::
    } catch (err) {
      // ::
      reject(err)
    }
  })
}

export const writeObjectInLocal = <T extends object>(key: string, value: T) => {
  return new Promise<string>((resolve, reject) => {
    try {
      const stringVal = JSON.stringify(value)
      localStorage.setItem(key, stringVal)
      resolve(stringVal)
      // ::
    } catch (err) {
      // ::
      reject(err)
    }
  })
}
