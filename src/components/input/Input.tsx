import { FC, InputHTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

const Input: FC<Props> = ({ size = 'medium', fullWidth = false, ...rest }) => {
  const cx = classNames.bind(styles);

  const classes = cx(
    styles.basic,
    styles[`size__${size}`],
    {
      [styles.fullWidth]: fullWidth,
    },
  );

  return (
    <input
      {...rest}
      className={classes}
    />
  );
};

export default Input;
