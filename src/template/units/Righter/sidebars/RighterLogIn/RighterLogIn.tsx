import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './RighterLogIn.scss'

type RighterLogInProps = DivCommonProps & {
  isShow: boolean
}

/**
 * RighterLogIn.tsx
 * - 로그인을 하는 Righter 이다
 *
 */
export const RighterLogIn: FC<RighterLogInProps> = ({isShow, ...props}) => {
  return (
    <div className={`RighterLogIn ${isShow ? 'show' : 'hide'} ${props.className || ''}`} {...props}>
      RighterLogIn.tsx
    </div>
  )
}
