import { TokenData } from 'next-auth';

export type PayloadsTypes = {
  email: string;
  password: string;
};

export type LoginResponseTypes = {
  token: string;
};

export type SessionTypes = TokenData
