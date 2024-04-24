/* eslint-disable @typescript-eslint/no-explicit-any */

export type ResponseApiTypes<T = any> = {
  status: number;
  message: string;
  messageUser: string | null;
  data?: T extends undefined ? never : T;
  meta?: {
    page?: number;
    size?: number;
    total?: number;
  };
};
