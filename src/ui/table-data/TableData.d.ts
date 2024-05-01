/* eslint-disable @typescript-eslint/no-explicit-any */

// export type TableHeaderField<T extends Record<string, any>> = {
//   [K in keyof T]: string | number;
// } & {
//   handleSort?: (slug: string, sortBy: 'asc' | 'desc') => void;
// }

export type TableHeaderField = {
  key: string;
  header: string;
}

// export type PropsTypes = {
//   tableHeader: TableHeaderField[];
//   tableBody: {
//     data: React.ReactNode;
//   }[];
// }

export type PropsTypes = {
  headers: TableHeaderField[] | [];
  data: Array[];
}
