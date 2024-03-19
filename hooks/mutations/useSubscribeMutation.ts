import { useMutation } from '@tanstack/react-query'

import { SUBSCRIPTION_ENDPOINT } from '@/constants'

const subscribeToNewsletter = async (email: string) => {
  const encodedEmail = encodeURIComponent(email)
  const response = await fetch(`${SUBSCRIPTION_ENDPOINT}?email=${encodedEmail}`)

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error)
  }

  return data
}

export const useSubscribeMutation = () => {
  return useMutation({
    mutationFn: subscribeToNewsletter,
  })
}
