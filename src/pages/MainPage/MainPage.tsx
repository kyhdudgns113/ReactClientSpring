import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './MainPage.scss'

type MainPageProps = DivCommonProps & {}

export const MainPage: FC<MainPageProps> = ({...props}) => {
  return (
    <div className={`MainPage ${props.className || ''}`} {...props}>
      MainPage.tsx
    </div>
  )
}
