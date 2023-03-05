import { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './RadioButton.module.scss';

interface Props {
  text: string;
  value: string | number;
  // checked: boolean;
}

const RadioButton: FC<Props> = ({ text, value }) => {
  const cx = classNames.bind(styles);
  const clasess = cx(styles.basic);

  return (
    <button type="button" value={value} className={clasess}>
      <div>
        <span className={cx({ active: false })} />
      </div>
      <span>{text}</span>
    </button>
  );
};

export default RadioButton;
