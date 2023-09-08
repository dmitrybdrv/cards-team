export type SignUpProps = {
  email: string
  password: string
  confirmPassword: string
}

export type ForgotPasswordProps = Pick<SignUpProps, 'email'>
