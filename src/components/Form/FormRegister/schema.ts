import { z } from 'zod';

const phoneRegex = /^\d+$/; // Apenas números

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
    message: 'O telefone deve conter apenas números',
  }).refine((value) => value.length >= 9, {
    message: 'O telefone deve ter no mínimo 9 caracteres',
  }),
  role: z.unknown(),
});

export type registerData = z.infer<typeof registerSchema>;