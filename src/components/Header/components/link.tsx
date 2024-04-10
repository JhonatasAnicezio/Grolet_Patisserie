'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { boolean } from 'zod';

interface propsLinkHeader {
  name: string,
  route: string,
  setIsOpen?: (value: boolean) => void,
}

export function LinkHeader({ route, name, setIsOpen }: propsLinkHeader) {
  const pathname = usePathname();

  return (
    <Link
      className={
        `transition duration-500 hover:text-brown-350 hover:border-b hover:border-brown-350
        ${pathname === route && `text-brown-350 border-b border-brown-350`}
        max-[872px]:text-xl max-[872px]:border-none`
      }
      href={route}
      onClick={() => {
        if (setIsOpen) {
          setIsOpen(false);
        }
      }}
    >
      {name}
    </Link>
  )
}