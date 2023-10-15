import { Navigate } from 'react-router-dom'

import { SignUp } from '@/components'
import { useSignUpMutation } from '@/services/auth/auth.service.ts'

export const SignUpPage = () => {
  const [signUp, { isSuccess }] = useSignUpMutation()

  if (isSuccess) {
    return <Navigate to={'/auth/login'} />
  }

  return <SignUp onSubmit={signUp} />
}
