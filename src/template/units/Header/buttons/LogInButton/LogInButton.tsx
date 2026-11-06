import type {FC} from 'react'
import type {ButtonCommonProps} from '@prop'

import './LogInButton.scss'

type LogInButtonProps = ButtonCommonProps & {}

/**
 * LogInButton.tsx
 *
 * - 로그인 버튼
 */
export const LogInButton: FC<LogInButtonProps> = ({...props}) => {
  return (
    <button className={`LogInButton ${props.className || ''}`} {...props}>
      로그인
    </button>
  )
}
