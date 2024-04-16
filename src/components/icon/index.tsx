'use client';

import { FC } from 'react';

import { cn } from '@/lib/classnames';
import { IconType, IconValueType } from './Icon.type';

import CheckIcon from '@/assets/icons/Check.svg';
import SearchIcon from '@/assets/icons/Search.svg';

const IconList = new Map([
  ['Search', <SearchIcon />],
  ['Check', <CheckIcon />],
]);

const getIcon = (type: IconValueType): JSX.Element => IconList.get(type) as JSX.Element;

const Icon: FC<IconType> = ({ type, className = '' }) => (
  <i className={cn('[&>svg]:h-auto [&>svg]:w-full w-6', className)}>
    {getIcon(type)}
  </i>
);

export default Icon;
