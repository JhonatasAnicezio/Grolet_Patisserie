import { z } from "zod"

const phoneRegex = /^\d{2}\d{4,5}\d{4}$/;

export const sendMessageSchema = z.object({
  name: z.string().nonempty({
    message: 'O nome é obrigatório',
  }).transform(name => {
    return name
      .trim()
      .split(' ')
      .map(word => word[0].toLocaleUpperCase().concat(word.substring(1)))
      .join(' ')
  }),
  surname: z.string().nonempty({
    message: 'O sobrenome é obrigatório',
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
  phone: z.string().nonempty({
    message: 'O telefone é obrigatório',
  }).refine((value) => phoneRegex.test(value), {
    message: 'Número de telefone inválido',
  }),
  message: z.string().nonempty({
    message: 'A mensagem é obrigatória',
  }).max(1000, {
    message: 'A mensagem deve ter no máximo 1000 caracteres',
  }),
});

export type sendMessageData = z.infer<typeof sendMessageSchema>