import { FC, ButtonHTMLAttributes } from 'react';
import { ISize, IVariant } from '@/types/globals';

import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: IVariant;
  size?: ISize;
}

const Button: FC<Props> = ({
  variant = 'primary',
  size = 'medium',
  text,
  ...rest
}) => (
  <button
    {...rest}
    type="button"
    className={`${styles.basic} ${styles[`variant__${variant}`]} ${styles[`size__${size}`]}`}
  >
    {text}
  </button>
);

export default Button;
