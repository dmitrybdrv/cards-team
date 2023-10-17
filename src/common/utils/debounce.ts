export const debounce = (cb: Function, timeout: number) => {
  let timerId: any

  return (...arg: any) => {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      cb(...arg)
    }, timeout)
  }
}
