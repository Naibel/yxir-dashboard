import { useMemo, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import {
  MdFirstPage,
  MdLastPage,
  MdNavigateBefore,
  MdNavigateNext,
} from "react-icons/md";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import {
  Cell,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Header,
  HeaderGroup,
  Row,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import { ColumnDef } from "@/types/types";

type TableProps<T> = {
  tableData: T[];
  columnsData: ColumnDef[];
};

export function Table<T>({ tableData, columnsData }: TableProps<T>) {
  const data = useMemo<T[]>(() => tableData, [tableData]);
  const columns = useMemo<ColumnDef[]>(() => columnsData, [columnsData]);

  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
      pagination,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    initialState: {
      sorting: [
        {
          id: "id",
          desc: true,
        },
      ],
    },
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div className="flex gap-5 flex-col items-start">
      <div className="flex gap-2 border-2 rounded-full pl-2 pr-5 py-1">
        <IoSearchSharp
          size={24}
          color="#aaa"
          className="duration-300 opacity-70 hover:opacity-100 cursor-pointer"
        />
        <input
          className="bg-grey "
          type="text"
          placeholder="Rechercher dans le tableau"
          value={filtering}
          onChange={(e) => {
            setFiltering(e.target.value);
          }}
        />
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {table.getHeaderGroups().map((headerGroup: HeaderGroup<T>) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header: Header<T, unknown>) => (
                <th
                  className="text-left px-6 py-3"
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div className="flex items-center">
                    <span>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </span>
                    {
                      {
                        asc: <TiArrowSortedUp size={20} />,
                        desc: <TiArrowSortedDown size={20} />,
                      }[header.column.getIsSorted() ?? null]
                    }
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row: Row<T>) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              key={row.id}
            >
              {row.getVisibleCells().map((cell: Cell<T, unknown>) => (
                <td className="px-6 py-3" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center">
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.setPageIndex(0)}
        >
          <MdFirstPage size={30} />
        </button>
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          <MdNavigateBefore size={30} />
        </button>
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          <MdNavigateNext size={30} />
        </button>
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          <MdLastPage size={30} />
        </button>
      </div>
    </div>
  );
}

export default Table;
