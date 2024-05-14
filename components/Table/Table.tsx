import { useMemo, useState } from "react";
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

import PaginationButton from "./PaginationButton";
import SearchBar from "./SearchBar";

import { ColumnDef } from "@/types";

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
    <div className="flex pt-4 gap-5 flex-col w-full">
      <div className="flex justify-between">
        <SearchBar
          value={filtering}
          onChange={(e) => {
            setFiltering(e.target.value);
          }}
        />
        <div className="flex items-center">
          <PaginationButton
            tooltip={{ id: "first-page", content: "Première page" }}
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.setPageIndex(0)}
            Icon={MdFirstPage}
          />
          <PaginationButton
            tooltip={{ id: "previous-page", content: "Page précédente" }}
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            Icon={MdNavigateBefore}
          />
          <span>
            Page {table.getState().pagination.pageIndex + 1} sur{" "}
            {table.getPageCount()}
          </span>
          <PaginationButton
            tooltip={{ id: "next-page", content: "Page suivante" }}
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            Icon={MdNavigateNext}
          />
          <PaginationButton
            tooltip={{ id: "last-page", content: "Dernière page" }}
            disabled={!table.getCanNextPage()}
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            Icon={MdLastPage}
          />
        </div>
      </div>

      <div className="overflow-auto">
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
                      {header.column.getIsSorted() === "asc" && (
                        <TiArrowSortedDown size={20} />
                      )}
                      {header.column.getIsSorted() === "desc" && (
                        <TiArrowSortedUp size={20} />
                      )}
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
      </div>
    </div>
  );
}

export default Table;
