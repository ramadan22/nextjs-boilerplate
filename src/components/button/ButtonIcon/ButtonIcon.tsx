import React, { ReactNode } from 'react';
import styles from '@/components/button/button.module.scss';

interface IProps {
  children: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
}

const ButtonIcon: React.FC<IProps> = ({ children, variant = 'primary', size = 'medium' }) => (
  <button type="button" className={`${styles[variant]} ${styles[size]}`}>
    {children}
  </button>
);

export default ButtonIcon;
