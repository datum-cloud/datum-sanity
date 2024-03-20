import { forwardRef } from 'react'

import { input, type InputProps } from './Input.styles'

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={input(props) + (className ? ` ${className}` : '')}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
