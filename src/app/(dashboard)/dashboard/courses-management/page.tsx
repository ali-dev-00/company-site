"use client"

import { useState, useEffect, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, ChevronLeft, ChevronRight, Trash, Pencil, Menu } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import DeleteModal from "./_components/delete-course"
import AddCourseModal from "./_components/add-course-modal"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { getCourses, deleteCourse } from "@/services/courses.service"
import type { Course as ApiCourse } from "@/types/course-types"

interface RowCourse {
  _id: string
  name: string
  category: string
  location: string
  type: string
  status: "Active" | "Not Active"
}

const DUMMY_COURSES: RowCourse[] = []

export default function CoursesManagement() {
  const [courses, setCourses] = useState<RowCourse[]>([])
  const [selectedRows, setSelectedRows] = useState<string[]>([])
  const [selectAll, setSelectAll] = useState(false)
  const [page, setPage] = useState(1)
  const [limit] = useState(7)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const [globalSearchQuery, setGlobalSearchQuery] = useState("")

  // Filter states
  const [courseNameFilter, setCourseNameFilter] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("")
  const [locationFilter, setLocationFilter] = useState("")
  const [statusFilter, setStatusFilter] = useState("")

  // Sort states
  const [sortField, setSortField] = useState<keyof RowCourse>("name")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

  const fetchCourses = async () => {
    setLoading(true)
    try {
      const res = await getCourses(page, limit)
      if (res?.status && Array.isArray(res.data)) {
        const transformed: RowCourse[] = res.data.map((c: ApiCourse) => ({
          _id: c._id,
          name: c.title,
          category: typeof c.category === 'string' ? c.category : (c.category?.name ?? ''),
          location: c.location,
          type: c.type?.replace('_', ' ') ?? '',
          status: c.status ? 'Active' : 'Not Active',
        }))
        setCourses(transformed)
        const total = res.pagination?.total ?? transformed.length
        setTotalPages(Math.max(1, Math.ceil(total / limit)))
      } else {
        setCourses([])
      }
    } catch (err) {
      console.error("Error fetching courses:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCourses()
  }, [page, globalSearchQuery, courseNameFilter, categoryFilter, locationFilter, statusFilter, sortField, sortOrder])

  useEffect(() => {
    setPage(1)
  }, [globalSearchQuery, courseNameFilter, categoryFilter, locationFilter, statusFilter])

  const toggleAll = () => {
    if (selectAll) {
      setSelectedRows([])
    } else {
      setSelectedRows(courses.map((v) => v._id))
    }
    setSelectAll(!selectAll)
  }

  const toggleRow = (id: string) => {
    setSelectedRows((prev) => (prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]))
  }

  const handlePrev = () => {
    if (page > 1) setPage((p) => p - 1)
  }

  const handleNext = () => {
    if (page < totalPages) setPage((p) => p + 1)
  }

  const handleGlobalSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalSearchQuery(event.target.value)
  }

  const handleFilterSearch = () => {
    fetchCourses()
  }

  const handleClearFilters = () => {
    setCourseNameFilter("")
    setCategoryFilter("")
    setLocationFilter("")
    setStatusFilter("")
    setGlobalSearchQuery("")
    setPage(1)
  }

  const handleSort = (field: keyof RowCourse) => {
    const newOrder = sortField === field && sortOrder === "asc" ? "desc" : "asc"
    setSortField(field)
    setSortOrder(newOrder)
  }

  const getPaginationNumbers = useMemo(() => {
    const pageNumbers = []
    const maxPagesToShow = 5

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      pageNumbers.push(1)
      if (page > 2) pageNumbers.push("...")
      if (page > 1 && page < totalPages) pageNumbers.push(page)
      if (page < totalPages - 1) pageNumbers.push("...")
      pageNumbers.push(totalPages)

      const uniquePageNumbers = Array.from(new Set(pageNumbers)).sort((a, b) => {
        if (a === "...") return 1
        if (b === "...") return -1
        return Number(a) - Number(b)
      })
      return uniquePageNumbers
    }
    return pageNumbers
  }, [page, totalPages])

  const allCategories = useMemo(() => {
    const categories = new Set(DUMMY_COURSES.map((course) => course.category))
    return Array.from(categories)
  }, [])

  const allStatuses = useMemo(() => {
    const statuses = new Set(DUMMY_COURSES.map((course) => course.status))
    return Array.from(statuses)
  }, [])



  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleDelete = (courseId: string) => {
    setSelectedCourseId(courseId);
    setDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!selectedCourseId) return;
    try {
      const res = await deleteCourse(selectedCourseId);
      if (!res.status) {
        console.error('Failed to delete course:', res.message);
      }
      await fetchCourses();
    } catch (e) {
      console.error('Delete error', e);
    } finally {
      setDeleteModalOpen(false);
      setSelectedCourseId(null);
    }
  };

  const cancelDelete = () => {
    setDeleteModalOpen(false);
    setSelectedCourseId(null);
  };

  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [editCourseId, setEditCourseId] = useState<string | null>(null)
  const openCreate = () => { setEditCourseId(null); setIsAddModalOpen(true); }
  const openEdit = (id: string) => { setEditCourseId(id); setIsAddModalOpen(true); }
  return (
    <div className="m-5 border border-gray-300 rounded-lg ">
      <div className=" p-6 flex flex-col md:flex-row items-center justify-between  border-b border-gray-200">

        <div className="flex items-baseline gap-2 ">
          <h1 className="text-xl font-bold">All Courses</h1>
          {/* Optional total count badge removed since server pagination is used */}
        </div>

  <Button className="bg-[#FF2424]  mt-2 md:mt-0 hover:bg-[#FF2424]/90 text-white" onClick={openCreate}>Add New Course</Button>
      </div>

      {/* Filter Section */}
      <Card className=" py-2 rounded-none shadow-none border-none border-t-gray-200">
        <CardContent className="p-4 flex flex-col md:flex-row items-center justify-between ">
          <div className=" flex flex-col md:flex-row  items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                placeholder="Search"
                className="pl-9 w-[250px] border-gray-200 focus:ring-2 focus:ring-[#FF2424]"
                value={globalSearchQuery}
                onChange={handleGlobalSearchChange}
              />
            </div>
          
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 border-gray-300 bg-white px-4 py-2 rounded-lg"
              >
                <Menu className="h-4 w-4" />
                Filters
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32 p-0 bg-white border border-gray-200 rounded-lg shadow-lg">
              <div className="py-2">
                <button
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  onClick={() => setStatusFilter(statusFilter === "Active" ? "" : "Active")}
                >
                  Active
                </button>
                <button
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  onClick={() => setStatusFilter(statusFilter === "Not Active" ? "" : "Not Active")}
                >
                  Not Active
                </button>
                <button
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    // Toggle category filter - you can customize this logic
                    setCategoryFilter(categoryFilter ? "" : "Design")
                  }}
                >
                  Category
                </button>
                <button
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    // Toggle name filter - you can customize this logic
                    setCourseNameFilter(courseNameFilter ? "" : "Design")
                  }}
                >
                  Name
                </button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

        </CardContent>
      </Card>

      {/* Table */}
      <Card className="py-2 border-none shadow-none">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-gray-100 border-b border-gray-300">
                <tr>
                  <th className="text-left p-4 text-sm font-bold text-gray-700">
                    <Checkbox checked={selectAll} onCheckedChange={toggleAll} className="border-gray-300" />
                  </th>
                  <th
                    className="text-left p-4 text-sm font-medium text-gray-700 cursor-pointer"
                    onClick={() => handleSort("name")}
                  >
                    Course Name
                  </th>
                  <th
                    className="text-left p-4 text-sm font-medium text-gray-700 cursor-pointer"
                    onClick={() => handleSort("category")}
                  >
                    Category
                  </th>
                  <th
                    className="text-left p-4 text-sm font-medium text-gray-700 cursor-pointer"
                    onClick={() => handleSort("location")}
                  >
                    Location
                  </th>
                  <th
                    className="text-left p-4 text-sm font-medium text-gray-700 cursor-pointer"
                    onClick={() => handleSort("type")}
                  >
                    Type
                  </th>
                  <th
                    className="text-left p-4 text-sm font-medium text-gray-700 cursor-pointer"
                    onClick={() => handleSort("status")}
                  >
                    Status
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={7} className="text-center py-6 text-gray-500">
                      Loading courses...
                    </td>
                  </tr>
                ) : courses.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-6 text-gray-500">
                      No courses found.
                    </td>
                  </tr>
                ) : (
                  courses.map((course) => (
                    <tr key={course._id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4 text-sm font-medium text-gray-600">
                        <Checkbox
                          checked={selectedRows.includes(course._id)}
                          onCheckedChange={() => toggleRow(course._id)}
                          className="border-gray-300"
                        />
                      </td>
                      <td className="p-4 text-sm font-medium text-gray-600">{course.name}</td>
                      <td className="p-4 text-sm font-medium text-gray-600">{course.category}</td>
                      <td className="p-4 text-sm font-medium text-gray-600">{course.location}</td>
                      <td className="p-4 text-sm font-medium text-gray-600">
                        <span
                          className={cn(
                            "px-2 py-1 rounded-full text-xs font-medium",
                            course.type === 'TRENDING'
                              ? 'bg-blue-100 text-blue-700'
                              : course.type === 'UPCOMING'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-purple-100 text-purple-800'
                          )}
                        >
                          {course.type}
                        </span>
                      </td>
                      <td className="p-4 text-sm font-medium text-gray-600">
                        <Badge
                          className={cn(
                            "px-2 py-1 rounded-full text-xs font-medium",
                            course.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700",
                          )}
                        >
                          <span
                            className={cn(
                              "inline-block w-2 h-2 rounded-full mr-1",
                              course.status === "Active" ? "bg-green-500" : "bg-red-500",
                            )}
                          />
                          {course.status}
                        </Badge>
                      </td>
                      <td className="p-4 text-sm font-medium text-gray-600">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-gray-500 hover:text-gray-700"
                            onClick={() => handleDelete(course._id)}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-700" onClick={() => openEdit(course._id)}>
                            <Pencil className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Delete modal */}
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={cancelDelete}
        onDelete={confirmDelete}
      />
      <AddCourseModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        courseId={editCourseId}
        onSaved={() => fetchCourses()}
      />
      {/* Pagination */}
      <div className="flex overflow-x-auto items-center justify-between  p-6">
        <Button
          variant="outline"
          onClick={handlePrev}
          disabled={page === 1}
          className="flex items-center gap-2 border-gray-200 bg-transparent"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Button>

        <div className="flex items-center gap-1">
          {getPaginationNumbers.map((p, i) =>
            p === "..." ? (
              <span key={i} className="px-2 py-1 text-gray-500">
                ...
              </span>
            ) : (
              <Button
                key={p}
                variant={page === p ? "default" : "outline"}
                size="sm"
                className="w-8 h-8 border-gray-300"
              >
                {p}
              </Button>
            ),
          )}
        </div>

        <Button
          variant="outline"
          onClick={handleNext}
          disabled={page === totalPages}
          className="flex items-center gap-2 border-gray-200 bg-transparent"
        >
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  )
}
