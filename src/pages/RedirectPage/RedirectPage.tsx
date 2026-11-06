import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './RedirectPage.scss'

type RedirectPageProps = DivCommonProps & {}

/**
 * RedirectPage.tsx
 */
export const RedirectPage: FC<RedirectPageProps> = ({...props}) => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/main')
    }, 1000)
  }, [navigate])

  return (
    <div className={`RedirectPage ${props.className || ''}`} {...props}>
      잠시 기다려 주세요~~
    </div>
  )
}
