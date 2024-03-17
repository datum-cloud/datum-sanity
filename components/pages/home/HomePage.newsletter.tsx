'use client'

import { zodResolver } from '@hookform/resolvers/zod'
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

import { newsletterStyles } from './HomePage.styles'

const formSchema = z.object({
  email: z.string().email(),
})

export const HomePageNewsletter = () => {
  const { wrapper, input, button } = newsletterStyles()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
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
          Stay in the loop
        </Button>
      </form>
    </Form>
  )
}
