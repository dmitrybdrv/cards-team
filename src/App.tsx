import { TextField } from './components/ui'
import open from './components/ui/checkbox/DisabledSelected.svg'
import closed from './components/ui/checkbox/DisabledUnselect.svg'

export function App() {
  return (
    <div style={{ margin: '50px' }}>
      <div style={{ width: '284px' }}>
        <TextField type={'text'} />
      </div>
      <div style={{ width: '284px' }}>
        <TextField
          type={'password'}
          firstIcon={<div>{open}</div>}
          secondIcon={<div>{closed}</div>}
        />
      </div>
      <div style={{ width: '284px' }}>
        <TextField type={'email'} />
      </div>
      <div style={{ width: '284px' }}>
        <TextField type={'search'} />
      </div>
    </div>
  )
}
