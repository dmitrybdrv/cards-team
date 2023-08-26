import { TabSwitcher } from './components/ui/tab-switcher/tab-switcher.tsx'

export function App() {
  return (
    <div>
      hello friend
      <TabSwitcher values={['qwe', 'wer', 'rty', 'tyu']} />
    </div>
  )
}
