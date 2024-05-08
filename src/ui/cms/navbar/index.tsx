'use client';

import { signOut } from 'next-auth/react';
import { IoChevronDownSharp } from 'react-icons/io5';
import { MdNotifications, MdOutlineLogout } from 'react-icons/md';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger
} from '@/components/dropdown-menu';
import DefaultDropdownMenu from '@/components/dropdown-menu/DefaultDropdownMenu';
import Input from '@/components/input';
import { cn } from '@/lib/classnames';
import Styles from './style.module.scss';

const NavbarUI = () => (
  <div className={Styles.navbar}>
    <Input
      iconType="Search"
      placeholder="Search Product"
      className={cn(Styles.inputSearch)}
      classIcon={cn(Styles.iconSearch)}
    />
    <div>
      <div className="flex gap-x-8">
        <div className="flex gap-x-2.5">
          <div className="bg-green-400 w-8 h-8 rounded-full" />
          <DefaultDropdownMenu
            handleClick={(slug) => {
              if (slug === 'logout') signOut();
            }}
            menuTrigger={(
              <>
                Haris Ramadan
                <IoChevronDownSharp />
              </>
            )}
            menuItems={[
              {
                id: 1,
                label: 'My Account',
                items: [
                  {
                    slug: 'logout',
                    text: 'Logout',
                    icon: <MdOutlineLogout />,
                    isOnClick: true,
                  },
                ]
              }
            ]}
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="text-sm">
            <MdNotifications size={23} color="#b1c3cc" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  </div>
);

export default NavbarUI;
