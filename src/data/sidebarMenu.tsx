import { AiFillProduct } from 'react-icons/ai';
import { RiAccountCircleFill, RiBarChartBoxFill } from 'react-icons/ri';

export const sidebarMenu = [
  {
    slug: 'MENU',
    text: 'Menu',
    list: [
      {
        slug: 'MENU_DASHBOARD',
        text: 'Dashboard',
        icon: <RiBarChartBoxFill />,
        href: '/',
      },
      {
        slug: 'MENU_PRODUCT',
        text: 'Products',
        icon: <AiFillProduct />,
        href: '/',
      }
    ]
  },
  {
    text: 'Other',
    list: [
      {
        slug: 'OTHER_ACCOUNT',
        text: 'Account',
        icon: <RiAccountCircleFill />,
        href: '/',
      }
    ]
  },
];
