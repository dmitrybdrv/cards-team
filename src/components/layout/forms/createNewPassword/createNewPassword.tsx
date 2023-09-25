import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { useForm } from 'react-hook-form'

import { createNewPasswordSchema } from '@/common/utils'
import { CreatePasswordType, FormPropsType } from '@/components/layout/forms'
import s from '@/components/layout/forms/forms.module.scss'
import { Button, Card, TextField, Typography } from '@/components/ui'

export const CreateNewPassword = ({ onSubmit }: FormPropsType<CreatePasswordType>) => {
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

        <Button fullWidth={true} className={s.btn}>
          <Typography variant={'subtitle2'}>Create New Password</Typography>
        </Button>
      </form>
    </Card>
  )
}
