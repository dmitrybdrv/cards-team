import { Provider } from 'react-redux'

import { Router } from '@/router.tsx'
import { store } from '@/services/store.ts'

export function App() {
  // const { data: me } = useGetMeQuery()

  return (
    <>
      <Provider store={store}>
        {/*<Header isLoggedIn={true} />*/}
        <Router />
      </Provider>
    </>
  )
}
