import ArrowDown from '@/public/assets/icons/ArrowDown.svg';
import ArrowLeft from '@/public/assets/icons/ArrowLeft.svg';

export type IconType =
  | 'ArrowDown'
  | 'ArrowLeft';

export const IconTypes = new Map([
  ['ArrowDown', <ArrowDown />],
  ['ArrowLeft', <ArrowLeft />],
]);
