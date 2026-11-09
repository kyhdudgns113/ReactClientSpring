import {useCallback} from 'react'

import {useSidebarCallbacksContext} from '@context'
import {useRighterType} from '@redux'

import type {FC} from 'react'
import type {ButtonCommonProps} from '@prop'

import * as LT from '@localType'

import './SignUpButton.scss'

type SignUpButtonProps = ButtonCommonProps & {}

/**
 * SignUpButton.tsx
 *
 * - 회원가입 버튼
 */
export const SignUpButton: FC<SignUpButtonProps> = ({...props}) => {
  const before = useRighterType()

  const {changeRighter} = useSidebarCallbacksContext()

  const onClickSignUpButton = useCallback(
    (before: LT.RighterType) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()

      changeRighter(before, 'signUp')
    },
    []
  )
  return (
    <button className={`SignUpButton ${props.className || ''}`} onClick={onClickSignUpButton(before)} {...props}>
      회원가입
    </button>
  )
}
