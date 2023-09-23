import { clsx } from 'clsx'

import { Button, Card, Typography } from '../../../ui'
import s from '../forms.module.scss'

import { ReactComponent as EmailIcon } from '@/assets/icons/emailIcon.svg'

export const CheckEmail = () => {
  const typographyStyle = clsx(s.footnote, s.footnoteTextCenter)

  return (
    <Card className={s.formWrapper}>
      <form className={s.formContainer}>
        <Typography variant={'large'} className={s.header}>
          Check Email
        </Typography>
        <div className={s.emailIcon}>
          <EmailIcon />
        </div>
        <Typography variant={'body2'} className={typographyStyle}>
          We have sent an Email with instructions to example@mail.com
        </Typography>
        <Button fullWidth={true} className={s.btn}>
          <Typography variant={'subtitle2'}>Back to Sign in</Typography>
        </Button>
      </form>
    </Card>
  )
}
