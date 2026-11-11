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
      {/* 1. 타이틀 */}
      <p className="Title_LogIn">로그인</p>

      {/* 2. 아이디 또는 이메일 */}
      <div className="Row_LogIn">
        <p className="Label_LogIn">아이디 또는 이메일</p>
        <input className="Input_LogIn" placeholder="아이디 또는 이메일" type="text" />
      </div>

      {/* 3. 비밀번호 */}
      <div className="Row_LogIn">
        <p className="Label_LogIn">비밀번호</p>
        <input className="Input_LogIn" placeholder="비밀번호" type="password" />
      </div>

      {/* 4. 버튼 행 */}
      <div className="ButtonRow_LogIn">
        <button className="Submit_LogIn" type="button">
          로그인
        </button>
      </div>
    </div>
  )
}
