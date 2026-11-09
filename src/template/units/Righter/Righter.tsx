import {useEffect, useState} from 'react'
import {useRighterType} from '@redux'

import {RighterLogIn, RighterSignUp} from './sidebars'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './Righter.scss'

type RighterProps = DivCommonProps & {}

export const Righter: FC<RighterProps> = ({...props}) => {
  const righterType = useRighterType()

  const [isOpen, setIsOpen] = useState<boolean>(false)

  // 자동갱신: isOpen
  // righterType 에 따라 작동하도록 한다
  useEffect(() => {
    setIsOpen(righterType !== null)
  }, [righterType])

  return (
    <div className={`Righter ${isOpen ? 'open' : 'close'} ${props.className || ''}`} {...props}>
      {righterType === 'logIn' && <RighterLogIn />}
      {righterType === 'signUp' && <RighterSignUp />}
    </div>
  )
}
