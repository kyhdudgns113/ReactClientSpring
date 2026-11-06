import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './CopyMe.scss'

type CopyMeProps = DivCommonProps & {}

/**
 * CopyMe.tsx
 *
 * - 컴포넌트 원형 코드이다
 * - CommonProps 와 자체적으로 필요한 type 들을 넣어줄 수 있게끔 한다
 * - className 은 컴포넌트 이름을 넣되, 부모가 넘겨준 클래스명이 있을수도 있으니 props.className || '' 로 처리한다
 *   - || '' 을 안넣으면 저부분에 undefined 가 들어간다
 *
 */
export const CopyMe: FC<CopyMeProps> = ({...props}) => {
  return (
    <div className={`CopyMe ${props.className || ''}`} {...props}>
      CopyMe.tsx
    </div>
  )
}
