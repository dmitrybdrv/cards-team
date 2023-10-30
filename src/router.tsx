import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { CheckEmail, ForgotPassword } from '@/components'
import { CreateNewPassword } from '@/components/layout/forms'
import { Error404 } from '@/components/layout/forms/error-page/error404.tsx'
import { Layout } from '@/components/layout/layout.tsx'
import { Preloader } from '@/components/layout/preloader/preloader.tsx'
import { CardsPage } from '@/pages/cards-page/cards-page.tsx'
import { DecksPage } from '@/pages/decks-page'
import { LearnPage } from '@/pages/learn-page/learn-page.tsx'
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
        path: '/auth/create-password/:token',
        element: <CreateNewPassword onSubmit={() => {}} />,
      },
      {
        path: '/auth/check-email',
        element: <CheckEmail />,
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
        path: '/deck/:deckId',
        element: <CardsPage />,
      },
      {
        path: '/learn/:deckId',
        element: <LearnPage />,
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
      <div style={{ position: 'fixed', left: 'calc(50% - 50px)', top: '40%' }}>
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
