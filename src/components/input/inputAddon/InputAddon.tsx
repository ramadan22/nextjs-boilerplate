import { FC, InputHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './InputAddon.module.scss';
import stylesInput from '../Input.module.scss';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'small' | 'medium' | 'large';
  addonPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children: ReactNode;
}

const InputAddon: FC<Props> = ({
  addonPosition = 'right',
  fullWidth = false,
  size = 'medium',
  children,
  ...rest
}) => {
  const cx = classNames.bind(stylesInput);

  const positionClasses = cx('InputAddon', {
    [styles.left]: addonPosition === 'left',
    [styles.right]: addonPosition === 'right',
  });

  const inputClasses = cx('Input', {
    [stylesInput.fullWidth]: fullWidth,
  });

  return (
    <div className={`${styles.basic}`}>
      <input
        {...rest}
        className={`${stylesInput.basic} ${stylesInput[`size__${size}`]} ${inputClasses}`}
      />
      <div className={positionClasses}>
        {children}
      </div>
    </div>
  );
};

export default InputAddon;
