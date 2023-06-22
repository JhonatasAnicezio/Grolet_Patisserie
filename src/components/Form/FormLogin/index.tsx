'use client'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginData, loginSchema } from './schema'
import { Form } from '../index';
import Link from 'next/link';

interface propsLogin {
  setIsOpen: (value: boolean) => void,
}

export default function FormLogin({ setIsOpen }: propsLogin) {

  const createLoginForm = useForm<loginData>({
    resolver: zodResolver(loginSchema),
  })

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = createLoginForm;

  const consol = (data: loginData) => {
    console.log(data);
  };

  return (
    <FormProvider {...createLoginForm}>
      <form className='flex flex-col font-medium gap-3 justify-center items-center w-full'>
        <Form.Field className='w-full'>
          <Form.Field className='flex justify-between items-center'>
            <Form.Label>
              Email
            </Form.Label>

            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
          </Form.Field>

          <Form.Input loading={false} type='email' name='email' />
        </Form.Field>

        <Form.Field className='w-full'>
          <Form.Field className='flex justify-between items-center'>
            <Form.Label>
              Senha
            </Form.Label>

            {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
          </Form.Field>

          <Form.Input loading={false} type='password' name='password' />
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
            onClick={() => setIsOpen(false)}
            className='flex items-center transistion duration-500 px-5 py-0.5 rounded-full border border-brown-350 hover:bg-brown-350 hover:text-white'
          >
            REGISTRE-SE
          </Link>
        </Form.Field>
      </form>
    </FormProvider>
  )
}