import { FormEvent } from 'react';

export type ParamsLoginTypes = {
  email: string;
  password: string;
}

export type HandleLoginParamsTypes = {
  event: FormEvent<HTMLFormElement>
} & ParamsLoginTypes;
