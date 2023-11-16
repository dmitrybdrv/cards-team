import { Outlet } from 'react-router-dom'

import s from './loadBar.module.scss'

import { Header } from '@/components'
import { useAppSelector } from '@/hooks/hooks.ts'

export const Layout = () => {
  return (
    <>
      <Header />
      <LoadBar />
      <Outlet />
    </>
  )
}

const LoadBar = () => {
  const isLoading = useAppSelector(state => state.app.isLoading === 'loading')

  return isLoading ? (
    <div className={s.loadWrapper}>
      <div className={s.loadLine}></div>
    </div>
  ) : (
    <></>
  )
}
