import type { Metadata } from 'next/types'

import { HomePage } from '@/components/pages/home/HomePage'

export const metadata: Metadata = {
  title: 'Datum',
}

export default async function Homepage() {
  return <HomePage />
}
