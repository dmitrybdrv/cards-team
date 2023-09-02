import { Button, TextField } from './components/ui'

export function App() {
  return (
    <form style={{ margin: '50px', width: '284px' }}>
      <TextField type={'password'} name={'password'} label={'Password'} />
      <TextField type={'search'} name={'search'} label={'Search'} />
      <TextField type={'text'} name={'text'} label={'Text'} />
      <div>
        <Button type={'submit'}>Send</Button>
      </div>
    </form>
  )
}
