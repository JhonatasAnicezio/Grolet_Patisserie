'use client'
import { AuthProvider } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';
import { useEffect, useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isRegister, setIsRegister] = useState(false);

  const {'nextAuth.token': token} = parseCookies();

  const { push } = useRouter();

  useEffect(() => {
    if(!token) {
      push('/');
    } else {
      setIsRegister(true);
    }
  }, []);

  return (
    <AuthProvider>
      {!isRegister && null}
      {isRegister && children}
    </AuthProvider>
  );
}