'use client';

import React from 'react';

import { cn } from '@/lib/classnames';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger
} from './index';

interface MenuItemTypes {
  text: string;
  slug: string;
  icon?: React.ReactNode;
  isOnClick?: boolean;
}

interface MenuItemsTypes {
  id: number;
  label: string;
  items: MenuItemTypes[];
}

interface Props {
  menuItems: MenuItemsTypes[];
  menuTrigger: React.ReactNode | string;
  handleClick?: (slug: string, value?: string | number) => void
}

const DefaultDropdownMenu = ({ menuTrigger, menuItems, handleClick }: Props) => (
  <DropdownMenu>
    <DropdownMenuTrigger className="text-sm flex items-center gap-x-1 outline-none">
      {menuTrigger}
    </DropdownMenuTrigger>
    <DropdownMenuContent className="px-0">
      {menuItems.map((group) => (
        <div key={group.id} className="min-w-[150px]">
          {group.label && (
            <>
              <DropdownMenuLabel>{group.label}</DropdownMenuLabel>
              <DropdownMenuSeparator />
            </>
          )}
          {group.items.map((item) => (
            <DropdownMenuItem
              key={item.slug}
              className={cn('hover:bg-gray-200/50 px-2.5 flex gap-x-2', item.isOnClick && 'cursor-pointer')}
              onClick={() => {
                if (item.isOnClick && handleClick) handleClick(item.slug);
              }}
            >
              {item.icon && item.icon}
              {item.text}
            </DropdownMenuItem>
          ))}
        </div>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

export default DefaultDropdownMenu;
