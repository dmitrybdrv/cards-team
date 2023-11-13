import { Outlet } from 'react-router-dom'

import s from './loadBar.module.scss'

import { Header } from '@/components'
import { useAppSelector } from '@/hooks/hooks.ts'

export const Layout = () => {
  const isLoading = useAppSelector(state => state.app.isLoading === 'loading')

  return (
    <>
      <Header />
      {isLoading && <LoadBar />}
      <Outlet />
    </>
  )
}

const LoadBar = () => {
  return (
    <div className={s.loadWrapper}>
      <div className={s.loadLine}></div>
    </div>
  )
}
