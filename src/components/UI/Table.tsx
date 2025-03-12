/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useRef, useState } from "react";

export const Table = ({
  data,
  columns,
  title,
}: {
  data: any;
  columns: any;
  title?: React.ReactElement;
  size?: "sm" | "md" | "lg";
}) => {
  const [expanded, setExpanded] = useState({});

  const tableContainerRef = useRef(null);



  const table = useReactTable({
    data,
    columns,
    state: {
      expanded,
    },
    onExpandedChange: setExpanded,
    getSubRows: (row: any) => row.subRows,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <div className="relative w-full">


      {/* Table Container */}
      <div
        ref={tableContainerRef}
        className="overflow-x-auto lg:px-2 w-3/4 flex justify-center mx-auto flex-col"
        dir="rtl"
      >
        <table className="min-w-full bg-white border-collapse">
          {/* Table Head */}
          <thead className="sticky top-0 z-10">
            {title && (
              <tr>
                <th colSpan={table.getAllColumns().length}
                  className="text-md font-bold font-arabic lg:text-3xl text-center bg-[#39b0e5] text-white py-2 rounded-t-md">
                  {title}
                </th>
              </tr>
            )}
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="bg-[#39b0e5] text-white text-md lg:text-lg">
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="p-3 text-center border border-slate-300 text-md lg:text-lg">
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          {/* Table Body */}
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className={row.index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-3 text-center border border-slate-200 text-md lg:text-lg">
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
};
