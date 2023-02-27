import React, { ReactNode } from 'react';
import styles from './ButtonIcon.module.scss';
import styleButton from '../Button.module.scss';

interface IProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
}

const ButtonIcon: React.FC<IProps> = ({ children, variant = 'primary', size = 'medium' }) => (
  <button type="button" className={`${styles.basic} ${styleButton[`variant__${variant}`]} ${styleButton[`size__${size}`]}`}>
    {children}
  </button>
);

export default ButtonIcon;
