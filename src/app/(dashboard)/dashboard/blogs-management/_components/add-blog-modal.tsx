"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Upload } from "lucide-react"

interface AddBlogModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AddBlogModal({ isOpen, onClose }: AddBlogModalProps) {
  const [blogTitle, setBlogTitle] = useState("")
  const [description, setDescription] = useState("")
  const [authorName, setAuthorName] = useState("")
  const [thumbnail, setThumbnail] = useState<File | null>(null)

  const handleThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setThumbnail(e.target.files[0])
    }
  }

  const handleSaveBlog = () => {
    console.log({
      blogTitle,
      description,
      authorName,
      thumbnail,
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[450px] h-[600px] p-0 rounded-lg overflow-hidden bg-white overflow-y-auto my-2 mb-2">
        <DialogHeader className="p-3 px-6 border-b border-gray-200 flex flex-row items-center justify-between">
          <DialogTitle className="text-xl font-bold">Add Blog</DialogTitle>
        </DialogHeader>

        <div className="px-6 py-2 grid gap-6">
          {/* Blog Title */}
          <div className="space-y-2">
            <label htmlFor="blog-title" className="text-sm font-semibold text-gray-700">
              Blog Title
            </label>
            <Input
              id="blog-title"
              placeholder="Write here"
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
              className="border-gray-300 focus:ring-[#FF2424]"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-semibold text-gray-700">
              Description
            </label>
            <Textarea
              id="description"
              placeholder="Write here"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[80px] border-gray-300 focus:ring-[#FF2424]"
            />
          </div>

          {/* Author Name */}
          <div className="space-y-2">
            <label htmlFor="author-name" className="text-sm font-semibold text-gray-700">
              Author Name
            </label>
            <Input
              id="author-name"
              placeholder="Name"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="border-gray-300 focus:ring-[#FF2424]"
            />
          </div>

          {/* Upload Thumbnail */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Upload Thumbnail</label>
            <div className="border border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#FF2424] transition">
              <input
                type="file"
                accept="image/*"
                onChange={handleThumbnailUpload}
                className="hidden"
                id="upload-thumbnail"
              />
              <label htmlFor="upload-thumbnail" className="flex flex-col items-center cursor-pointer">
                <Upload className="h-6 w-6 text-gray-400 mb-2" />
                <span className="text-[#FF2424] font-medium">Click to upload</span>
                <span className="text-gray-400 text-xs mt-1">
                  or drag and drop <br /> SVG, PNG, JPG or GIF (max. 800x400px)
                </span>
              </label>
            </div>
            {thumbnail && (
              <p className="text-xs text-gray-500 mt-1">Selected: {thumbnail.name}</p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-4 border-t border-gray-200 flex justify-end">
          <Button className="bg-[#FF2424] hover:bg-[#FF2424]/90 text-white" onClick={handleSaveBlog}>
            Save Blog
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
