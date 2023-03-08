import { useState } from 'react';

type IMenu = {
  id: number;
  name: string;
}

interface IMenus extends IMenu {
  subMenu: Array<IMenu> | [];
}

const SidebarMenu = () => {
  const [menus] = useState<IMenus[]>([
    {
      id: 1,
      name: 'Button',
      subMenu: [
        {
          id: 1,
          name: 'Default',
        },
        {
          id: 2,
          name: 'Button Icon',
        },
      ],
    },
    {
      id: 2,
      name: 'Icon',
      subMenu: [],
    },
    {
      id: 3,
      name: 'Input',
      subMenu: [
        {
          id: 1,
          name: 'Default',
        },
        {
          id: 2,
          name: 'Input Addon',
        },
      ],
    },
    {
      id: 4,
      name: 'Checkbox',
      subMenu: [],
    },
    {
      id: 5,
      name: 'Radio',
      subMenu: [],
    },
  ]);

  return {
    menus,
  };
};

export default SidebarMenu;
