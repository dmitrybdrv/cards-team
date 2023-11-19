import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import { Router } from '@/router.tsx'
import { store } from '@/store/store.ts'

export function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Provider>
    </>
  )
}
