import { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './RadioButton.module.scss';

interface Props {
  text: string;
  value: string | number;
  checked?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
}

const RadioButton: FC<Props> = ({
  size = 'medium',
  variant = 'primary',
  checked = false,
  value,
  text,
}) => {
  const cx = classNames.bind(styles);
  const classes = cx(
    styles.basic,
    styles[`variant__${variant}`],
    styles[`size__${size}`],
  );

  return (
    <button type="button" value={value} className={classes}>
      <div>
        <span className={cx({ [styles.active]: checked })} />
      </div>
      <span>{text}</span>
    </button>
  );
};

export default RadioButton;
