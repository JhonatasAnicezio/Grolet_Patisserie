'use client'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginData, loginSchema } from './schema'
import { Form } from '../index';
import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { postLogin } from '@/services/user';

interface propsLogin {
  setIsOpen: (value: boolean) => void,
}

export default function FormLogin({ setIsOpen }: propsLogin) {
  const { postUser, invalid, setInvalid, isLoading } = useContext(AuthContext);

  const createLoginForm = useForm<loginData>({
    resolver: zodResolver(loginSchema),
  })

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = createLoginForm;

  const login = async (data: loginData) => {
    reset();
    const result = await postUser(data, postLogin);
    setIsOpen(!result);
  };

  return (
    <FormProvider {...createLoginForm}>
      <form
        onSubmit={handleSubmit(login)}
        className='flex flex-col font-medium gap-3 justify-center items-center w-full'
      >
        <Form.Field className='w-full'>
          <Form.Field className='flex justify-between items-center'>
            <Form.Label>
              Email
            </Form.Label>

            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
          </Form.Field>

          <Form.Input
            loading={isLoading}
            type='email'
            name='email'
            onClick={() => setInvalid({...invalid, isValidate: false})}
          />
        </Form.Field>

        <Form.Field className='w-full'>
          <Form.Field className='flex justify-between items-center'>
            <Form.Label>
              Senha
            </Form.Label>

            {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
            {invalid.isValidate && <span className="text-red-500 text-xs">{invalid.message}</span>}
          </Form.Field>

          <Form.Input
            loading={isLoading}
            type='password'
            name='password'
            onClick={() => setInvalid({...invalid, isValidate: false})}
          />
        </Form.Field>

        <button
          type='submit'
          disabled={isSubmitting}
          className='w-11/12 py-0.5 font-medium transition duration-500 rounded-full bg-brown-350 text-white hover:bg-brown-900'
        >
          {isLoading? 'Um momento...' : 'Iniciar sessão'}
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