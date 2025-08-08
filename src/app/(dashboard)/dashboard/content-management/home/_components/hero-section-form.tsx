"use client"

import React, { useState, useCallback } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { CloudUpload } from 'lucide-react'

export default function HomeHeroContentForm() {
  const [isDragging, setIsDragging] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0])
    }
  }, [])

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }, [])

  const handleSave = () => {
    // Implement save logic here, e.g., send data to an API
    console.log("Saving form data:", {
      title: (document.getElementById("title") as HTMLInputElement)?.value,
      subtitle: (document.getElementById("subtitle") as HTMLTextAreaElement)?.value,
      image: selectedFile,
    })
    alert("Form data saved! (Check console for details)")
  }

  return (
    <section className="px-6 py-2">
      <div className="border-gray-200 border mx-auto bg-white p-8 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Hero Section</h2>

        <div className="space-y-6">
          {/* Title Input */}
          <div>
            <Label htmlFor="title" className="text-base font-medium text-gray-800 mb-2 block">
              Title
            </Label>
            <Input id="title" placeholder="Welcome" className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600" />
          </div>

          {/* Subtitle Textarea */}
          <div>
            <Label htmlFor="subtitle" className="text-base font-medium text-gray-800 mb-2 block">
              Subtitle
            </Label>
            <Textarea
              id="subtitle"
              placeholder="Write here"
              className="w-full h-28 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
            />
          </div>

          {/* Upload Image */}
          <div>
            <Label htmlFor="upload-image" className="text-base font-medium text-gray-800 mb-2 block">
              Upload Image
            </Label>
            <div
              className={`flex flex-col items-center justify-center p-8 border-2 ${
                isDragging ? "border-red-600" : "border-gray-300"
              } border-dashed rounded-lg cursor-pointer transition-colors duration-200`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById("file-input")?.click()}
            >
              <CloudUpload className="w-10 h-10 text-gray-400 mb-3" />
              <p className="text-gray-600 text-sm text-center">
                <span className="text-red-600 font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-gray-500 text-xs text-center mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
              <input
                id="file-input"
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept=".svg,.png,.jpg,.jpeg,.gif"
              />
              {selectedFile && (
                <p className="mt-2 text-sm text-gray-700">Selected file: {selectedFile.name}</p>
              )}
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end pt-4">
            <Button onClick={handleSave} className="bg-red-600 hover:bg-red-600/90 text-white font-semibold px-6 py-3 rounded-md">
              Save
            </Button>
          </div>
        </div>
      </div>
     
    </section>
  )
}
