import { SignUp } from '@/components'
import { useSignUpMutation } from '@/services/auth.ts'

export const SignUpPage = () => {
  const [signUp] = useSignUpMutation()

  return <SignUp onSubmit={signUp} />
}
