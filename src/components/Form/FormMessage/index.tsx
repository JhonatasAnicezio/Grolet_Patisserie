'use client'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendMessageData, sendMessageSchema } from './schema'
import { Form } from '../index';

export default function FormMessage() {

  const createSendForm = useForm<sendMessageData>({
    resolver: zodResolver(sendMessageSchema),
  })

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = createSendForm;

  const consol = (data: sendMessageData) => {
    console.log(data);
  };

  return (
    <FormProvider {...createSendForm}>
      <form className='flex flex-col py-20 gap-3 justify-center items-center w-full'>
        <Form.Field className='flex gap-10 w-full justify-center'>
          <Form.Field className='w-2/5'>
            <Form.Field className='flex justify-between items-center'>
              <Form.Label>
                Nome
              </Form.Label>

              {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
            </Form.Field>

            <Form.Input type='name' name='name' />
          </Form.Field>

          <Form.Field className='w-2/5'>
            <Form.Field className='flex justify-between items-center'>
              <Form.Label>
                Sobrenome
              </Form.Label>

              {errors.surname && <span className="text-red-500 text-xs">{errors.surname.message}</span>}
            </Form.Field>

            <Form.Input type='surname' name='surname' />
          </Form.Field>
        </Form.Field>

        <Form.Field className='flex gap-10 w-full justify-center'>
          <Form.Field className='w-2/5'>
            <Form.Field className='flex justify-between items-center'>
              <Form.Label>
                Email
              </Form.Label>

              {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
            </Form.Field>

            <Form.Input type='email' name='email' />
          </Form.Field>

          <Form.Field className='w-2/5'>
            <Form.Field className='flex justify-between items-center'>
              <Form.Label>
                Celular
              </Form.Label>

              {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
            </Form.Field>

            <Form.Input type='phone' name='phone' />
          </Form.Field>
        </Form.Field>

        <Form.Field className='flex flex-col w-10/12'>
          <Form.Field className='flex justify-between items-center'>
            <Form.Label>
              Mensagem
            </Form.Label>

            {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
          </Form.Field>

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