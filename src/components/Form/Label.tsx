import { LabelHTMLAttributes } from 'react';

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className="px-2 py-1 text-base text-brown-350 flex w-full"
      {...props}
    />
  )
}