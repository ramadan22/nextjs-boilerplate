import { signIn } from 'next-auth/react';
import { HandleLoginParamsTypes } from '../types/postDataTypes';

export const handleLogin = async (params: HandleLoginParamsTypes) => {
  params.event.preventDefault();
  await signIn('credentials', {
    email: params.email,
    password: params.password,
    redirect: true,
  });
};
