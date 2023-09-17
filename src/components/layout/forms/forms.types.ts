export type MainFormType = {
  email: string
  password: string
  confirmPassword: string
}

export type ForgotPasswordType = Pick<MainFormType, 'email'>
export type SignInType = Omit<MainFormType, 'confirmPassword'> & {
  rememberMe: boolean
}

export type EditNameFormType = {
  name: string
}

export type FormPropsType<T> = {
  onSubmit: (data: T) => void
}
