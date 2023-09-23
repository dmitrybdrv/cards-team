import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { useForm } from 'react-hook-form'

import { Button, Card, TextField, Typography } from '../../../ui'
import s from '../forms.module.scss'
import { ForgotPasswordType, FormPropsType } from '../forms.types.ts'

import { forgotPasswordSchema } from '@/common/utils'

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
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  })

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

        <Button fullWidth={true} className={s.btn}>
          <Typography variant={'subtitle2'}>Send instructions</Typography>
        </Button>

        <Typography variant={'body2'} className={s.footnote}>
          Did you remember your password?
        </Typography>

        <Typography variant={'link1'} href={'#'}>
          Try logging in
        </Typography>
      </form>
    </Card>
  )
}
