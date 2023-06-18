'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { registerData, registerSchema } from "./schema"
import { Form } from "..";
import { Modal } from "@/components/Modal";
import { useState } from "react";

export function FormRegister() {
  const [isOpen, setIsOpen] = useState(false);

  const createRegisterForm = useForm<registerData>({
    resolver: zodResolver(registerSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = createRegisterForm;

  const consol = (data: registerData) => {
    console.log(data);
  };

  return (
    <FormProvider {...createRegisterForm}>
      <form className="flex flex-col pb-20 gap-3 items-center w-7/12">
        <Form.Field className='w-full'>
          <Form.Field className='flex justify-between items-center'>
            <Form.Label>
              Nome completo
            </Form.Label>

            {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
          </Form.Field>

          <Form.Input type='name' name='name' />
        </Form.Field>

        <Form.Field className='w-full'>
          <Form.Field className='flex justify-between items-center'>
            <Form.Label>
              Email
            </Form.Label>

            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
          </Form.Field>

          <Form.Input type='email' name='email' />
        </Form.Field>

        <Form.Field className='w-full'>
          <Form.Field className='flex justify-between items-center'>
            <Form.Label>
              Telefone
            </Form.Label>

            {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
          </Form.Field>

          <Form.Input type='phone' name='phone' />
        </Form.Field>

        <Form.Field className='w-full'>
          <Form.Field className='flex justify-between items-center'>
            <Form.Label>
              Senha
            </Form.Label>

            {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
          </Form.Field>

          <Form.Input type='password' name='password' />
        </Form.Field>

        <button
          type='button'
          disabled={isSubmitting}
          onClick={handleSubmit(consol)}
          className='w-3/4 py-1 font-medium transition duration-500 rounded-full bg-brown-350 text-white hover:bg-brown-900'
        >
          Cadastra-se
        </button>

        <Form.Field className='flex items-center gap-1 text-xs'>
          <p>Já possui uma conta?</p>
          <button
            type='button'
            onClick={() => setIsOpen(!isOpen)}
            className='flex items-center transistion duration-500 px-5 py-0.5 rounded-full border border-brown-350 hover:bg-brown-350 hover:text-white'
          >
            Iniciar sessão
          </button>
        </Form.Field>

        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      </form>
    </FormProvider>
  )
}