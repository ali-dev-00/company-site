"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"


interface AddJobModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AddJobModal({ isOpen, onClose }: AddJobModalProps) {
  const [jobTitle, setJobTitle] = useState("")
  const [description, setDescription] = useState("")
  const [time, setTime] = useState("9 to 5")
  const [location, setLocation] = useState("")
  const [category, setCategory] = useState("")
  const [jobType, setJobType] = useState("On site")
  const [experience, setExperience] = useState("est. 1 year")

  const handleSaveJob = () => {
    console.log({
      jobTitle,
      description,
      time,
      location,
      category,
      jobType,
      experience,
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[450px] h-[600px] p-0 rounded-lg overflow-hidden bg-white  overflow-y-auto my-2 mb-2">
        <DialogHeader className="p-3 px-6 border-b border-gray-200 flex flex-row items-center justify-between">
          <DialogTitle className="text-xl font-bold">Add Job</DialogTitle>
        
        </DialogHeader>
        <div className="px-6 py-2 grid gap-6">
          <div className="space-y-2">
            <label htmlFor="job-title" className="text-sm font-semibold text-gray-700">
              Job Title
            </label>
            <Input
              id="job-title"
              placeholder="Title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
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
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="time" className="text-sm font-semibold text-gray-700">
                Time
              </label>
              <Select value={time} onValueChange={setTime}>
                <SelectTrigger className="w-full border-gray-300 focus:ring-[#FF2424]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9 to 5">9 to 5</SelectItem>
                  <SelectItem value="Flexible">Flexible</SelectItem>
                  <SelectItem value="Night shift">Night shift</SelectItem>
                </SelectContent>
              </Select>
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
          </div>
          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-semibold text-gray-700">
              Category
            </label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full border-gray-300 focus:ring-[#FF2424]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Engineering">Engineering</SelectItem>
                <SelectItem value="Marketing">Marketing</SelectItem>
                <SelectItem value="Design">Design</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label htmlFor="job-type" className="text-sm font-semibold text-gray-700">
              Job Type
            </label>
            <Select value={jobType} onValueChange={setJobType}>
              <SelectTrigger className="w-full border-gray-300 focus:ring-[#FF2424]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="On site">On site</SelectItem>
                <SelectItem value="Remote">Remote</SelectItem>
                <SelectItem value="Hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label htmlFor="experience" className="text-sm font-semibold text-gray-700">
              Experience
            </label>
            <Select value={experience} onValueChange={setExperience}>
              <SelectTrigger className="w-full border-gray-300 focus:ring-[#FF2424]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="est. 1 year">est. 1 year</SelectItem>
                <SelectItem value="est. 3 years">est. 3 years</SelectItem>
                <SelectItem value="est. 5+ years">est. 5+ years</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="p-6 pt-4 border-t border-gray-200 flex justify-end">
          <Button className="bg-[#FF2424] hover:bg-[#FF2424]/90 text-white" onClick={handleSaveJob}>
            Save Job
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
