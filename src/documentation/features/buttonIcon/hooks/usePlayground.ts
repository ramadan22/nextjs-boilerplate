import { useState, ChangeEvent, MouseEvent } from 'react';

import { ISize, IVariant } from '@/types/globals';
import size from '@/data/sizes.json';

const usePlayground = () => {
  interface IPlayground {
    text: string;
    variant: IVariant;
    size: ISize;
  }

  const [sizes] = useState<{ id: number, text: string, value: string }[]>(size);

  const [playground, setPlayground] = useState<IPlayground>({
    text: 'Button',
    variant: 'primary',
    size: 'medium',
  });

  const fill = (key: string, value: string) => {
    setPlayground({
      ...playground,
      [key]: value,
    });
  };

  const inputField = (event: ChangeEvent<HTMLInputElement>) => {
    fill(event.target.name, event.target.value);
  };

  const buttonField = (event: MouseEvent<HTMLButtonElement>) => {
    fill(event.currentTarget.name, event.currentTarget.value);
  };

  return {
    sizes,
    playground,
    inputField,
    buttonField,
  };
};

export default usePlayground;
