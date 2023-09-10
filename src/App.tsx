import { SelectC } from './components/ui/select'
import s from './components/ui/select/select.module.scss'

export function App() {
  return <SelectC className={s.app} label={'Select-box'} values={['apple', 'orange', 'kiwi']} />
}
