"use client"

import { useState } from "react"
import type { ColumnDef } from "@tanstack/react-table"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTable } from "../_components/data-table"
import { StatusBadge } from "../_components/status-badge"
import { Trash2, Pencil } from "lucide-react"

type Course = {
  id: string
  courseName: string
  category: string
  location: string
  type: string
  status: "active" | "not-active"
}

const columns: ColumnDef<Course>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="border-gray-300"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="border-gray-300"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "courseName",
    header: "Course Name",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as "active" | "not-active"
      return <StatusBadge status={status} />
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: () => (
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" aria-label="Delete course">
          <Trash2 className="h-4 w-4 text-gray-500 hover:text-gray-700" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Edit course">
          <Pencil className="h-4 w-4 text-gray-500 hover:text-gray-700" />
        </Button>
      </div>
    ),
  },
]

const data: Course[] = [
  {
    id: "1",
    courseName: "Design Fundamentals",
    category: "Design",
    location: "London",
    type: "Compliance",
    status: "active",
  },
  {
    id: "2",
    courseName: "Design Fundamentals",
    category: "Design",
    location: "London",
    type: "Compliance",
    status: "active",
  },
  {
    id: "3",
    courseName: "Design Fundamentals",
    category: "Design",
    location: "London",
    type: "Compliance",
    status: "not-active",
  },
  {
    id: "4",
    courseName: "Design Fundamentals",
    category: "Design",
    location: "London",
    type: "Compliance",
    status: "not-active",
  },
  {
    id: "5",
    courseName: "Design Fundamentals",
    category: "Design",
    location: "London",
    type: "Compliance",
    status: "active",
  },
  {
    id: "6",
    courseName: "Design Fundamentals",
    category: "Design",
    location: "London",
    type: "Compliance",
    status: "active",
  },
  {
    id: "7",
    courseName: "Design Fundamentals",
    category: "Design",
    location: "London",
    type: "Compliance",
    status: "active",
  },
  {
    id: "8",
    courseName: "Design Fundamentals",
    category: "Design",
    location: "London",
    type: "Compliance",
    status: "active",
  },
]

export default function CoursesManagementPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false) 
  const totalPages = 10 

  const handlePageChange = (page: number) => {
    setIsLoading(true) 
    setTimeout(() => {
      setCurrentPage(page)
      setIsLoading(false) 
    }, 700) 
  }

  return (
    <div className="container   mx-auto py-12 px-4">
      <div className="rounded-lg border border-gray-300 bg-white p-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <h1 className="text-2xl font-bold">All Courses</h1>
            <span className="text-sm font-medium text-[#FF2424]">100 courses</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input placeholder="Search" className="pl-9" />
            </div>
            <Button className="bg-[#FF2424] hover:bg-[#FF2424]/90 text-white">Add New Course</Button>
          </div>
        </div>

        {/* Data Table Section */}
        <DataTable
          columns={columns}
          data={data} // In a real app, you'd pass filtered/paginated data here
          pagination={{
            currentPage,
            totalPages,
            onPageChange: handlePageChange,
          }}
          isLoading={isLoading} // Pass loading state to DataTable
        />
      </div>
    </div>
  )
}
