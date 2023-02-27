import Image from 'next/image';

import ArrowDown from '@/public/assets/icons/ArrowDown.svg';
import ArrowLeft from '@/public/assets/icons/ArrowLeft.svg';

type IImageIcon = {
  src: string;
}

const ImageIcon = ({ src }: IImageIcon): JSX.Element => (
  <Image src={src} alt="icon" fill />
) as JSX.Element;

export type IconType =
  | 'ArrowDown'
  | 'ArrowLeft';

export const IconTypes = new Map([
  ['ArrowDown', <ImageIcon src={ArrowDown} />],
  ['ArrowLeft', <ImageIcon src={ArrowLeft} />],
]);
