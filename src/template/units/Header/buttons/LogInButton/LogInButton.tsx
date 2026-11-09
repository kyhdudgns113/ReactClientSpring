import {useSideBarActions} from '@redux'

import {useCallback, type FC} from 'react'
import type {ButtonCommonProps} from '@prop'

import './LogInButton.scss'

type LogInButtonProps = ButtonCommonProps & {}

/**
 * LogInButton.tsx
 *
 * - 로그인 버튼
 */
export const LogInButton: FC<LogInButtonProps> = ({...props}) => {
  const {openRighterLogIn} = useSideBarActions()

  const onClickLogInButton = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()

    openRighterLogIn()
  }, [])

  return (
    <button className={`LogInButton ${props.className || ''}`} onClick={onClickLogInButton} {...props}>
      로그인
    </button>
  )
}
