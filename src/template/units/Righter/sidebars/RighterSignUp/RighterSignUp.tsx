import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './RighterSignUp.scss'

type RighterSignUpProps = DivCommonProps & {
  isShow: boolean
}

/**
 * RighterSignUp.tsx
 * - 회원가입을 하는 Righter 이다
 *
 */
export const RighterSignUp: FC<RighterSignUpProps> = ({isShow, ...props}) => {
  return (
    <div className={`RighterSignUp ${isShow ? 'show' : 'hide'} ${props.className || ''}`} {...props}>
      {/* 1. 타이틀 */}
      <p className="Title_SignUp">회원가입</p>

      {/* 2. 이름 */}
      <div className="Row_SignUp">
        <p className="Label_SignUp">이름</p>
        <input className="Input_SignUp" placeholder="이름" type="text" />
      </div>

      {/* 3. 아이디 */}
      <div className="Row_SignUp">
        <p className="Label_SignUp">아이디</p>
        <input className="Input_SignUp" placeholder="아이디" type="text" />
      </div>

      {/* 4. 이메일 */}
      <div className="Row_SignUp">
        <p className="Label_SignUp">이메일</p>
        <input className="Input_SignUp" placeholder="이메일" type="email" />
      </div>

      {/* 5. 비밀번호 */}
      <div className="Row_SignUp">
        <p className="Label_SignUp">비밀번호</p>
        <input className="Input_SignUp" placeholder="비밀번호" type="password" />
      </div>

      {/* 6. 비밀번호 확인 */}
      <div className="Row_SignUp">
        <p className="Label_SignUp">비밀번호 확인</p>
        <input className="Input_SignUp" placeholder="비밀번호 확인" type="password" />
      </div>

      {/* 7. 버튼 행 */}
      <div className="ButtonRow_SignUp">
        <button className="Submit_SignUp" type="button">
          가입하기
        </button>
      </div>
    </div>
  )
}
