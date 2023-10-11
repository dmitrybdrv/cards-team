import s from './header.module.scss'

import { ReactComponent as Logo } from '@/assets/img/logo.svg'
import ava from '@/assets/img/noDataAva.jpg'
import { Typography } from '@/components'
import { Button } from '@/components/ui'
import { useGetMeQuery } from '@/services/auth/auth.service'

export const Header = ({}) => {
  const { data } = useGetMeQuery()

  return (
    <header className={s.headerContainer}>
      <Logo className={s.headerLogo} />
      <div className={s.headerAvatar}>
        {data?.name ? (
          <>
            <Button variant={'link'} className={s.captionLink}>
              <Typography variant={'subtitle1'}>{data.name && data.name}</Typography>
            </Button>
            <img src={data.avatar ? data.avatar : ava} alt="ava" className={s.layoutAvatar} />
          </>
        ) : (
          <Button variant={'primary'} style={{ textDecoration: 'none' }}>
            Log in
          </Button>
        )}
      </div>
    </header>
  )
}
