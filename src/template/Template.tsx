import {useCallback} from 'react'
import {Outlet} from 'react-router-dom'

import {useSideBarActions} from '@redux'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import * as UNIT from './units'

import './Template.scss'

type TemplateProps = DivCommonProps & {}

export const Template: FC<TemplateProps> = ({...props}) => {
  const {closeRighter} = useSideBarActions()

  const onClickTemplate = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()

    closeRighter()
  }, [])

  return (
    <div className="Template" onClick={onClickTemplate} {...props}>
      <UNIT.Header />

      <div className={`Body_Template`}>
        <UNIT.Lefter />
        <Outlet />
        <UNIT.Righter />
      </div>

      <UNIT.Footer />
    </div>
  )
}
