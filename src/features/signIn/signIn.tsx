import { useState } from 'react'

import { Card, CheckBox, TextField, Typography } from '../../components/ui'

export const SignIn = ({}) => {
  const [isChecked, setChecked] = useState(true)
  const handlerCheckbox = (checked: boolean) => {
    console.log(checked)
    setChecked(checked)
  }

  return (
    <Card>
      <form>
        <Typography variant={'large'}>Sign In</Typography>
        <TextField type={'email'} />
        <TextField type={'password'} />
        <CheckBox onChange={handlerCheckbox} checked={isChecked} />
      </form>
    </Card>
  )
}
