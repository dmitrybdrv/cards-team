import { useState } from 'react'

import { Modal } from '@/components/layout/forms'
import { Button } from '@/components/ui'

export function App() {
  const [open, setOpen] = useState(false)

  return (
    <Modal onOpenChange={setOpen} isOpen={open}>
      <Modal.Trigger>
        <Button>Open</Button>
      </Modal.Trigger>

      <Modal.Portal>
        <Modal.Title>Some title</Modal.Title>
        <Modal.Description>Description</Modal.Description>
      </Modal.Portal>
    </Modal>
  )
}
