import { Navigate } from 'react-router-dom'

import { SignIn } from '@/components'
import { useGetMeQuery, useLoginMutation } from '@/services/auth/auth.service.ts'

export const SignInPage = () => {
  const [login] = useLoginMutation()
  const { data: me } = useGetMeQuery()

  if (me) return <Navigate to={'/'} />

  return <SignIn onSubmit={login} />
}
