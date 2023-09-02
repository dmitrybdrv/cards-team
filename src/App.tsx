import { Button, TextField } from './components/ui'
import { Label } from './components/ui/label/label.tsx'
import closed from './components/ui/textField/closedEye.svg'
import open from './components/ui/textField/openEye.svg'
import search from './components/ui/textField/searchIcon.svg'

export function App() {
  return (
    <form style={{ margin: '50px', width: '284px' }}>
      <TextField
        type={'password'}
        name={'password'}
        firstIcon={open}
        secondIcon={closed}
        label={'Password'}
      />
      <Label label={'Search'}>
        <TextField type={'search'} name={'search'} firstIcon={search} />
      </Label>
      <Label label={'Text'}>
        <TextField type={'text'} name={'text'} />
      </Label>
      <Button type={'submit'}>Send</Button>
    </form>
  )
}
