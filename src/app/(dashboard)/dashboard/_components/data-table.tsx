"use client"
import { type ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination"


interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  pagination: {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
  }
  isLoading: boolean // New prop for loading state
}

export function DataTable<TData, TValue>({ columns, data, pagination, isLoading }: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const { currentPage, totalPages, onPageChange } = pagination

  const renderPaginationItems = () => {
    const items = []
    const maxPagesToShow = 5 // Number of page links to show directly

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(
          <PaginationItem className="bg-gray-300" key={i}>
            <PaginationLink className="bg-gray-300" href="#" isActive={currentPage === i} onClick={() => onPageChange(i)}>
              {i}
            </PaginationLink>
          </PaginationItem>,
        )
      }
    } else {
      // Always show first page
      items.push(
        <PaginationItem key={1}>
          <PaginationLink href="#" isActive={currentPage === 1} onClick={() => onPageChange(1)}>
            1
          </PaginationLink>
        </PaginationItem>,
      )

      // Show ellipsis if current page is far from the beginning
      if (currentPage > 2) {
        items.push(<PaginationEllipsis key="start-ellipsis" />)
      }

      // Show pages around the current page
      const startPage = Math.max(2, currentPage - Math.floor((maxPagesToShow - 3) / 2))
      const endPage = Math.min(totalPages - 1, currentPage + Math.ceil((maxPagesToShow - 3) / 2))

      for (let i = startPage; i <= endPage; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink href="#" isActive={currentPage === i} onClick={() => onPageChange(i)}>
              {i}
            </PaginationLink>
          </PaginationItem>,
        )
      }

      // Show ellipsis if current page is far from the end
      if (currentPage < totalPages - 1) {
        items.push(<PaginationEllipsis key="end-ellipsis" />)
      }

      // Always show last page
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink href="#" isActive={currentPage === totalPages} onClick={() => onPageChange(totalPages)}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>,
      )
    }
    return items
  }

  return (
    <div className="w-full ">
      {/* Filter Section */}
      {/* <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
        <div className="col-span-1">
          <div className="text-sm font-medium text-gray-700">Course Name</div>
          <Input placeholder="Search" className="mt-1" />
        </div>
        <div className="col-span-1">
          <div className="text-sm font-medium text-gray-700">Category Name</div>
          <Select>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="development">Development</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-1">
          <div className="text-sm font-medium text-gray-700">Location</div>
          <Input placeholder="Search" className="mt-1" />
        </div>
        <div className="col-span-1">
          <div className="text-sm font-medium text-gray-700">Status</div>
          <Select>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="not-active">Not Active</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-1 flex items-end gap-2">
          <Button className="h-10 w-full bg-redType hover:bg-redType/90">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
          <Button variant="outline" className="h-10 w-full bg-transparent">
            Clear Filters
          </Button>
        </div>
      </div> */}

      {/* Table */}
      <div className="rounded-md border border-gray-300">
        <Table>
          <TableHeader className="bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow className="border-gray-300">
                <TableCell colSpan={columns.length} className="h-24 text-center border-gray-300">
                  <div className="flex items-center justify-center">
                    <div
                      className="h-8 w-8 animate-spin rounded-full border-4  border-solid border-gray-300 border-t-[#FF2424]"
                      role="status"
                      aria-label="Loading data"
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center border-gray-300">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            {renderPaginationItems()}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
