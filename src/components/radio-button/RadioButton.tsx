import { FC, ButtonHTMLAttributes, MouseEventHandler } from 'react';
import classNames from 'classnames/bind';

import { ISize, IVariant } from '@/types/globals';
import styles from './RadioButton.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  value: string | number;
  checked?: boolean;
  variant?: IVariant;
  size?: ISize;
  onClick?: MouseEventHandler;
}

const RadioButton: FC<Props> = ({
  text,
  value,
  onClick,
  size = 'medium',
  checked = false,
  variant = 'primary',
  ...rest
}) => {
  const cx = classNames.bind(styles);
  const classes = cx(
    styles.basic,
    styles[`variant__${variant}`],
    styles[`size__${size}`],
  );

  return (
    <button
      {...rest}
      type="button"
      value={value}
      onClick={onClick}
      className={classes}
    >
      <div>
        <span className={cx({ [styles.active]: checked })} />
      </div>
      <span>{text}</span>
    </button>
  );
};

export default RadioButton;
