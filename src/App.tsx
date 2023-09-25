import { useState } from 'react'

import { Modal } from '@/components/layout/forms'
import { Button } from '@/components/ui'

export function App() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Modal onOpenChange={setOpen} isOpen={open} title={'Title'} description={'Some description'}>
        <Button>Open</Button>
      </Modal>
    </div>
  )
}
