import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import s from '../forms.module.scss'

import { forgotPasswordSchema } from '@/common/utils'
import { ForgotPasswordType } from '@/components'
import { Button, Card, TextField, Typography } from '@/components/ui'
import { useAppDispatch } from '@/hooks/hooks.ts'
import { useRecoverPasswordMutation } from '@/services/auth/auth.service.ts'
import { setEmail } from '@/store/email.slice.ts'

export const ForgotPassword = () => {
  const dispatch = useAppDispatch()
  const [recoverPassword] = useRecoverPasswordMutation()
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

  const typographyStyle = clsx(s.footnote, s.footnoteExtra)

  const onSubmitForm = (data: ForgotPasswordType) => {
    dispatch(setEmail(data.email))
    recoverPassword({
      email: data.email,
      html: '<h1>Hi, ##name##</h1><p>Click <a href="http://localhost:5173/auth/create-password/##token##">here</a> to recover your password</p>',
    })
  }

  return (
    <Card className={s.formWrapper}>
      <form onSubmit={handleSubmit(onSubmitForm)} className={s.formContainer}>
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

        <Link to={'/auth/check-email'}>
          <Button type={'submit'} fullWidth={true} className={s.btn}>
            <Typography variant={'subtitle2'}>Send instructions</Typography>
          </Button>
        </Link>

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
