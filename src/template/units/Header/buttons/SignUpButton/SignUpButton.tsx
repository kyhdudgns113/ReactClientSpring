import type {FC} from 'react'
import type {ButtonCommonProps} from '@prop'

import './SignUpButton.scss'

type SignUpButtonProps = ButtonCommonProps & {}

/**
 * SignUpButton.tsx
 *
 * - 회원가입 버튼
 */
export const SignUpButton: FC<SignUpButtonProps> = ({...props}) => {
  return (
    <button className={`SignUpButton ${props.className || ''}`} {...props}>
      회원가입
    </button>
  )
}
