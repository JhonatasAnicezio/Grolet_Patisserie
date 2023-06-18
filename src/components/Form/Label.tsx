import { LabelHTMLAttributes } from 'react';

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className="flex px-2 py-1 text-base text-brown-350"
      {...props}
    />
  )
}