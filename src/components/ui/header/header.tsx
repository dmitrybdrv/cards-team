import { FC } from 'react'

import ava from '../../../common/assets/img/ava.jpg'
import logo from '../../../common/assets/img/Logo.svg'
import { Button } from '../button'
import { Typography } from '../typography'

import s from './header.module.scss'

type HeaderType = {}

export const Header: FC<HeaderType> = ({}) => {
  return (
    <header className={s.headerContainer}>
      <img src={logo} alt="logo" className={s.headerLogo} />
      <div className={s.headerAvatar}>
        <Button variant={'link'} className={s.captionLink}>
          <Typography variant={'subtitle1'}>Ivan</Typography>
        </Button>
        <img src={ava} alt="ava" className={s.layoutAvatar} />
      </div>
    </header>
  )
}
