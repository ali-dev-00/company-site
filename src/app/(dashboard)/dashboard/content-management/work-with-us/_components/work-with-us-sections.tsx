"use client"

import React, { useState, useCallback } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import IconSelect from "../../../_components/IconSelect" 
import { CloudUpload } from 'lucide-react'

interface Feature {
  icon: string
  title: string
  subtitle: string
}

interface FormData {
  [key: string]: Feature
}

export default function WorkWithUsSectionsContent() {
  const [isDragging, setIsDragging] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const [formData, setFormData] = useState<FormData>({
    feature1: {
      icon: "Flag",
      title: "",
      subtitle: "",
    },
    feature2: {
      icon: "Star",
      title: "",
      subtitle: "",
    },
    feature3: {
      icon: "Heart",
      title: "",
      subtitle: "",
    }
  })

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

  const handleInputChange = (field: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        title: value,
      }
    }))
  }

  const handleIconChange = (index: number, value: string) => {
    const key = `feature${index}`
    setFormData((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        icon: value,
      },
    }))
  }

  const handleSave = () => {
    console.log("Saving form data:", formData)
    alert("Form data saved! (Check console for details)")
  }

  return (
    <section className="px-6 py-2">
      <div className="border-gray-200 border mx-auto bg-white p-8 rounded-xl shadow-sm">
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

          {/* Features - Icon, Title, Subtitle */}
          {[1, 2, 3].map((index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Features</h3>
              <div>
                {/* Icon Select (using IconSelect component) */}
                <IconSelect
                  id={`feature-icon-${index}`}
                  value={formData[`feature${index}`].icon}
                  onChange={(value) => handleIconChange(index, value)}
                  options={["Flag", "Star", "Heart", "Bell"]}
                />
              </div>

              {/* Title Input */}
              <div>
                <Label
                  htmlFor={`feature-title-${index}`}
                  className="text-base font-medium text-gray-800 mb-2 block"
                >
                  Title
                </Label>
                <Input
                  id={`feature-title-${index}`}
                  placeholder="Title"
                  value={formData[`feature${index}`].title}
                  onChange={(e) =>
                    handleInputChange(`feature${index}`, e.target.value)
                  }
                  className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                />
              </div>

              {/* Subtitle Textarea */}
              <div>
                <Label
                  htmlFor={`feature-subtitle-${index}`}
                  className="text-base font-medium text-gray-800 mb-2 block"
                >
                  Subtitle
                </Label>
                <Textarea
                  id={`feature-subtitle-${index}`}
                  placeholder="Write here"
                  value={formData[`feature${index}`].subtitle}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      [`feature${index}`]: {
                        ...prevState[`feature${index}`],
                        subtitle: e.target.value,
                      },
                    }))
                  }
                  className="w-full h-28 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
                />
              </div>
            </div>
          ))}

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
