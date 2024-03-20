'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderCircle, MailCheck } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormMessage,
  Input,
} from '@/components/ui'
import { useSubscribeMutation } from '@/hooks/mutations/useSubscribeMutation'

import { newsletterStyles } from './HomePage.styles'

const formSchema = z.object({
  email: z.string().email(),
})

export const HomePageNewsletter = () => {
  const {
    wrapper,
    input,
    button,
    errorMessage,
    success,
    successMessage,
    successIcon,
  } = newsletterStyles()
  const { mutate, status, isError, error, data } = useSubscribeMutation()
  const isLoading = status === 'pending'

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = ({ email }: z.infer<typeof formSchema>) => {
    mutate(email)
  }

  return (
    <>
      {status === 'success' ? (
        <div className={success()}>
          <MailCheck size={24} className={successIcon()} />
          <span className={successMessage()}>{data.message}</span>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={wrapper()}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Your email"
                      variant="outline"
                      className={input()}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </>
              )}
            />
            <Button type="submit" variant="white" className={button()}>
              {isLoading && <LoaderCircle className="animate-spin" size={20} />}
              {isLoading ? 'Loading' : 'Stay in the loop'}
            </Button>
          </form>
          {isError && <div className={errorMessage()}>{error.message}</div>}
        </Form>
      )}
    </>
  )
}
