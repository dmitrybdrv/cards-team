import { Link } from 'react-router-dom'

import errorImg from '../../../../assets/img/404.png'

import s from './error-page.module.scss'

import { Button, Header } from '@/components'

export const Error404 = () => {
  return (
    <div className={s.container}>
      <Header></Header>
      <img className={s.errorImg} src={errorImg} alt="errorImg" />
      <div>Sorry! Page not found!</div>
      <div className={s.buttonContainer}>
        <Link style={{ color: 'var(--color-light-100)' }} to={'/'}>
          <Button onSubmit={() => {}} variant={'primary'}>
            Back to home page
          </Button>
        </Link>
      </div>
    </div>
  )
}
