import loader from '@/assets/img/loader.gif'

export const Preloader = (props: { className?: string }) => {
  return <img src={loader} alt="loader" {...props} />
}
