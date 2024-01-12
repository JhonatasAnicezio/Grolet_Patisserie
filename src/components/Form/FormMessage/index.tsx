'use client'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendMessageData, sendMessageSchema } from './schema'
import { Form } from '../index';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export default function FormMessage() {
  const [sendSucefull, setSendSucefull] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const createSendForm = useForm<sendMessageData>({
    resolver: zodResolver(sendMessageSchema),
  })

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = createSendForm;

  const sendEmail = async (data: sendMessageData) => {
    setIsLoading(true);
    emailjs.send('service_kvcw4rn', 'template_ynvjdap', data, 'UfYG3UuB2GvepdFz0')
      .then((response) => {
        setSendSucefull(response.status === 200);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setSendSucefull(false);
      });

    reset();
  };

  return (
    <FormProvider {...createSendForm}>
      <form
        onSubmit={handleSubmit(sendEmail)}
        className='flex flex-col py-10 gap-3 max-sm:gap-0 justify-center items-center w-11/12'
      >
        <Form.Field className='flex max-sm:flex-col gap-10 w-full justify-center'>
          <Form.Field className='w-2/5'>
            <Form.Field className='flex justify-between items-center'>
              <Form.Label>
                Nome
              </Form.Label>

              {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
            </Form.Field>

            <Form.Input loading={isLoading} type='name' name='name' />
          </Form.Field>

          <Form.Field className='w-2/5'>
            <Form.Field className='flex max-sm:flex-col justify-between items-center'>
              <Form.Label>
                Sobrenome
              </Form.Label>

              {errors.surname && <span className="text-red-500 text-xs">{errors.surname.message}</span>}
            </Form.Field>

            <Form.Input loading={isLoading} type='surname' name='surname' />
          </Form.Field>
        </Form.Field>

        <Form.Field className='flex max-sm:flex-col gap-10 w-full justify-center'>
          <Form.Field className='w-2/5'>
            <Form.Field className='flex justify-between items-center'>
              <Form.Label>
                Email
              </Form.Label>

              {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
            </Form.Field>

            <Form.Input loading={isLoading} type='email' name='email' />
          </Form.Field>

          <Form.Field className='w-2/5'>
            <Form.Field className='flex justify-between items-center'>
              <Form.Label>
                Celular
              </Form.Label>

              {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
            </Form.Field>

            <Form.Input loading={isLoading} type='phone' name='phone' />
          </Form.Field>
        </Form.Field>

        <Form.Field className='flex flex-col w-10/12'>
          <Form.Field className='flex justify-between items-center'>
            <Form.Label>
              Mensagem
            </Form.Label>

            {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
          </Form.Field>

          <Form.Textarea loading={isLoading} name='message'/>
        </Form.Field>

        <Form.Field className={`w-10/12 flex text-brown-350 ${sendSucefull ? 'justify-between' : 'justify-end'}`}>
          {sendSucefull && <p>Mensagem enviada com sucesso!</p>}
          <button
            type='submit'
            disabled={isSubmitting}
            className='transition duration-500 rounded-full text-xs px-24 py-1 bg-brown-350 text-white hover:bg-brown-900'
          >
            {isLoading? 'Um momento...' : 'ENVIAR' }
          </button>
        </Form.Field>
      </form>
    </FormProvider>
  )
}