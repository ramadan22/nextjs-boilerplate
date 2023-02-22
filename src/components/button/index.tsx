import React from 'react';
import styles from './Button.module.css';

interface IProps {
  text: string;
  // variant: 'primary' | 'secondary';
}

const Button: React.FC<IProps> = ({ text }) => (
  <button type="button" className={styles.primary}>
    {text}
  </button>
);

export default Button;
