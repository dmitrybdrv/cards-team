import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { signInSchema } from '../../../../common/utils'
import { Button, Card, TextField, Typography } from '../../../ui'
import { ControlledCheckbox } from '../../../ui/checkbox/ControlledCheckbox.tsx'
import cs from '../forms.module.scss'
import { FormPropsType, SignInType } from '../forms.types.ts'

import s from './signIn.module.scss'

export const SignIn = ({ onSubmit }: FormPropsType<SignInType>) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
    control,
  } = useForm<SignInType>({
    resolver: zodResolver(signInSchema),
  })

  //need links!
  const forgotPasswordLink = '#'
  const signUpLink = '#'

  return (
    <Card className={cs.formWrapper}>
      <form className={cs.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <Typography variant={'large'} className={cs.header}>
          Sign In
        </Typography>

        <TextField
          {...register('email')}
          type={'email'}
          className={cs.txf}
          label={'Email'}
          placeholder={'Email'}
          error={errors.email}
        />

        <TextField
          {...register('password')}
          type={'password'}
          className={cs.txf}
          label={'Password'}
          error={errors.password}
        />

        <ControlledCheckbox
          control={control}
          defaultValue={true}
          className={s.checkbox}
          label={'Remember me'}
          name={'rememberMe'}
        />

        <Typography variant={'body2'} className={s.forgotPasswordWrapper}>
          <a className={s.forgotPasswordLink} href={forgotPasswordLink}>
            Forgot Password?
          </a>
        </Typography>

        <Button fullWidth={true} className={cs.btn}>
          <Typography variant={'subtitle2'}>Sign In</Typography>
        </Button>

        <Typography variant={'body2'} className={cs.footnote}>
          Don&apos;t have an account?
        </Typography>

        <Typography variant={'link1'} href={signUpLink}>
          Sign Un
        </Typography>
      </form>
    </Card>
  )
}
