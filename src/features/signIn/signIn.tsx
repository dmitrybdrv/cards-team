import { useState } from 'react'

import { Button, Card, CheckBox, TextField, Typography } from '../../components/ui'
import cs from '../commonFeatures.module.scss'

import s from './signIn.module.scss'

export const SignIn = ({}) => {
  const [isChecked, setChecked] = useState(true)
  const handlerCheckbox = (checked: boolean) => {
    console.log(checked)
    setChecked(checked)
  }
  //need links!
  const forgotPasswordLink = '#'
  const signUpLink = '#'

  return (
    <Card className={cs.formWrapper}>
      <form className={cs.formContainer}>
        <Typography variant={'large'} className={cs.header}>
          Sign In
        </Typography>
        <TextField type={'email'} className={cs.txf} label={'Email'} placeholder={'Email'} />
        <TextField type={'password'} className={cs.txf} label={'Password'} />
        <CheckBox
          onChange={handlerCheckbox}
          checked={isChecked}
          className={s.checkbox}
          label={'Remember me'}
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
