import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  loading: boolean,
};

export function Input(props: InputProps) {
  const { register } = useFormContext();

  return (
    <input
      id={props.name}
      className={`
        w-full px-1 py-0.5 rounded-xl
        ${props.loading ? 'bg-gray-300 border border-gray-300' : 'border border-brown-350'}
      `}
      disabled={props.loading}
      {...register(props.name)}
      {...props}
    />
  )
}