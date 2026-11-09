import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './RighterLogIn.scss'

type RighterLogInProps = DivCommonProps & {}

/**
 * RighterLogIn.tsx
 * - 로그인을 하는 Righter 이다
 *
 */
export const RighterLogIn: FC<RighterLogInProps> = ({...props}) => {
  return (
    <div className={`RighterLogIn ${props.className || ''}`} {...props}>
      RighterLogIn.tsx
    </div>
  )
}
