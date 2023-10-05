import { useState } from 'react'

import { Pagination } from '@/components/ui/pagination/pagination.tsx'

export function App() {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div>
      <Pagination changePage={setCurrentPage} totalPages={13} currentPage={currentPage} />
    </div>
  )
}
