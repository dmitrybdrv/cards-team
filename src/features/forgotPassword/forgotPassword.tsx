import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { SubmitHandler, useForm } from 'react-hook-form'

import { forgotPasswordSchema } from '../../common/utils'
import { Button, Card, TextField, Typography } from '../../components/ui'
import s from '../commonFeatures.module.scss'
import { ForgotPasswordProps } from '../commonFeatures.types.ts'

export const ForgotPassword = ({}) => {
  const {
    clearErrors,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ForgotPasswordProps>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  })

  const onSubmit: SubmitHandler<ForgotPasswordProps> = (data: ForgotPasswordProps) => {
    console.log('some data: ', data)
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
          onChange={() => {
            if (!isValid) {
              clearErrors('email')
            }
          }}
        />

        <Typography variant={'body2'} className={clsx(s.footnote, s.footnoteExtra)}>
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
