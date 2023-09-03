import { z } from 'zod'

export const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters' })
      .max(30, { message: 'Password should be less 30 characters' }),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Password don't match",
  })
