import { tv, type VariantProps } from 'tailwind-variants'

export const button = tv({
  base: 'font-mono inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-md text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
  variants: {
    variant: {
      default:
        'bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90',
      destructive:
        'bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90',
      outline:
        'border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50',
      secondary: 'bg-sunglow-900',
      ghost:
        'hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50',
      link: 'text-slate-900 underline-offset-4 hover:underline dark:text-slate-50',
      white: 'bg-white text-blackberry-800',
    },
    size: {
      default: 'h-14 px-7 text-lg',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      icon: 'h-10 w-10 px-0 py-0',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

type ButtonVariants = VariantProps<typeof button>

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  asChild?: boolean
}
