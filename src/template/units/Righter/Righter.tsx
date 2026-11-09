import {useEffect, useState} from 'react'
import {useRighterType} from '@redux'

import {RighterLogIn, RighterSignUp} from './sidebars'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import * as LT from '@localType'
import * as SV from '@settingValue'
import * as U from '@util'

import './Righter.scss'

type RighterProps = DivCommonProps & {}

export const Righter: FC<RighterProps> = ({...props}) => {
  const righterType = useRighterType()

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isShowLogIn, setIsShowLogIn] = useState<boolean>(false)
  const [isShowSignUp, setIsShowSignUp] = useState<boolean>(false)
  const [whichShown, setWhichShown] = useState<LT.RighterType>(null)

  useEffect(() => {
    let cancelled = false

    const run = async () => {
      setIsShowLogIn(false)
      setIsShowSignUp(false)
      await U.wait(SV.RIGHTER_TRANSITION_MS)
      if (cancelled) return

      setWhichShown(null)
      await U.nextPaint()
      if (cancelled) return

      setWhichShown(righterType)
      await U.nextPaint()
      if (cancelled) return

      setIsShowLogIn(righterType === 'logIn')
      setIsShowSignUp(righterType === 'signUp')
      setIsOpen(righterType !== null)
    }

    run()
    return () => {
      cancelled = true
    }
  }, [righterType])

  return (
    <div className={`Righter ${isOpen ? 'open' : 'close'} ${props.className || ''}`} {...props}>
      {whichShown === 'logIn' && <RighterLogIn isShow={isShowLogIn} />}
      {whichShown === 'signUp' && <RighterSignUp isShow={isShowSignUp} />}
    </div>
  )
}
