import 'tailwindcss/tailwind.css'

import { karelia } from '@/fonts/fonts'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${karelia.variable}`}>
      <body className="overscroll-none">{children}</body>
    </html>
  )
}
