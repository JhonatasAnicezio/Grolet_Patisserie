import { LabelHTMLAttributes } from 'react';

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className="flex px-2 py-0.5 text-xs text-brown-350"
      {...props}
    />
  )
}