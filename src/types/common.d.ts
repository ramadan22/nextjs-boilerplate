/* eslint-disable @typescript-eslint/no-explicit-any */

declare module '*.png';

declare module '*.svg';

export type CamelCaseKey<S extends string> = S extends `${infer F}_${infer R}`
  ? `${Lowercase<F>}${Capitalize<CamelCaseKey<R>>}`
  : Lowercase<S>;

export type CamelCase<T extends Record<string, any>> = {
  [K in keyof T as CamelCaseKey<K>]: T[K] extends Record<string, any>
    ? CamelCase<T[K]>
    : T[K];
};
