import { clients, authentication } from './api';
import { AxiosResponse } from 'axios';
import { loginData } from '@/components/Form/FormLogin/schema';
import { registerData } from '@/components/Form/FormRegister/schema';
import { ResponsePost, User } from '@/interface/IUser';

export async function postLogin({ email, password }: loginData) {

  try {
    const { data } = await authentication.post<AxiosResponse>('/', { email, password });

    return data;
  } catch (error) {
    //@ts-ignore
    if (error) {
      //@ts-ignore
      throw new Error('Email ou senha invalida');
    } else {
      throw new Error('Erro desconhecido');
    }
  }
}

export async function postRegister(newUser: registerData) {
  try {
    const { data } = await clients.post<ResponsePost>('/', {
      ...newUser,
    });

    return data;
  } catch (error) {
    //@ts-ignore
    if (error) {
      //@ts-ignore
      throw new Error(error.response?.data?.message);
    } else {
      throw new Error('Erro desconhecido');
    }
  }
}

export async function getUser(token: string): Promise<User> {
  try {
    const { data } = await clients.get<User>('/me', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });

    return data;
  } catch (error) {
    throw new Error('Erro ao obter usuário');
  }
}
