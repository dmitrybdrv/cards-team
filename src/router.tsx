import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { ForgotPassword } from '@/components'
import { CreateNewPassword } from '@/components/layout/forms'
import { Error404 } from '@/components/layout/forms/error-page/error404.tsx'
import { Layout } from '@/components/layout/layout.tsx'
import { Preloader } from '@/components/layout/preloader/preloader.tsx'
import { DecksPage } from '@/pages/decks-page'
import { ProfilePage } from '@/pages/profile-page'
import { SignInPage } from '@/pages/sign-in-page/sign-in-page.tsx'
import { SignUpPage } from '@/pages/sign-up-page/sign-up-page.tsx'
import { useGetMeQuery } from '@/services/auth/auth.service.ts'

const publicRoutes: RouteObject[] = [
  {
    path: '/auth',
    element: <Layout />,
    children: [
      {
        path: '/auth/login',
        element: <SignInPage />,
      },
      {
        path: '/auth/sign-up',
        element: <SignUpPage />,
      },
      {
        path: '/auth/reset-password',
        element: <ForgotPassword onSubmit={() => {}} />,
      },
      {
        path: '/auth/create-password',
        element: <CreateNewPassword onSubmit={() => {}} />,
      },
    ],
  },
]
const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <DecksPage />,
      },
      {
        path: '/packs-list',
        element: <>packs list</>,
      },
      {
        path: '/profile-page',
        element: <ProfilePage />,
      },
    ],
  },
]

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: privateRoutes,
  },
  {
    path: '/404',
    element: <Error404 />,
  },
  {
    path: '*',
    element: <Navigate to={'/404'} />,
  },
  ...publicRoutes,
])

export const Router = () => {
  const { isLoading: isMeLoading } = useGetMeQuery()

  if (isMeLoading)
    return (
      <div style={{ position: 'fixed', left: '40%', top: '30%' }}>
        <Preloader />
      </div>
    )

  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const { data: me, isLoading: isMeLoading } = useGetMeQuery()
  const isAuthenticated = me && me?.success !== false

  if (isMeLoading) return <div>Loading...</div>

  return isAuthenticated ? <Outlet /> : <Navigate to={'/auth/login'} />
}
