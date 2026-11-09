import {useCallback} from 'react'

import {useSidebarCallbacksContext} from '@context'
import {useRighterType} from '@redux'

import type {FC} from 'react'
import type {ButtonCommonProps} from '@prop'

import * as LT from '@localType'

import './LogInButton.scss'

type LogInButtonProps = ButtonCommonProps & {}

/**
 * LogInButton.tsx
 *
 * - 로그인 버튼
 */
export const LogInButton: FC<LogInButtonProps> = ({...props}) => {
  const before = useRighterType()

  const {changeRighter} = useSidebarCallbacksContext()

  const onClickLogInButton = useCallback(
    (before: LT.RighterType) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()

      changeRighter(before, 'logIn')
    },
    []
  )

  return (
    <button className={`LogInButton ${props.className || ''}`} onClick={onClickLogInButton(before)} {...props}>
      로그인
    </button>
  )
}
