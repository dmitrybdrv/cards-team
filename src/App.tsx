import { Pagination } from '@/components/ui/pagination/pagination.tsx'

export function App() {
  return (
    <div>
      <Pagination totalItems={4} totalPages={13} currentPage={1} />
    </div>
  )
}
