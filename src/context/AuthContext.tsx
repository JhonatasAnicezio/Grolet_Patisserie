'use client'
import { ReactNode, createContext, useState } from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { useRouter } from 'next/navigation';
import { ResponsePost, User } from '@/interface/IUser';
import { registerData } from '@/components/Form/FormRegister/schema';
import { loginData } from '@/components/Form/FormLogin/schema';
import { getUser } from '@/services/user';
import { useQuery } from 'react-query';

type invalid = {
  isValidate: boolean,
  message: string,
}

type RequestData = registerData | loginData;

type Action = (data: RequestData) => Promise<ResponsePost>;

interface AuthContext {
  postUser: (requestData: RequestData, action: Action) => Promise<boolean>,
  invalid: invalid,
  setInvalid: (value: invalid) => void,
  isLoading: boolean,
  isFetching: boolean,
  user: User | undefined,
  token: string,
}

export const AuthContext = createContext({} as AuthContext);

type Prop = {
  children: ReactNode,
}

export function AuthProvider({ children }: Prop) {
  const router = useRouter();

  const [isLoading, setLoading] = useState(false);

  const [invalid, setInvalid] = useState({
    isValidate: false,
    message: '',
  });

  const {'nextAuth.token': token} = parseCookies();

  const { data: user, isFetching } = useQuery(['profile', token], async () => {
    try {
      const user = await getUser(token);

      return user;
    } catch (error) {
      destroyCookie(null, 'nextAuth.token');
      router.refresh();
    }
  });

  const postUser = async (requestData: RequestData, action: Action) => {
    setLoading(true);

    try {
      const response = await action(requestData);

      setCookie(undefined, 'nextAuth.token', response.token, {
        maxAge: 60 * 60 * 48, // 2 dias
      });

      router.push('/');

      return typeof response === 'object';

    } catch (error) {
      setInvalid({
        isValidate: true,
        //@ts-ignore
        message: `${error.message}`,
      })
    }

    setLoading(false);
    
    return false;
  };

  const context = {
    postUser,
    invalid,
    setInvalid,
    isLoading,
    user,
    token,
    isFetching,
  };

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}