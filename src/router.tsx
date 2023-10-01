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
import { Decks } from '@/pages/decks.tsx'
import { SignInPage } from '@/pages/sign-in-page/sign-in-page.tsx'
import { SignUpPage } from '@/pages/sign-up-page/sign-up-page.tsx'
import { useGetMeQuery } from '@/services/auth/auth.service.ts'

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <SignInPage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/reset-password',
    element: <ForgotPassword onSubmit={() => {}} />,
  },
  {
    path: '/create-password',
    element: <CreateNewPassword onSubmit={() => {}} />,
  },
  {
    path: '/404',
    element: <Error404 />,
  },
  {
    path: '*',
    element: <Navigate to={'/404'} />,
  },
]
const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <div>
        <Decks />
      </div>
    ),
  },
  {
    path: '/packs-list',
    element: <div>packs list</div>,
  },
]

const router = createBrowserRouter([
  { element: <PrivateRoutes />, children: privateRoutes },
  ...publicRoutes,
])

export const Router = () => {
  const { isLoading: isMeLoading } = useGetMeQuery()

  if (isMeLoading) return <div>Loading...</div>

  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const { data: me, isLoading: isMeLoading } = useGetMeQuery()
  const isAuthenticated = me && me?.success !== false

  if (isMeLoading) return <div>Loading...</div>

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
