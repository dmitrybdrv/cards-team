import { useState } from 'react'

import { Card, CheckBox, TextField, Typography } from '../../components/ui'

export const SignIn = ({}) => {
  const [isChecked, setChecked] = useState(true)
  const handlerCheckbox = (isChecked: boolean) => {
    console.log(isChecked)
    setChecked(!isChecked)
  }

  return (
    <Card>
      <form>
        <Typography variant={'large'}>Sign In</Typography>
        <TextField type={'email'} />
        <TextField type={'password'} />
        <CheckBox defaultChecked={true} onChange={handlerCheckbox} checked={isChecked} />
      </form>
    </Card>
  )
}
