import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import {LogInButton, LogOutButton, SignUpButton} from './buttons'

import './Header.scss'

type HeaderProps = DivCommonProps & {}

/**
 * Header.tsx
 *
 * - 페이지 헤더
 *   -  Teamplte 의 머리부분
 */
export const Header: FC<HeaderProps> = ({...props}) => {
  return (
    <div className={`Header ${props.className || ''}`} {...props}>
      {/* 1. 타이틀 */}
      <p className="Title_Header">Header</p>

      {/* 2. 버튼행 */}
      <div className="ButtonRow_Header">
        <LogInButton />
        <SignUpButton />
        <LogOutButton />
      </div>
    </div>
  )
}
