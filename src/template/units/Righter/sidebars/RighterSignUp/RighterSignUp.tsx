import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './RighterSignUp.scss'

type RighterSignUpProps = DivCommonProps & {}

/**
 * RighterSignUp.tsx
 * - 회원가입을 하는 Righter 이다
 *
 */
export const RighterSignUp: FC<RighterSignUpProps> = ({...props}) => {
  return (
    <div className={`RighterSignUp ${props.className || ''}`} {...props}>
      RighterSignUp.tsx
    </div>
  )
}
