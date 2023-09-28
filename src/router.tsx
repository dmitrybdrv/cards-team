import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { ForgotPassword, SignIn, SignUp } from '@/components'
import { CreateNewPassword } from '@/components/layout/forms'
import { Error404 } from '@/components/layout/forms/error-page/error404.tsx'
import { Decks } from '@/pages/decks.tsx'

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <SignIn onSubmit={() => {}} />,
  },
  {
    path: '/signup',
    element: <SignUp onSubmit={() => {}} />,
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
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
