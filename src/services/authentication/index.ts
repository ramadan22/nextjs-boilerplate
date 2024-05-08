import AxiosInstance from '@/lib/axios';
import { ResponseApiTypes } from '@/types/responseApi';
import { LoginResponseTypes, PayloadsTypes } from './authenticationTypes';

const AuthenticationService = () => {
  const signIn = (payload: PayloadsTypes) => new Promise<
    ResponseApiTypes<LoginResponseTypes>
  >((resolve, reject) => {
    AxiosInstance.post('/authentication/signIn', payload)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });

  return {
    signIn,
  };
};

export default AuthenticationService;
