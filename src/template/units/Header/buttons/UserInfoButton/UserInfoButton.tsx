import {useAuth_UserName} from '@redux'

import type {FC} from 'react'
import type {ButtonCommonProps} from '@prop'

import './UserInfoButton.scss'

type UserInfoButtonProps = ButtonCommonProps & {}

/**
 * UserInfoButton.tsx
 *
 * - 사용자 정보 버튼
 */
export const UserInfoButton: FC<UserInfoButtonProps> = ({...props}) => {
  const userName = useAuth_UserName()

  return (
    <button className={`UserInfoButton ${props.className || ''}`} {...props}>
      <span className="Text_UserInfoButton">{userName}</span>
    </button>
  )
}
