import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './RighterSignUp.scss'

type RighterSignUpProps = DivCommonProps & {
  isShow: boolean
}

/**
 * RighterSignUp.tsx
 * - 회원가입을 하는 Righter 이다
 *
 */
export const RighterSignUp: FC<RighterSignUpProps> = ({isShow, ...props}) => {
  return (
    <div className={`RighterSignUp ${isShow ? 'show' : 'hide'} ${props.className || ''}`} {...props}>
      RighterSignUp.tsx
    </div>
  )
}
