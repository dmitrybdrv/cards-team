import { FC } from 'react'

import ava from '../../../assets/img/ava.jpg'

import s from './header.module.scss'

import { ReactComponent as Logo } from '@/assets/img/logo.svg'
import { Typography } from '@/components'
import { Button } from '@/components/ui'

type Props = {
  isLoggedIn: boolean
}

export const Header: FC<Props> = ({ isLoggedIn }) => {
  return (
    <header className={s.headerContainer}>
      <Logo className={s.headerLogo} />
      <div className={s.headerAvatar}>
        {isLoggedIn ? (
          <>
            <Button variant={'link'} className={s.captionLink}>
              <Typography variant={'subtitle1'}>Ivan</Typography>
            </Button>
            <img src={ava} alt="ava" className={s.layoutAvatar} />
          </>
        ) : (
          <Button variant={'primary'} href={'#'} as={'a'} style={{ textDecoration: 'none' }}>
            Sign in
          </Button>
        )}
      </div>
    </header>
  )
}
