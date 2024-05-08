import { AxiosError } from 'axios';

import { ResponseApiTypes } from '@/types/responseApi';

export const ErrorConvertToMessage = (paramError: unknown) => {
  const error = paramError as AxiosError<ResponseApiTypes>;

  const message = error.response?.data.message
    || `Error ${error.response?.status}: ${error.response?.statusText}`
    || error?.message
    || 'Something wrong!';

  return message;
};
