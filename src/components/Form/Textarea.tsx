import { TextareaHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string,
}

export function Textarea(props: TextareaProps) {
  const { register } = useFormContext()

  return (
    <textarea
      className='rounded-xl w-full h-32 px-2 py-1 border border-brown-350'
      id={props.name}
      {...register(props.name)}
      {...props}
    />
  )
}