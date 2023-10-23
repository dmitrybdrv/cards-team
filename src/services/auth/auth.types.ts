export type LoginArgs = {
  email: string
  password: string
  rememberMe?: boolean
}

export type LoginResponse = {
  accessToken: string
}

export type MeResponse = {
  avatar: string
  id: string
  email: string
  isEmailVerified: boolean
  name: string
  created: string
  updated: string
}

export type SingUpResponse = {
  avatar: string
  id: string
  email: string
  isEmailVerified: boolean
  name: string
  created: string
  updated: string
}

export type SingUpArgs = {
  html?: string
  name?: string
  password: string
  email: string
  subject?: string
  sendConfirmationEmail?: boolean
}

export type UpdateProfile = {
  avatar?: string | Blob
  name?: string
  email?: string
}

export type RecoverPassword = {
  html?: string
  email: string
  subject?: string
}

export type VerifyEmail = {
  code?: string
}

export type ResendVerifyEmail = {
  html?: string
  userId?: string
}

export type ResetPassword = {
  password: string
  token: string | undefined | null
}
