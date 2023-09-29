import { Link } from 'react-router-dom'

import s from './error-page.module.scss'

import { Button } from '@/components'

export const Error404 = () => {
  return (
    <div className={s.container}>
      <img src="" alt="" />
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
