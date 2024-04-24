import AxiosInstance from '@/lib/axios';
import { ResponseApiTypes } from '@/types/responseApi';
import { ResponseUsersProfileTypes } from './types';

const UserService = () => {
  const getProfileByToken = async (token: string) => new Promise<
    ResponseApiTypes<ResponseUsersProfileTypes>
  >((resolve, reject) => {
    AxiosInstance.get('/service/users/profile', {
      headers: {
        Authorization: token,
      }
    })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });

  return {
    getProfileByToken,
  };
};

export default UserService;
