import { Link } from 'react-router-dom'

import s from './success-reset-password.module.scss'

import { Button, Card, Typography } from '@/components'

export const SuccessResetPassword = () => {
  return (
    <div className={s.wrapper}>
      <Card>
        <div className={s.congrats}>
          <Typography variant={'large'}>Congratulations! </Typography>
        </div>
        <div className={s.h2}>
          <Typography variant={'h1'}>You have successfully reset your password.</Typography>
        </div>
        <div>
          <Typography variant={'h3'} className={s.h3}>
            You can now log into your account with your new password. Click below to return to sign
            in page.
          </Typography>
          <Link to={'/auth/login'}>
            <Button fullWidth={true} className={s.btn}>
              <Typography variant={'subtitle2'}>Return to Login</Typography>
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  )
}
