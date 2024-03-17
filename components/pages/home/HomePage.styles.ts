import { tv, type VariantProps } from 'tailwind-variants'

const homeStyles = tv({
  slots: {
    base: 'font-mono text-white h-screen overflow-hidden flex flex-col-reverse md:flex-row',
    left: 'w-full bg-blackberry-800 flex justify-center py-10 md:py-16 md:w-1/2',
    right: 'w-full bg-white flex flex-1 relative md:w-1/2',
    leftInner:
      'relative gap-9 md:gap-0 md:max-w-xl flex flex-col justify-between px-6',
    rightImage: 'object-cover',
    heading: 'text-2xl leading-snug md:text-4xl',
    footer: 'hidden md:block',
    githubMobile: 'z-auto block absolute top-0 right-8 md:hidden',
  },
})

const newsletterStyles = tv({
  slots: {
    wrapper: 'relative mt-14 flex gap-5',
    input: 'w-full h-12 md:h-auto',
    button: 'absolute top-2 h-8 right-2 text-xs md:relative md:text-sm',
  },
})

export type HomeVariants = VariantProps<typeof homeStyles>
export type NewsletterVariants = VariantProps<typeof newsletterStyles>

export { homeStyles, newsletterStyles }
