import type {FC} from 'react'
import type {ButtonCommonProps} from '@prop'

import './LogOutButton.scss'

type LogOutButtonProps = ButtonCommonProps & {}

/**
 * LogOutButton.tsx
 *
 * - 로그아웃 버튼
 */
export const LogOutButton: FC<LogOutButtonProps> = ({...props}) => {
  return (
    <button className={`LogOutButton ${props.className || ''}`} {...props}>
      로그아웃
    </button>
  )
}
