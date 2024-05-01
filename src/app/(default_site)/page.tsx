'use client';

import TableDataUI from '@/ui/table-data';

// import {
//   Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow
// } from '@/components/table';

export const HomePage = () => {
  const data = [
    {
      id: 1101,
      name: 'barang 1',
      email: 'email1@gmail.com',
    },
    {
      id: 1102,
      name: 'barang 2',
      email: 'email2@gmail.com',
    },
  ];

  return (
    <div className="p-10">
      {/* <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader className="[&_tr]:border-b [&_tr]:text-black/50">
          <TableRow>
            <TableHead className="w-[100px]">Tracking ID</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Payment Mode</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>#20462</TableCell>
            <TableCell>Hat</TableCell>
            <TableCell>Matt Dickerson</TableCell>
            <TableCell>13/05/2022</TableCell>
            <TableCell>$4.95</TableCell>
            <TableCell>
              <Button>Delivered</Button>
            </TableCell>
            <TableCell>
              delete
            </TableCell>
          </TableRow>
        </TableBody>
      </Table> */}
      <TableDataUI
        headers={[
          {
            key: 'id',
            header: 'ID',
          },
          {
            key: 'name',
            header: 'Name',
          },
          {
            key: 'email',
            header: 'Email',
          },
        ]}
        data={data}
      />
    </div>
  );
};

export default HomePage;
