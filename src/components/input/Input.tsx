import { FC, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'small' | 'medium' | 'large';
}

const Input: FC<Props> = ({ size = 'medium', ...rest }) => (
  <input
    {...rest}
    className={`${styles.basic} ${styles[`size__${size}`]}`}
  />
);

export default Input;
