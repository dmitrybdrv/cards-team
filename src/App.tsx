import { useState } from 'react'

import { Modal } from '@/components/layout/forms'

export function App() {
  const [open, setOpen] = useState(false)

  return <Modal onOpenChange={setOpen} isOpen={open} />
}
