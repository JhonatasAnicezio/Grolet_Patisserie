'use client'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendMessageData, sendMessageSchema } from './schema'
import { Form } from '../index';

export default function Message() {

  const createSendForm = useForm<sendMessageData>({
    resolver: zodResolver(sendMessageSchema),
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = createSendForm;

  const consol = (data: sendMessageData) => {
    console.log(data);
  };

  return (
    <FormProvider {...createSendForm}>
      <form className='flex flex-col py-20 gap-3 justify-center items-center w-full'>
        <Form.Field className='flex gap-10 w-full justify-center'>
          <Form.Field className='w-2/5'>
            <Form.Label>
              Nome
            </Form.Label>

            <Form.Input type='name' name='name' />
          </Form.Field>

          <Form.Field className='w-2/5'>
            <Form.Label>
              Sobrenome
            </Form.Label>

            <Form.Input type='surname' name='surname' />
          </Form.Field>
        </Form.Field>

        <Form.Field className='flex gap-10 w-full justify-center'>
          <Form.Field className='w-2/5'>
            <Form.Label>
              Email
            </Form.Label>

            <Form.Input type='email' name='email' />
          </Form.Field>

          <Form.Field className='w-2/5'>
            <Form.Label>
              Telefone/Celular
            </Form.Label>

            <Form.Input type='phone' name='phone' />
          </Form.Field>
        </Form.Field>

        <Form.Field className='flex flex-col items-center w-10/12'>
          <Form.Label>
            Mensagem
          </Form.Label>

          <Form.Textarea name='message'/>
        </Form.Field>

        <Form.Field className='w-10/12 flex justify-end'>
          <button
            type='button'
            disabled={isSubmitting}
            onClick={handleSubmit(consol)}
            className='transition duration-500 rounded-full px-24 py-1 bg-brown-350 text-white hover:bg-brown-900'
          >
            ENVIAR
          </button>
        </Form.Field>
      </form>
    </FormProvider>
  )
}