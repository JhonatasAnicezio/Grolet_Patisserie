import { api } from './api';
import { AxiosResponse } from 'axios';
import { loginData } from '@/components/Form/FormLogin/schema';
import { registerData } from '@/components/Form/FormRegister/schema';
import { ResponsePost } from '@/interface/IUser';

export async function postLogin({ email, password }: loginData) {
  const { data }: AxiosResponse<ResponsePost | string> = await api.post<AxiosResponse>('/login', { email, password })
    .catch((error) => {
      if(error.response) {
        return error.response;
      }
    });

  return data;
}

export async function postRegister(newUser: registerData) {
  const { data }: AxiosResponse<ResponsePost | string> = await api.post<AxiosResponse>('/', newUser)
    .catch((error) => {
      if(error.response) {
        return error.response;
      }
    });

  return data;
}
