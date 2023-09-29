import { SignUp } from '@/components'
import { useSignUpMutation } from '@/services/auth/auth.service.ts'

export const SignUpPage = () => {
  const [signUp] = useSignUpMutation()

  return <SignUp onSubmit={signUp} />
}
