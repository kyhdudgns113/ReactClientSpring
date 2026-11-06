import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './Righter.scss'

type RighterProps = DivCommonProps & {}

export const Righter: FC<RighterProps> = ({...props}) => {
  return (
    <div className={`Righter ${props.className || ''}`} {...props}>
      Righter.tsx
    </div>
  )
}
