import { tv, type VariantProps } from 'tailwind-variants'

const homeStyles = tv({
  slots: {
    base: 'font-mono text-white h-screen flex',
    left: 'w-1/2 bg-blackberry-800 flex justify-center py-16',
    right: 'w-1/2 bg-white flex',
    leftInner: 'max-w-2xl flex flex-col justify-between px-6',
    logo: '',
    content: '',
    footer: '',
    heading: 'text-4xl leading-snug',
  },
})

export type HomeVariants = VariantProps<typeof homeStyles>

export { homeStyles }
