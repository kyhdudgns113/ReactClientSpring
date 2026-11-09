import * as SV from '../values/setting'

/**
 * styleValFromTS
 *
 * - .ts 에 저장된 값을 바탕으로 scss 파일의 변수값을 설정하기위한 파일
 * - vite.config.ts 에서 이걸 불러오면 된다.
 */

export const STYLE_VAL_FROM_TS = [
  // prettier 를 위한 공백
  `$Righter-Transition-ms: ${SV.RIGHTER_TRANSITION_MS}ms;`,
].join(';\n')
