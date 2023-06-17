import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
};

export function Input(props: InputProps) {
  const { register } = useFormContext();

  return (
    <input
      id={props.name}
      className="rounded-xl w-full px-2 py-1 border border-brown-350"
      {...register(props.name)}
      {...props}
    />
  )
}