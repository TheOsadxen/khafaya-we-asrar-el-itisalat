/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

export const Table = ({
  data,
  columns,
  title,
  size = "md",
}: {
  data: any;
  columns: any;
  title?: React.ReactElement;
  size?: "sm" | "md" | "lg";
}) => {
  const [expanded, setExpanded] = useState({});

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
    <div
      className="overflow-x-auto  px-2 w-3/4 flex justify-center mx-auto flex-col"
      dir="rtl"
    >
      {title && (
        <div className="text-xl font-bold font-arabic lg:text-3xl text-center w-full mx-auto bg-[#39b0e5] text-white py-2 rounded-t-md">
          {title}
        </div>
      )}

      <table className="min-w-full bg-white border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className={`bg-[#39b0e5] text-white ${
                size === "lg"
                  ? "text-2xl"
                  : size === "md"
                  ? "text-lg"
                  : "text-md"
              }`}
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="p-3 text-center border border-slate-300"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className={row.index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="p-3 text-center border border-slate-200 "
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
