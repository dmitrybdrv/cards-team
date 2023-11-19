import { toast, ToastOptions } from 'react-toastify'

type ToastType = 'success' | 'warning' | 'error'

export const useToast = () => {
  const showToast = (message: string, type: ToastType, options?: ToastOptions) => {
    const toastOptions: ToastOptions = {
      autoClose: 3000,
      ...options,
    }

    if (type === 'success') {
      toast.success(message, toastOptions)
    } else if (type === 'warning') {
      toast.warning(message, toastOptions)
    } else if (type === 'error') {
      toast.error(message, toastOptions)
    }
  }

  return { showToast }
}
