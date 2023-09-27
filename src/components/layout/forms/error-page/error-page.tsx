import s from './error-page.module.scss'

import { Button } from '@/components'

export const ErrorPage = () => {
  return (
    <div className={s.container}>
      <img src="" alt="" />
      <div>Sorry! Page not found!</div>
      <div className={s.buttonContainer}>
        <Button onSubmit={() => {}} variant={'primary'}>
          Back to home page
        </Button>
      </div>
    </div>
  )
}
