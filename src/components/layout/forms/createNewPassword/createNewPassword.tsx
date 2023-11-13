import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router-dom'

import { createNewPasswordSchema } from '@/common/utils'
import { CreatePasswordType } from '@/components/layout/forms'
import s from '@/components/layout/forms/forms.module.scss'
import { Button, Card, TextField, Typography } from '@/components/ui'
import { useResetPasswordMutation } from '@/services/auth/auth.service.ts'

export const CreateNewPassword = () => {
  const { token } = useParams()

  const [resetPassword] = useResetPasswordMutation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePasswordType>({
    defaultValues: {
      password: '',
    },
    resolver: zodResolver(createNewPasswordSchema),
    mode: 'onSubmit',
  })

  const typographyStyle = clsx(s.footnote, s.footnoteExtra)

  const onSubmit = (data: CreatePasswordType) => {
    resetPassword({
      password: data.password,
      token: token,
    })
  }

  return (
    <Card className={s.formWrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.formContainer}>
        <Typography variant={'large'} className={s.header}>
          Create new password
        </Typography>

        <TextField
          {...register('password')}
          autoComplete={'on'}
          type={'password'}
          error={errors.password}
          label={'Password'}
          placeholder={'Password'}
          className={s.txf}
        />

        <Typography variant={'body2'} className={typographyStyle}>
          Create new password and we will send you further instructions to email
        </Typography>

        <Link to={'/auth/success-reset-password'}>
          <Button type={'submit'} fullWidth={true} className={s.btn}>
            <Typography variant={'subtitle2'}>Create New Password</Typography>
          </Button>
        </Link>
      </form>
    </Card>
  )
}
