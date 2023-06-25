'use client'
import { ReactNode, createContext, useState } from 'react';
import { setCookie, parseCookies } from 'nookies';
import { useRouter } from 'next/navigation';
import { User } from '@/interface/IUser';
import { registerData } from '@/components/Form/FormRegister/schema';
import { loginData } from '@/components/Form/FormLogin/schema';
import { postLogin, postRegister } from '@/services/user';

type invalid = {
  isValidate: boolean,
  message: string,
}

interface AuthContext {
  singIn: (data: loginData) => Promise<boolean>,
  register: (data: registerData) => Promise<boolean>,
  user: User | null,
  setUser: (data: User | null) => void,
  invalid: invalid,
  setInvalid: (value: invalid) => void,
  isLoading: boolean,
}

export const AuthContext = createContext({} as AuthContext);

type Prop = {
  children: ReactNode,
}

export function AuthProvider({ children }: Prop) {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);

  const [invalid, setInvalid] = useState({
    isValidate: false,
    message: '',
  });

  const [isLoading, setLoading] = useState(false);

  const {'nextAuth.token': token} = parseCookies();

  const redirect = () => {
    if(token) {
      router.push('/');
    }
  }

  async function singIn({ email, password }: loginData) {
    setLoading(true);

    const responseLogin = await postLogin({email, password});

    if(typeof responseLogin === 'object') {

      setCookie(undefined, 'nextAuth.token', responseLogin.token, {
        maxAge: 60 * 60 * 48, // 2 dias
      });

      setUser(responseLogin.userData);

      redirect();

      setLoading(false);

      return true;
      
    } else {
      setInvalid({
        isValidate: true,
        message: responseLogin,
      });
      setLoading(false);

      return false;
    }
  }

  async function register({ name, email, password, phone }: registerData) {
    setLoading(true);

    const responseRegister = await postRegister({ name, email, password, role: 'user', phone});

    if(typeof responseRegister === 'object') {

      setCookie(undefined, 'nextAuth.token', responseRegister.token, {
        maxAge: 60 * 60 * 48, // 2 dias
      });

      setUser(responseRegister.userData);

      redirect();

      setLoading(false);

      return true;

    } else {
      setInvalid({
        isValidate: true,
        message: responseRegister,
      });

      setLoading(false);

      return false;
    }
  }

  const context = {
    singIn,
    register,
    user,
    setUser,
    invalid,
    setInvalid,
    redirect,
    isLoading,
  };

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}