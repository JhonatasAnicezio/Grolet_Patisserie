'use client';
import { useContext, useEffect, useRef, useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { BiLogOut, BiUser } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import { destroyCookie } from 'nookies';
import Link from 'next/link';
import { AuthContext } from '@/context/AuthContext';

export function UserIcon() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMenuOpen]);

  const { user } = useContext(AuthContext);

  const router = useRouter();

  const logout = () => {
    destroyCookie(null, 'nextAuth.token');
    router.refresh()
  }

  return (
    <div className='relative' ref={menuRef}>
      <BsPersonCircle
        onClick={() => setMenuOpen(!isMenuOpen)}
        className='text-3xl'
      />

      {isMenuOpen &&
        <div className='flex flex-col bg-white items-start border rounded-lg gap-2 w-44 top-9 right-0 absolute'>
          <p className='p-2 w-full text-base border-b'>{ user?.name }</p>
          <Link href='/profile' className='p-2 hover:bg-gray-200 flex gap-1 items-center w-full text-base'><BiUser />Meu Perfil</Link>
          <button
            onClick={logout}
            className='p-2 hover:bg-gray-200 flex gap-1 items-center w-full text-start text-base'
          >
            <BiLogOut />Sair
          </button>
        </div>
      }
    </div>
  );
}