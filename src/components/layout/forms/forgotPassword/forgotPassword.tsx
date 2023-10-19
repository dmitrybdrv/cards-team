import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import s from '../forms.module.scss'

import { forgotPasswordSchema } from '@/common/utils'
import { ForgotPasswordType, FormPropsType } from '@/components'
import { Button, Card, TextField, Typography } from '@/components/ui'
import { useVerifyEmailMutation } from '@/services/auth/auth.service.ts'

export const ForgotPassword = ({ onSubmit }: FormPropsType<ForgotPasswordType>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordType>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordSchema),
    mode: 'onSubmit',
  })

  const [verifyEmail] = useVerifyEmailMutation()
  const typographyStyle = clsx(s.footnote, s.footnoteExtra)

  return (
    <Card className={s.formWrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.formContainer}>
        <Typography variant={'large'} className={s.header}>
          Forgot your password?
        </Typography>

        <TextField
          {...register('email')}
          error={errors.email}
          label={'Email'}
          placeholder={'Email'}
          className={s.txf}
        />

        <Typography variant={'body2'} className={typographyStyle}>
          Enter your email address and we will send you further instructions
        </Typography>

        <Button onClick={verifyEmail} fullWidth={true} className={s.btn}>
          <Typography variant={'subtitle2'}>Send instructions</Typography>
        </Button>

        <Typography variant={'body2'} className={s.footnote}>
          Did you remember your password?
        </Typography>

        <Typography variant={'link1'} href={'#'}>
          <Link className={s.linkWrapper} to={'/auth/login'}>
            Try logging in
          </Link>
        </Typography>
      </form>
    </Card>
  )
}
