'use client'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginData, loginSchema } from './schema'
import { Form } from '../index';
import Link from 'next/link';

export default function Login() {

  const createLoginForm = useForm<loginData>({
    resolver: zodResolver(loginSchema),
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = createLoginForm;

  const consol = (data: loginData) => {
    console.log(data);
  };

  return (
    <FormProvider {...createLoginForm}>
      <form className='flex flex-col font-medium gap-3 justify-center items-center w-full'>
        <Form.Field className='w-full'>
          <Form.Label>
            Email
          </Form.Label>

          <Form.Input type='email' name='email' />
        </Form.Field>

        <Form.Field className='w-full'>
          <Form.Label>
            Password
          </Form.Label>

          <Form.Input type='password' name='password' />
        </Form.Field>

        <button
          type='button'
          disabled={isSubmitting}
          onClick={handleSubmit(consol)}
          className='w-11/12 py-0.5 font-medium transition duration-500 rounded-full bg-brown-350 text-white hover:bg-brown-900'
        >
          Iniciar sessão
        </button>
        <Form.Field className='flex items-center gap-1 text-xs'>
          <p>Não possui uma conta ainda?</p>
          <Link
            href='/register'
            className='transistion duration-500 px-5 py-0.5 rounded-full border border-brown-350 hover:bg-brown-350 hover:text-white'
          >
            REGISTRE-SE
          </Link>
        </Form.Field>
      </form>
    </FormProvider>
  )
}