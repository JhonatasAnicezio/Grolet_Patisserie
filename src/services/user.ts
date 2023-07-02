import { api } from './api';
import { AxiosResponse } from 'axios';
import { loginData } from '@/components/Form/FormLogin/schema';
import { registerData } from '@/components/Form/FormRegister/schema';
import { ResponsePost, User } from '@/interface/IUser';

export async function postLogin({ email, password }: loginData) {
  try {
    const { data } = await api.post<AxiosResponse>('/login', { email, password });

    return data;
  } catch (error) {
    //@ts-ignore
    if (error) {
      //@ts-ignore
      throw new Error(error.response?.data);
    } else {
      throw new Error('Erro desconhecido');
    }
  }
}

export async function postRegister(newUser: registerData) {
  try {
    const { data } = await api.post<ResponsePost>('/', newUser, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

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
    const { data } = await api.get<User>('/me', {
      headers: {
        'Authorization': token
      }
    });

    return data;
  } catch (error) {
    throw new Error('Erro ao obter usuário');
  }
}
