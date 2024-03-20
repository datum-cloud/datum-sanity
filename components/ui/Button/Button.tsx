import { Slot } from '@radix-ui/react-slot'
import { forwardRef } from 'react'

import { button, type ButtonProps } from './Button.styles'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={button(props) + (className ? ` ${className}` : '')}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button, button }
