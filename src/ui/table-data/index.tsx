'use client';

/* eslint-disable react/no-array-index-key */

import {
  Table, TableBody,
  TableCell,
  TableHead,
  TableHeader, TableRow
} from '@/components/table';

import Button from '@/components/button';
import Input from '@/components/input';
import Pagination from '@/components/pagination';
import { PropsTypes } from './TableData';

const TableDataUI = ({ headers, data }: PropsTypes) => (
  <div>
    <div className="flex items-center mb-5">
      <div className="flex items-center basis-1/2 gap-x-5">
        <Input
          type="text"
          iconType="Search"
          iconDirection="left"
          placeholder="Search..."
        />
      </div>
      <div className="flex basis-1/2 justify-end">
        <Button>
          Add Data
        </Button>
      </div>
    </div>
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map((item) => (
            <TableHead key={item.key}>{item.header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, idx: number) => (
          <TableRow key={idx}>
            {headers.map((item2, key) => (
              <TableCell key={key}>
                {item[item2.key]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <div>
      <Pagination
        count={10}
      />
    </div>
  </div>
);

export default TableDataUI;
