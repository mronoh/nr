'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name should be at least 2 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  company: z.string().optional(),
  message: z
    .string()
    .min(10, { message: 'Message should be at least 10 characters long' })
})

type contactSchemaType = z.infer<typeof contactSchema>

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<contactSchemaType>({
    resolver: zodResolver(contactSchema)
  })
  const onSubmit = async (data: contactSchemaType) => {
    console.log(data)
    await new Promise(resolve => {
      setTimeout(resolve, 3000)
    })
    reset()
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex w-full max-w-3xl flex-col gap-2 py-6'
    >
      <div className='mb-4'>
        <label
          htmlFor='name'
          className='mb-2 block text-lg font-semibold text-dark dark:text-light'
        >
          Name<span className='text-warning'>&nbsp;*</span>
        </label>
        <input
          type='text'
          id='name'
          placeholder='Your full name...'
          {...register('name')}
          className='dark:focus:border-accent-dark w-full border-b border-dark bg-transparent px-5 py-4 text-dark transition-all duration-200 focus:border-accent focus:outline-none dark:border-light dark:text-light'
        />
        {errors.name && (
          <span className='text-warning text-sm font-semibold'>
            {`${errors.name.message}`}
          </span>
        )}
      </div>

      <div className='mb-4'>
        <label
          htmlFor='email'
          className='mb-2 block text-lg font-semibold text-dark dark:text-light'
        >
          Email<span className='text-warning'>&nbsp;*</span>
        </label>
        <input
          type='text'
          id='email'
          placeholder='Your email address...'
          {...register('email')}
          className='dark:focus:border-accent-dark w-full border-b border-dark bg-transparent px-5 py-4 text-dark transition-all duration-200 focus:border-accent focus:outline-none dark:border-light dark:text-light'
        />
        {errors.email && (
          <span className='text-warning text-sm font-semibold'>
            {`${errors.email.message}`}
          </span>
        )}
      </div>

      <div className='mb-4'>
        <label
          htmlFor='company'
          className='mb-2 block text-lg font-semibold text-dark dark:text-light'
        >
          Company
        </label>
        <input
          type='text'
          id='company'
          placeholder='Name of company you represent...'
          {...register('company')}
          className='dark:focus:border-accent-dark w-full border-b border-dark bg-transparent px-5 py-4 text-dark transition-all duration-200 focus:border-accent focus:outline-none dark:border-light dark:text-light'
        />
      </div>

      <div className='mb-4'>
        <label
          htmlFor='message'
          className='mb-2 block text-lg font-semibold text-dark dark:text-light'
        >
          Message<span className='text-warning'>&nbsp;*</span>
        </label>
        <textarea
          id='message'
          {...register('message')}
          placeholder='Write your message here...'
          className='dark:focus:border-accent-dark w-full border-b border-dark bg-transparent px-5 py-4 text-dark transition-all duration-200 focus:border-accent focus:outline-none dark:border-light dark:text-light'
        />
        {errors.message && (
          <span className='text-warning text-sm font-semibold'>
            {`${errors.message.message}`}
          </span>
        )}
      </div>

      <input
        type='submit'
        disabled={isSubmitting}
        className='mx-auto block w-max rounded-full border border-dark bg-dark px-4 py-1.5 text-white transition-all duration-200 ease-in-out hover:bg-white hover:text-dark disabled:cursor-not-allowed disabled:opacity-50 dark:border-light dark:bg-transparent dark:hover:bg-light dark:hover:text-dark'
      />
    </form>
  )
}

export default ContactForm
