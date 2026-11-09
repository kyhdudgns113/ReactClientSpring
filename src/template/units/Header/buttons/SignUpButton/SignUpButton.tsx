import {useSideBarActions} from '@redux'

import {useCallback, type FC} from 'react'
import type {ButtonCommonProps} from '@prop'

import './SignUpButton.scss'

type SignUpButtonProps = ButtonCommonProps & {}

/**
 * SignUpButton.tsx
 *
 * - 회원가입 버튼
 */
export const SignUpButton: FC<SignUpButtonProps> = ({...props}) => {
  const {openRighterSignUp} = useSideBarActions()

  const onClickSignUpButton = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()

    openRighterSignUp()
  }, [])
  return (
    <button className={`SignUpButton ${props.className || ''}`} onClick={onClickSignUpButton} {...props}>
      회원가입
    </button>
  )
}
