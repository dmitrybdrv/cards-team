import { FC } from 'react'

import ava from '../../../assets/img/ava.jpg'
import { ReactComponent as Logo } from '../../../assets/img/incubatorLogo.svg'
import { Button } from '../button'
import { Typography } from '../typography'

import s from './header.module.scss'

type HeaderType = {}

export const Header: FC<HeaderType> = ({}) => {
  return (
    <header className={s.headerContainer}>
      <Logo className={s.headerLogo} />
      <div className={s.headerAvatar}>
        <Button variant={'link'} className={s.captionLink}>
          <Typography variant={'subtitle1'}>Ivan</Typography>
        </Button>
        <img src={ava} alt="ava" className={s.layoutAvatar} />
      </div>
    </header>
  )
}
