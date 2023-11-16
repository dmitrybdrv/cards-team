import { Link } from 'react-router-dom'

import s from './success-reset-password.module.scss'

import { Button, Card, Typography } from '@/components'

export const SuccessResetPassword = () => {
  return (
    <div className={s.wrapper}>
      <Card className={s.formWrapper}>
        <Typography variant={'large'} className={s.congrats}>
          Congratulations!{' '}
        </Typography>
        <Typography variant={'h1'} className={s.h1}>
          You have successfully reset your password.
        </Typography>
        <div>
          <Link to={'/auth/login'}>
            <Button fullWidth={true} className={s.btn}>
              <Typography variant={'subtitle2'}>Return to Login</Typography>
            </Button>
          </Link>
          <Typography variant={'link1'} className={s.h3}>
            You can now log into your account with your new password.
          </Typography>
        </div>
      </Card>
    </div>
  )
}
