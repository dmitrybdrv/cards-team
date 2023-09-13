import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

import { signUpSchema } from '../../common/utils'
import { Button, Card, TextField, Typography } from '../../components/ui'
import s from '../commonFeatures.module.scss'
import { SignUpProps } from '../commonFeatures.types.ts'

export const SignUp = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpProps>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(signUpSchema),
    mode: 'onTouched',
  })

  const onSubmit: SubmitHandler<SignUpProps> = (data: SignUpProps) => {
    console.log(data)
  }

  return (
    <Card className={s.formWrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.signUpContainer}>
        <Typography variant={'large'} className={s.header}>
          Sign Up
        </Typography>

        <TextField
          {...register('email')}
          error={errors.email}
          label={'Email'}
          placeholder={'Email'}
          className={s.txf}
        />

        <TextField
          {...register('password')}
          error={errors.password}
          label={'Password'}
          type={'password'}
          className={s.txf}
        />

        <TextField
          {...register('confirmPassword')}
          error={errors.confirmPassword}
          label={'Confirm Password'}
          placeholder={'Confirm Password'}
          type={'password'}
          className={s.txf}
        />

        <Button fullWidth={true} className={s.btn}>
          <Typography variant={'subtitle2'}>Sign Up</Typography>
        </Button>

        <Typography variant={'body2'} className={s.footnote}>
          Already have an account?
        </Typography>

        <Typography variant={'link1'} href={'#'}>
          Sign In
        </Typography>
      </form>
    </Card>
  )
}
