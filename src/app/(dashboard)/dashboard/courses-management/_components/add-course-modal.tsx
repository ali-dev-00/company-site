"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {  UploadCloud } from "lucide-react"

interface AddCourseModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AddCourseModal({ isOpen, onClose }: AddCourseModalProps) {
  const [courseTitle, setCourseTitle] = useState("")
  const [description, setDescription] = useState("")
  const [whatYouWillLearn, setWhatYouWillLearn] = useState("")
  const [category, setCategory] = useState("")
  const [subCategory, setSubCategory] = useState("")
  const [modeOfStudy, setModeOfStudy] = useState("")
  const [duration, setDuration] = useState("")
  const [location, setLocation] = useState("")
  const [courseStatus, setCourseStatus] = useState("")

  const handleSaveCourse = () => {
    console.log({
      courseTitle,
      description,
      whatYouWillLearn,
      category,
      subCategory,
      modeOfStudy,
      duration,
      location,
      courseStatus,
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px]  max-h-[450px] h-[600px] p-0 rounded-lg overflow-hidden bg-white overflow-y-auto ">
        <DialogHeader className="p-3 px-6 border-b border-gray-200 flex flex-row items-center justify-between">
          <DialogTitle className="text-xl font-bold">Add Courses</DialogTitle>
        </DialogHeader>
        <div className="px-6 py-2 grid gap-6">
          <div className="space-y-2">
            <label htmlFor="course-title" className="text-sm font-semibold text-gray-700">
              Course Title
            </label>
            <Input
              id="course-title"
              placeholder="Title"
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
              className="border-gray-300 focus:ring-[#FF2424]"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-semibold text-gray-700">
              Description
            </label>
            <Textarea
              id="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[80px] border-gray-300 focus:ring-[#FF2424]"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="what-you-will-learn" className="text-sm font-semibold text-gray-700">
              What you will learn
            </label>
            <Textarea
              id="what-you-will-learn"
              placeholder="Write here"
              value={whatYouWillLearn}
              onChange={(e) => setWhatYouWillLearn(e.target.value)}
              className="min-h-[80px] border-gray-300 focus:ring-[#FF2424]"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="category" className="text-sm font-semibold text-gray-700">
                Category
              </label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full border-gray-300 focus:ring-[#FF2424]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent >
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="development">Development</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="sub-category" className="text-sm font-semibold text-gray-700">
                Sub-Category
              </label>
              <Input
                id="sub-category"
                placeholder="Write here"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
                className="border-gray-300 focus:ring-[#FF2424]"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="mode-of-study" className="text-sm font-semibold text-gray-700">
              Mode of Study
            </label>
            <Select value={modeOfStudy} onValueChange={setModeOfStudy}>
              <SelectTrigger className="w-full border-gray-300 focus:ring-[#FF2424]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="offline">Offline</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label htmlFor="duration" className="text-sm font-semibold text-gray-700">
              Duration
            </label>
            <Input
              id="duration"
              placeholder="Write here"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="border-gray-300 focus:ring-[#FF2424]"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="upload-thumbnail" className="text-sm font-semibold text-gray-700">
              Upload Thumbnail
            </label>
            <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-md text-center">
              <UploadCloud className="h-8 w-8 text-gray-500 mb-2 focus:ring-[#FF2424]" />
              <p className="text-sm text-gray-500">
                <span className="text-[#FF2424] font-semibold cursor-pointer">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-400">SVG, PNG, JPG or GIF (max. 800x400px)</p>
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="location" className="text-sm font-semibold text-gray-700">
              Location
            </label>
            <Input
              id="location"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border-gray-300 focus:ring-[#FF2424]"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="course-status" className="text-sm font-semibold text-gray-700">
              Course Status
            </label>
            <Select value={courseStatus} onValueChange={setCourseStatus}>
              <SelectTrigger className="w-full border-gray-300 focus:ring-[#FF2424]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="not-active">Not Active</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="p-6 pt-4 border-t border-gray-200 flex justify-end">
          <Button className="bg-[#FF2424] hover:bg-[#FF2424]/90 text-white" onClick={handleSaveCourse}>
            Save Course
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
