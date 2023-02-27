import React from 'react';
import styles from './Button.module.scss';

interface IProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<IProps> = ({ text, variant = 'primary', size = 'medium' }) => (
  <button type="button" className={`${styles[variant]} ${styles[size]}`}>
    {text}
  </button>
);

export default Button;
