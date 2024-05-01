'use client';

import { LinkProps } from 'next/link';
import * as React from 'react';

import { cn } from '@/lib/classnames';

type TableProps = {
  className?: string;
  nextLinkProps?: Omit<LinkProps, 'href'>;
} & React.HTMLAttributes<HTMLTableElement>;

type TableComponentProps<T> = {
  className?: string;
} & T;

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({
    className,
    ...props
  }, ref) => (
    <div className="relative w-full whitespace-nowrap overflow-auto scroll-custom">
      <table
        ref={ref}
        className={cn(
          'w-full caption-bottom text-sm relative',
          className,
        )}
        {...props}
      />
    </div>
  ),
);
Table.displayName = 'Table';

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  TableComponentProps<React.HTMLAttributes<HTMLTableSectionElement>>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn('[&_tr]:border-b [&_tr]:text-black/50 [&_tr]:py-6', className)}
    {...props}
  />
));
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  TableComponentProps<React.HTMLAttributes<HTMLTableSectionElement>>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn(
      '[&_tr:last-child]:border-0',
      'group-[.is-table-alternate_td]:p-5',
      'group-[.is-table-alternate_td:first-child]:rounded-l-2xl group-[.is-table-alternate_td:last-child]:rounded-r-2xl group-[.is-table-alternate_td]:bg-white',
      className,
    )}
    {...props}
  />
));
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  TableComponentProps<React.HTMLAttributes<HTMLTableSectionElement>>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn('text-primary-foreground bg-primary font-medium', className)}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  TableComponentProps<React.HTMLAttributes<HTMLTableRowElement>>
>(({ className, ...props }, ref) => (
  <tr ref={ref} className={cn('py-4', className)} {...props} />
));
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  TableComponentProps<React.ThHTMLAttributes<HTMLTableCellElement>>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'h-12 px-4 text-left font-normal text-neutral [&:has([role=checkbox])]:pr-0',
      'group-[.is-table-alternate_th]:px-5',
      className,
    )}
    {...props}
  />
));
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  TableComponentProps<React.TdHTMLAttributes<HTMLTableCellElement>>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      'p-4 text-left align-middle [&:has([role=checkbox])]:pr-0',
      className,
    )}
    {...props}
  />
));
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  TableComponentProps<React.HTMLAttributes<HTMLTableCaptionElement>>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('text-muted-foreground mt-4 text-sm', className)}
    {...props}
  />
));
TableCaption.displayName = 'TableCaption';

export {
  Table, TableBody, TableCaption, TableCell, TableFooter,
  TableHead, TableHeader, TableRow
};
