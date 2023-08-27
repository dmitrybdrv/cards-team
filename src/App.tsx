import { TabSwitcher } from './components/ui'

export function App() {
  return (
    <div>
      hello friend
      <TabSwitcher
        defaultValue={'s'}
        values={[
          { value: 'qwe' },
          { value: 'wer', title: 'newTitle' },
          { value: 'rty', disabled: true },
          { value: 'tyu' },
        ]}
        onChange={value => console.log(value)}
      />
    </div>
  )
}
