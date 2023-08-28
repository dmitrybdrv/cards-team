import { useState } from 'react'

import s from './app.module.scss'
import { CheckBox } from './components/ui'

export function App() {
  const [checked, setChecked] = useState(false)

  console.log(setChecked)

  return (
    <div>
      <CheckBox defaultChecked={checked} onChange={() => {}} className={s.test} />
    </div>
  )
}
