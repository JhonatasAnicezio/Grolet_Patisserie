import { TextareaHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string,
  loading: boolean,
}

export function Textarea(props: TextareaProps) {
  const { register } = useFormContext()

  return (
    <textarea
      className={`
        w-full h-20 px-2 py-1 rounded-xl
        ${props.loading ? 'bg-gray-300 border border-gray-300' : 'border border-brown-350'}
      `}
      id={props.name}
      disabled={props.loading}
      {...register(props.name)}
      {...props}
    />
  )
}