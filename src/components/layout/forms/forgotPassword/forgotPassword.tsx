import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import s from '../forms.module.scss'

import { forgotPasswordSchema } from '@/common/utils'
import { ForgotPasswordType, FormPropsType } from '@/components'
import { Button, Card, TextField, Typography } from '@/components/ui'
import { useRecoverPasswordMutation } from '@/services/auth/auth.service.ts'

export const ForgotPassword = ({ onSubmit }: FormPropsType<ForgotPasswordType>) => {
  const [recoverPassword] = useRecoverPasswordMutation()
  const {
    watch,
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

  // export const emailValue1 = watch('email')

  const typographyStyle = clsx(s.footnote, s.footnoteExtra)

  const handleSendInstructions = async () => {
    try {
      const emailValue = watch('email')

      await recoverPassword({ email: emailValue })
    } catch (e) {
      console.log(e)
    }
  }

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

        <Link to={'/auth/check-email'}>
          <Button onClick={handleSendInstructions} fullWidth={true} className={s.btn}>
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
