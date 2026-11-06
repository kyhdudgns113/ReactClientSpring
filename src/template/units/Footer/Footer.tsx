import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './Footer.scss'

type FooterProps = DivCommonProps & {}

export const Footer: FC<FooterProps> = ({...props}) => {
  return (
    <div className={`Footer ${props.className || ''}`} {...props}>
      Footer.tsx
    </div>
  )
}
