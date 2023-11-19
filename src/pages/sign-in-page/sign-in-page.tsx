import { Navigate } from 'react-router-dom'

import { useToast } from '@/common/utils/toast.ts'
import { SignIn } from '@/components'
import { useGetMeQuery, useLoginMutation } from '@/services/auth/auth.service.ts'
import { LoginArgs } from '@/services/auth/auth.types.ts'

export const SignInPage = () => {
  const [login] = useLoginMutation()
  const { showToast } = useToast()
  const onLogin = (data: LoginArgs) => {
    login(data)
      .unwrap()
      .then(() => showToast(`Welcome back samurai 😎`, 'success'))
      .catch()
  }
  const { data: me, isLoading: isMeLoading } = useGetMeQuery()

  if (isMeLoading) return <div>Loading...</div>
  if (me && me?.success !== false) return <Navigate to={'/'} />

  return <SignIn onSubmit={onLogin} />
}
