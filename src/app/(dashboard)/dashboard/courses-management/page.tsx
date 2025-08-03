"use client"

import { useState, useEffect, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, ChevronLeft, ChevronRight, Trash, Pencil } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import DeleteModal from "./_components/delete-course"
import AddCourseModal from "./_components/add-course-modal"

interface Course {
  _id: string
  name: string
  category: string
  location: string
  type: string
  status: "Active" | "Not Active"
}

const DUMMY_COURSES: Course[] = [
  {
    _id: "1",
    name: "Design Fundamentals",
    category: "Design",
    location: "London",
    type: "Compliance",
    status: "Active",
  },
  {
    _id: "2",
    name: "Advanced React",
    category: "Development",
    location: "New York",
    type: "Technical",
    status: "Active",
  },
  {
    _id: "3",
    name: "Marketing Strategy",
    category: "Marketing",
    location: "Paris",
    type: "Business",
    status: "Not Active",
  },
  {
    _id: "4",
    name: "Data Science Basics",
    category: "Data Science",
    location: "Berlin",
    type: "Technical",
    status: "Active",
  },
  {
    _id: "5",
    name: "Project Management",
    category: "Management",
    location: "London",
    type: "Business",
    status: "Not Active",
  },
  {
    _id: "6",
    name: "UI/UX Principles",
    category: "Design",
    location: "San Francisco",
    type: "Compliance",
    status: "Active",
  },
  { _id: "7", name: "Cloud Computing", category: "IT", location: "Sydney", type: "Technical", status: "Active" },
  {
    _id: "8",
    name: "Financial Modeling",
    category: "Finance",
    location: "Tokyo",
    type: "Business",
    status: "Not Active",
  },
  {
    _id: "9",
    name: "Cybersecurity Essentials",
    category: "IT",
    location: "London",
    type: "Compliance",
    status: "Active",
  },
  {
    _id: "10",
    name: "Content Creation",
    category: "Marketing",
    location: "New York",
    type: "Business",
    status: "Active",
  },
  {
    _id: "11",
    name: "Machine Learning",
    category: "Data Science",
    location: "Berlin",
    type: "Technical",
    status: "Active",
  },
  {
    _id: "12",
    name: "Product Design",
    category: "Design",
    location: "Paris",
    type: "Compliance",
    status: "Not Active",
  },
  {
    _id: "13",
    name: "Digital Marketing",
    category: "Marketing",
    location: "San Francisco",
    type: "Business",
    status: "Active",
  },
  { _id: "14", name: "Database Management", category: "IT", location: "Sydney", type: "Technical", status: "Active" },
  {
    _id: "15",
    name: "Business Analytics",
    category: "Business",
    location: "Tokyo",
    type: "Business",
    status: "Not Active",
  },
]

export default function CoursesManagement() {
  const [courses, setCourses] = useState<Course[]>([])
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
  const [sortField, setSortField] = useState<keyof Course>("name")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

  const fetchCourses = () => {
    setLoading(true)
    try {
      const filteredData = DUMMY_COURSES.filter((course) => {
        const matchesGlobalSearch =
          course.name.toLowerCase().includes(globalSearchQuery.toLowerCase()) ||
          course.category.toLowerCase().includes(globalSearchQuery.toLowerCase()) ||
          course.location.toLowerCase().includes(globalSearchQuery.toLowerCase()) ||
          course.type.toLowerCase().includes(globalSearchQuery.toLowerCase()) ||
          course.status.toLowerCase().includes(globalSearchQuery.toLowerCase())

        const matchesCourseName = courseNameFilter
          ? course.name.toLowerCase().includes(courseNameFilter.toLowerCase())
          : true
        const matchesCategory = categoryFilter ? course.category === categoryFilter : true
        const matchesLocation = locationFilter
          ? course.location.toLowerCase().includes(locationFilter.toLowerCase())
          : true
        const matchesStatus = statusFilter ? course.status === statusFilter : true

        return matchesGlobalSearch && matchesCourseName && matchesCategory && matchesLocation && matchesStatus
      })

      // Apply sorting
      filteredData.sort((a, b) => {
        const aValue = a[sortField]
        const bValue = b[sortField]

        if (typeof aValue === "string" && typeof bValue === "string") {
          return sortOrder === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
        }
        return 0
      })

      setTotalPages(Math.ceil(filteredData.length / limit))
      const startIndex = (page - 1) * limit
      const endIndex = startIndex + limit
      setCourses(filteredData.slice(startIndex, endIndex))
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

  const handleSort = (field: keyof Course) => {
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

  const confirmDelete = () => {
    if (selectedCourseId) {
      setCourses(courses.filter((course) => course._id !== selectedCourseId));
      setDeleteModalOpen(false);
      setSelectedCourseId(null);
    }
  };

  const cancelDelete = () => {
    setDeleteModalOpen(false);
    setSelectedCourseId(null);
  };

  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  return (
    <div className=" m-5 border border-gray-300 rounded-lg ">
      <div className="mb-6 p-6 flex flex-col md:flex-row items-center justify-between">

        <div className="flex items-baseline gap-2">
          <h1 className="text-xl font-bold">All Courses</h1>
          <Badge variant="secondary" className="bg-red-100 text-[#FF2424] text-sm font-medium px-2 py-1 rounded-full">
            {DUMMY_COURSES.length} courses
          </Badge>
        </div>
        <div className=" flex flex-col md:flex-row pt-2 md:pt-0 items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              placeholder="Search"
              className="pl-9 w-[250px] border-gray-200 focus:ring-2 focus:ring-[#FF2424]"
              value={globalSearchQuery}
              onChange={handleGlobalSearchChange}
            />
          </div>
          <Button className="bg-[#FF2424]  mt-2 md:mt-0 hover:bg-[#FF2424]/90 text-white"  onClick={() => setIsAddModalOpen(true)}>Add New Course</Button>
        </div>
      </div>

      {/* Filter Section */}
      <Card className="mb-6 rounded-none shadow-none border-none bg-gray-100">
        <CardContent className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          {/* Course Name */}
          <div className="space-y-1 ">
            <label htmlFor="course-name-filter" className="text-sm font-bold text-gray-700">
              Course Name
            </label>
            <Input
              id="course-name-filter"
              placeholder="Search"
              value={courseNameFilter}
              onChange={(e) => setCourseNameFilter(e.target.value)}
              className="border-gray-300 mt-2"
            />
          </div>

          {/* Category Name */}
          <div className="space-y-1">
            <label htmlFor="category-filter" className="text-sm font-bold text-gray-700 mt-2">
              Category Name
            </label>
            <Select value={categoryFilter} onValueChange={setCategoryFilter} >
              <SelectTrigger className="w-full text-gray-500 mt-2">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="text-gray-500">
                <SelectItem value="all">All Categories</SelectItem>
                {allCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Location */}
          <div className="space-y-1">
            <label htmlFor="location-filter" className="text-sm font-bold text-gray-700 ">
              Location
            </label>
            <Input
              id="location-filter"
              placeholder="Search"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="border-gray-300 mt-2"
            />
          </div>

          {/* Status */}
          <div className="space-y-1">
            <label htmlFor="status-filter" className="text-sm font-bold text-gray-700">
              Status
            </label>
            <Select value={statusFilter} onValueChange={setStatusFilter} >
              <SelectTrigger className="w-full text-gray-500 mt-2  ">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="text-gray-500">
                <SelectItem value="all">All Statuses</SelectItem>
                {allStatuses.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-1">
            <Button className="bg-[#FF2424] hover:bg-[#FF2424]/90 text-white w-full" onClick={handleFilterSearch}>
              Search
            </Button>
            <span
              className="text-black  cursor-pointer hover:underline text-sm font-semibold text-center border-gray-200 bg-transparent"
              onClick={handleClearFilters}
            >
              Clear Filters
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card className="border-none shadow-none">
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
                      <td className="p-4 text-sm font-medium text-gray-600">{course.type}</td>
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
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-700">
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
        <AddCourseModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
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
