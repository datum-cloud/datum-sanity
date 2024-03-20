import localFont from 'next/font/local'

export const karelia = localFont({
  src: [
    {
      path: './KareliaWeb-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/KareliaWeb-Medium.woff2',
      weight: '500',
      style: 'medium',
    },
  ],
  variable: '--font-karelia',
})
