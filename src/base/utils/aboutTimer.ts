export const wait = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms))

export const nextPaint = () => new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())))
