import { FC, ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './ButtonIcon.module.scss';
import styleButton from '../Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const ButtonIcon: FC<Props> = ({
  variant = 'primary',
  size = 'medium',
  children,
  ...rest
}) => (
  <button
    {...rest}
    type="button"
    className={`${styles.basic} ${styleButton[`variant__${variant}`]} ${styleButton[`size__${size}`]}`}
  >
    {children}
  </button>
);

export default ButtonIcon;
