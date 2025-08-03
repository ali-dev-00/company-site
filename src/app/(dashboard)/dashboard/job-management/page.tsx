"use client"

import type React from "react"
import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, ChevronLeft, ChevronRight, Trash, Pencil, Eye, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import AddJobModal from "./_components/add-job-modal"
import DeleteJobModal from "./_components/delete-job-modal"

interface Job {
  _id: string
  category: string
  categoryCount: number
  postedTime: string
  title: string
  deadline: string
  location: string
  experience: string
}

const DUMMY_JOBS: Job[] = [
  {
    _id: "1",
    category: "ENGINEERING",
    categoryCount: 20,
    postedTime: "2hr",
    title: "Wordpress Developer",
    deadline: "2021-05-08",
    location: "Hargeisa, Somaliland",
    experience: "1-3 year",
  },
  {
    _id: "2",
    category: "DESIGN",
    categoryCount: 15,
    postedTime: "1 day",
    title: "UI/UX Designer",
    deadline: "2021-05-10",
    location: "London, UK",
    experience: "2-5 years",
  },
  {
    _id: "3",
    category: "MARKETING",
    categoryCount: 10,
    postedTime: "3hr",
    title: "Digital Marketing Specialist",
    deadline: "2021-05-07",
    location: "New York, USA",
    experience: "Entry-level",
  },
  {
    _id: "4",
    category: "ENGINEERING",
    categoryCount: 20,
    postedTime: "2hr",
    title: "Wordpress Developer",
    deadline: "2021-05-08",
    location: "Hargeisa, Somaliland",
    experience: "1-3 year",
  },
  {
    _id: "5",
    category: "SALES",
    categoryCount: 8,
    postedTime: "5hr",
    title: "Sales Manager",
    deadline: "2021-05-12",
    location: "Dubai, UAE",
    experience: "5+ years",
  },
  {
    _id: "6",
    category: "ENGINEERING",
    categoryCount: 20,
    postedTime: "2hr",
    title: "Wordpress Developer",
    deadline: "2021-05-08",
    location: "Hargeisa, Somaliland",
    experience: "1-3 year",
  },
  {
    _id: "7",
    category: "HR",
    categoryCount: 5,
    postedTime: "1 week",
    title: "HR Coordinator",
    deadline: "2021-05-15",
    location: "Berlin, Germany",
    experience: "1-2 years",
  },
  {
    _id: "8",
    category: "ENGINEERING",
    categoryCount: 20,
    postedTime: "2hr",
    title: "Wordpress Developer",
    deadline: "2021-05-08",
    location: "Hargeisa, Somaliland",
    experience: "1-3 year",
  },
  {
    _id: "9",
    category: "FINANCE",
    categoryCount: 7,
    postedTime: "4 days",
    title: "Financial Analyst",
    deadline: "2021-05-11",
    location: "Tokyo, Japan",
    experience: "3-5 years",
  },
  {
    _id: "10",
    category: "ENGINEERING",
    categoryCount: 20,
    postedTime: "2hr",
    title: "Wordpress Developer",
    deadline: "2021-05-08",
    location: "Hargeisa, Somaliland",
    experience: "1-3 year",
  },
]

export default function JobsManagement() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [page, setPage] = useState(1)
  const [limit] = useState(6) // 3 columns * 2 rows = 6 jobs per page
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const [globalSearchQuery, setGlobalSearchQuery] = useState("")

  const fetchJobs = () => {
    setLoading(true)
    try {
      const filteredData = DUMMY_JOBS.filter((job) => {
        return (
          globalSearchQuery === "" ||
          job.title.toLowerCase().includes(globalSearchQuery.toLowerCase()) ||
          job.category.toLowerCase().includes(globalSearchQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(globalSearchQuery.toLowerCase()) ||
          job.experience.toLowerCase().includes(globalSearchQuery.toLowerCase())
        )
      })

      setTotalPages(Math.ceil(filteredData.length / limit))
      const startIndex = (page - 1) * limit
      const endIndex = startIndex + limit
      setJobs(filteredData.slice(startIndex, endIndex))
    } catch (err) {
      console.error("Error fetching jobs:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJobs()
  }, [page, globalSearchQuery])

  useEffect(() => {
    // Reset page to 1 when search query changes
    setPage(1)
  }, [globalSearchQuery])

  const handlePrev = () => {
    if (page > 1) setPage((p) => p - 1)
  }

  const handleNext = () => {
    if (page < totalPages) setPage((p) => p + 1)
  }

  const handleGlobalSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalSearchQuery(event.target.value)
  }

  const getPaginationNumbers = useMemo(() => {
    const pageNumbers: (number | string)[] = []
    const maxPagesToShow = 5 // Number of page buttons to show directly

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      pageNumbers.push(1)
      if (page > 2 && pageNumbers[pageNumbers.length - 1] !== "...") pageNumbers.push("...")
      if (page > 1 && page < totalPages) pageNumbers.push(page)
      if (page < totalPages - 1 && pageNumbers[pageNumbers.length - 1] !== "...") pageNumbers.push("...")
      if (totalPages > 1) pageNumbers.push(totalPages)

      // Remove duplicates and sort
      const uniquePageNumbers = Array.from(new Set(pageNumbers)).sort((a, b) => {
        if (a === "...") return 1
        if (b === "...") return -1
        return Number(a) - Number(b)
      })
      return uniquePageNumbers
    }
    return pageNumbers
  }, [page, totalPages])
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [jobToDelete, setJobToDelete] = useState<Job | null>(null)

  const handleDeleteClick = (job: Job) => {
    setJobToDelete(job)
    setIsDeleteModalOpen(true)
  }

  const cancelDelete = () => {
    setIsDeleteModalOpen(false)
    setJobToDelete(null)
  }

  const confirmDelete = () => {
    if (jobToDelete) {
      setJobs(jobs.filter(job => job._id !== jobToDelete._id))
      setIsDeleteModalOpen(false)
      setJobToDelete(null)
    }
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* First Section: Header with border and rounded corners */}
      <div className="rounded-lg border border-gray-200 p-6 mb-6 bg-white">
        <div className="  flex flex-col md:flex-row  items-center justify-between">
          <div className="flex items-baseline gap-2">
            <h1 className="text-2xl font-bold">All Jobs</h1>
            <Badge variant="secondary" className="bg-red-100 text-[#FF2424] text-sm font-medium px-2 py-1 rounded-full">
              {DUMMY_JOBS.length} Jobs
            </Badge>
          </div>
          <div className=" flex flex-col md:flex-row pt-2 md:pt-0  items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                placeholder="Search"
                className="pl-9 w-[250px]"
                value={globalSearchQuery}
                onChange={handleGlobalSearchChange}
              />
            </div>
            <Button className="bg-[#FF2424] hover:bg-[#FF2424]/90 text-white" onClick={() => setIsAddModalOpen(true)}>Add New Job</Button>
          </div>
        </div>
      </div>

      {/* Job Cards Grid */}
      {loading ? (
        <div className="text-center py-12 text-gray-500">Loading jobs...</div>
      ) : jobs.length === 0 ? (
        <div className="text-center py-12 text-gray-500">No jobs found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div key={job._id} className="rounded-lg shadow-sm border border-gray-200 bg-white">
              <div className="p-4">
                <div className="flex justify-end gap-2 mb-4">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-gray-500  cursor-pointer hover:text-red-500"
                    onClick={() => handleDeleteClick(job)}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-700">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-700">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className=" text-[#FF2424] text-md font-semibold  py-1 rounded-md">
                    {job.category}  ({job.categoryCount})
                  </span>
                  <Badge className="bg-red-100 text-[#FF2424] text-xs font-semibold px-2 py-1 rounded-md">
                    Posted {job.postedTime}
                  </Badge>
                </div>
                <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
                <div className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold">Deadline:</span> {job.deadline}
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-1">
                  <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                  {job.location}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Experience:</span> {job.experience}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
          <DeleteJobModal
        isOpen={isDeleteModalOpen}
        onClose={cancelDelete}
        onDelete={confirmDelete}
      />
      <AddJobModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      {/* Third Section: Pagination with border and rounded corners */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 p-4 mt-6 bg-white">
        <div className="flex items-center justify-between">
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
                  onClick={() => setPage(Number(p))}
                  variant={page === p ? "default" : "outline"}
                  size="sm"
                  className={cn("w-8 h-8", page !== p && "border-gray-200 bg-transparent")}
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
    </div>
  )
}
