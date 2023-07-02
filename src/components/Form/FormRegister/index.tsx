'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { registerData, registerSchema } from "./schema"
import { Form } from "..";
import { Modal } from "@/components/Modal";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { postRegister } from "@/services/user";

export function FormRegister() {
  const { postUser, invalid, setInvalid, isLoading } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const createRegisterForm = useForm<registerData>({
    resolver: zodResolver(registerSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = createRegisterForm;

  const createUser = async (data: registerData) => {
    reset();
    //@ts-ignore
    await postUser({...data, role: 'user'}, postRegister);
  };

  return (
    <FormProvider {...createRegisterForm}>
      <form
        onSubmit={handleSubmit(createUser)}
        className="flex flex-col pb-20 gap-3 items-center w-7/12"
      >
        <Form.Field className='w-full'>
          <Form.Field className='flex justify-between items-center'>
            <Form.Label>
              Nome completo
            </Form.Label>

            {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
          </Form.Field>

          <Form.Input
            loading={isLoading}
            type='name'
            name='name'
            onClick={() => setInvalid({...invalid, isValidate: false})}
          />
        </Form.Field>

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
              Telefone
            </Form.Label>

            {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
          </Form.Field>

          <Form.Input
            loading={isLoading}
            type='phone'
            name='phone'
            onClick={() => setInvalid({...invalid, isValidate: false})}
          />
        </Form.Field>

        <Form.Field className='w-full'>
          <Form.Field className='flex justify-between items-center'>
            <Form.Label>
              Senha
            </Form.Label>

            {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
          </Form.Field>

          <Form.Input
            loading={isLoading}
            type='password'
            name='password'
            onClick={() => setInvalid({...invalid, isValidate: false})}
          />
          {invalid.isValidate && <span className="text-red-500 text-xs">{invalid.message}</span>}
        </Form.Field>

        <button
          type='submit'
          disabled={isSubmitting}
          className='w-3/4 py-1 font-medium transition duration-500 rounded-full bg-brown-350 text-white hover:bg-brown-900'
        >
          {isLoading? 'Um momento...' : 'Cadastra-se'}
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