import { Link, Navigate } from 'react-router-dom'

import s from './header.module.scss'

import { ReactComponent as SignOut } from '@/assets/icons/logout.svg'
import { ReactComponent as UserIcon } from '@/assets/icons/person-outline-icon.svg'
import { ReactComponent as Logo } from '@/assets/img/logo.svg'
import { Dropdown, ToolbarItemWithIcon, Typography } from '@/components'
import { Button } from '@/components/ui'
import { useGetMeQuery } from '@/services/auth/auth.service'

export const Header = ({}) => {
  const { data } = useGetMeQuery()

  const onSelect = () => {
    return <Navigate to={'/packs-list'} />
  }

  return (
    <header className={s.headerContainer}>
      <Logo className={s.headerLogo} />
      <div className={s.headerAvatar}>
        {data?.name ? (
          <Dropdown data={data} className={s.captionLink}>
            <ToolbarItemWithIcon
              icon={
                <img
                  src={data.avatar && data.avatar}
                  alt="ava"
                  style={{ width: '36px', height: '36px', borderRadius: '100%' }}
                />
              }
              text={data.email && <Typography variant={'caption'}>{data.email}</Typography>}
              onSelect={() => {}}
            ></ToolbarItemWithIcon>
            <ToolbarItemWithIcon
              icon={<UserIcon />}
              text={'My Profile'}
              onSelect={onSelect}
            ></ToolbarItemWithIcon>
            <ToolbarItemWithIcon
              icon={<SignOut />}
              text={'Sign Out'}
              onSelect={onSelect}
            ></ToolbarItemWithIcon>
          </Dropdown>
        ) : (
          <Button variant={'primary'}>
            <Link to={'/auth/login'} style={{ textDecoration: 'none' }}>
              Log in
            </Link>
          </Button>
        )}
      </div>
    </header>
  )
}
