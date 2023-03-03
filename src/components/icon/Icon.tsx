import { FC } from 'react';
import styles from './Icon.module.scss';

import { IconType, IconTypes } from './IconTypes';

interface IProps {
  size?: 'small' | 'medium' | 'large';
  type: IconType;
}

const getIcon = (type: IconType): JSX.Element => IconTypes.get(type) as JSX.Element;

const Icon: FC<IProps> = ({ size = 'small', type }) => (
  <div className={`${styles.basic} ${styles[`size__${size}`]}`}>
    {getIcon(type)}
  </div>
);

export default Icon;
