'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface propsLinkHeader {
  name: string,
  route: string,
}

export function LinkHeader({ route, name }: propsLinkHeader) {
  const pathname = usePathname();

  return (
    <Link
      className={
        `transition duration-500 hover:text-brown-350 hover:border-b hover:border-brown-350
        ${pathname === route && `text-brown-350 border-b border-brown-350`}`
      }
      href={route}
    >
      {name}
    </Link>
  )
}