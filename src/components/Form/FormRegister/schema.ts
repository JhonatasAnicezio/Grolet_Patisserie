import { z } from 'zod';

const phoneRegex = /^\(\d{2}\)\d{9}$/;

export const registerSchema = z.object({
  name: z.string().nonempty({
    message: 'O nome é obrigatório',
  }).transform(name => {
    return name
      .trim()
      .split(' ')
      .map(word => word[0].toLocaleUpperCase().concat(word.substring(1)))
      .join(' ')
  }),
  email: z.string().nonempty({
    message: 'O e-mail é obrigatório',
  }).email({
    message: 'Formato de e-mail inválido',
  }).toLowerCase(),
  password: z.string().nonempty({
    message: 'A senha é obrigatória',
  }).min(6, {
    message: 'A senha precisa ter no mínimo 6 caracteres',
  }),
  phone: z.string().nonempty({
    message: 'O telefone é obrigatório',
  }).refine((value) => phoneRegex.test(value), {
    message: 'Siga o formato (20)999999999',
  }),
});

export type registerData = z.infer<typeof registerSchema>;