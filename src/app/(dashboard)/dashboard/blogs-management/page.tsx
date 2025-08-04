"use client"

import type React from "react"
import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, ChevronLeft, ChevronRight, Trash, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import AddBlogModal from "./_components/add-blog-modal"
import DeleteBlogModal from "./_components/delete-blog-modal"

interface Blog {
  _id: string
  imageUrl: string
  title: string
  description: string
}

const DUMMY_BLOGS: Blog[] = [
  {
    _id: "1",
    imageUrl: "/images/blogs-management.svg",
    title: "Level 2 Certificate in Cleaning Principles",
    description: "The Growth Company is a leading provider of education, skills..",
  },
  {
    _id: "2",
    imageUrl: "/images/blogs-management.svg",
    title: "Level 2 Certificate in Cleaning Principles",
    description: "The Growth Company is a leading provider of education, skills..",
  },
  {
    _id: "3",
    imageUrl: "/images/blogs-management.svg",
    title: "Level 2 Certificate in Cleaning Principles",
    description: "The Growth Company is a leading provider of education, skills..",
  },
  {
    _id: "4",
    imageUrl: "/images/blogs-management.svg",
    title: "Level 2 Certificate in Cleaning Principles",
    description: "The Growth Company is a leading provider of education, skills..",
  },
  {
    _id: "5",
    imageUrl: "/images/blogs-management.svg",
    title: "Level 2 Certificate in Cleaning Principles",
    description: "The Growth Company is a leading provider of education, skills..",
  },
  {
    _id: "6",
    imageUrl: "/images/blogs-management.svg",
    title: "Level 2 Certificate in Cleaning Principles",
    description: "The Growth Company is a leading provider of education, skills..",
  },
  {
    _id: "7",
    imageUrl: "/images/blogs-management.svg",
    title: "Level 2 Certificate in Cleaning Principles",
    description: "The Growth Company is a leading provider of education, skills..",
  },
  {
    _id: "8",
    imageUrl: "/images/blogs-management.svg",
    title: "Level 2 Certificate in Cleaning Principles",
    description: "The Growth Company is a leading provider of education, skills..",
  },
  {
    _id: "9",
    imageUrl: "/images/blogs-management.svg",
    title: "Level 2 Certificate in Cleaning Principles",
    description: "The Growth Company is a leading provider of education, skills..",
  },
  {
    _id: "10",
    imageUrl: "/images/blogs-management.svg",
    title: "Level 2 Certificate in Cleaning Principles",
    description: "The Growth Company is a leading provider of education, skills..",
  },
]

export default function BlogsManagement() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [page, setPage] = useState(1)
  const [limit] = useState(6) // 3 columns * 2 rows = 6 blogs per page
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const [globalSearchQuery, setGlobalSearchQuery] = useState("")

  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const fetchBlogs = () => {
    setLoading(true)
    try {
      const filteredData = DUMMY_BLOGS.filter((blog) => {
        return (
          globalSearchQuery === "" ||
          blog.title.toLowerCase().includes(globalSearchQuery.toLowerCase()) ||
          blog.description.toLowerCase().includes(globalSearchQuery.toLowerCase())
        )
      })

      setTotalPages(Math.ceil(filteredData.length / limit))
      const startIndex = (page - 1) * limit
      const endIndex = startIndex + limit
      setBlogs(filteredData.slice(startIndex, endIndex))
    } catch (err) {
      console.error("Error fetching blogs:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, [page, globalSearchQuery])

  useEffect(() => {
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

  const [SelectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleDelete = (courseId: string) => {
    setSelectedBlogId(courseId);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (SelectedBlogId) {
      setBlogs(blogs.filter((blog) => blog._id !== SelectedBlogId));
      setDeleteModalOpen(false);
      setSelectedBlogId(null);
    }
  };

  const cancelDelete = () => {
    setDeleteModalOpen(false);
    setSelectedBlogId(null);
  };
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* First Section: Header with border and rounded corners */}
      <div className="rounded-lg border border-gray-200 p-6 mb-6 bg-white">
        <div className="flex flex-col md:flex-row    items-center justify-between">
          <div className="flex items-baseline gap-2">
            <h1 className="text-2xl font-bold">All Blogs</h1>
            <Badge variant="secondary" className="bg-red-100 text-[#FF2424] text-sm font-medium px-2 py-1 rounded-full">
              {DUMMY_BLOGS.length} Blogs
            </Badge>
          </div>
          <div className="flex flex-col md:flex-row pt-2 md:pt-0   items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                placeholder="Search"
                className="pl-9 w-[250px]"
                value={globalSearchQuery}
                onChange={handleGlobalSearchChange}
              />
            </div>
            <Button className="bg-[#FF2424] hover:bg-[#FF2424]/90 text-white" onClick={() => setIsAddModalOpen(true)}>Add New Blog</Button>
          </div>
        </div>
      </div>

      {/* Blog Cards Grid */}
      {loading ? (
        <div className="text-center py-12 text-gray-500">Loading blogs...</div>
      ) : blogs.length === 0 ? (
        <div className="text-center py-12 text-gray-500">No blogs found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog._id} className="rounded-lg shadow-sm border border-gray-200 bg-white overflow-hidden">
              <div className="relative">
                <img
                  src={blog.imageUrl || "/placeholder.svg"}
                  alt={blog.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button onClick={() => handleDelete(blog._id)} variant="ghost" size="icon" className="cursor-pointer h-8 w-8 text-gray-300 bg-white/20 hover:bg-white/25">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ff2424]"></div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{blog.description}</p>
                <a href="#" className="inline-flex items-center text-[#FF2424] text-sm font-medium hover:underline">
                  Edit Blog
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      <AddBlogModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      {/* Delete modal */}
      <DeleteBlogModal
        isOpen={isDeleteModalOpen}
        onClose={cancelDelete}
        onDelete={confirmDelete}
      />
      {/* Third Section: Pagination with border and rounded corners */}
      <div className="rounded-lg border border-gray-200 p-4 mt-6 bg-white">
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
