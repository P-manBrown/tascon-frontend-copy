import { Spinner } from '@/components/spinner'

type Props = Omit<React.ComponentPropsWithoutRef<'button'>, 'aria-label'> & {
  status?: 'idle' | 'pending' | 'disabled'
  'aria-label': string
}

export function IconButton({
  status = 'idle',
  className = '',
  children,
  ...rest
}: Props) {
  return (
    <button
      className={`btn-icon ${className}`}
      disabled={status !== 'idle'}
      {...rest}
    >
      {status === 'pending' ? (
        <Spinner className="h-5 border-[3.5px] border-gray-400" />
      ) : (
        children
      )}
    </button>
  )
}
