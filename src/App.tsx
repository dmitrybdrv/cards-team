import { Button } from './components/ui/button'
import { SliderApp } from './components/ui/slider'

export function App() {
  return (
    <div>
      <Button variant="primary" as="a">
        Hello
      </Button>
      <div>
        <Button variant="secondary">hello2</Button>
      </div>
      <div>
        <SliderApp />
      </div>
    </div>
  )
}
