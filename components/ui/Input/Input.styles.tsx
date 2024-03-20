import { tv, type VariantProps } from 'tailwind-variants'

export const input = tv({
  base: 'font-mono px-7 inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-md text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
  variants: {
    variant: {
      outline: 'border-white border border-solid bg-transparent',
    },
  },
})

type InputVariants = VariantProps<typeof input>

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    InputVariants {}
