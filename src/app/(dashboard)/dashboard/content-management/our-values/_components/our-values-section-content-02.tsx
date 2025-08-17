"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { CloudUpload } from "lucide-react"

type FormData = {
  subtitle: string
  images: (File | null)[]
}

export default function OurValuesSectionsContent02() {
  const [formData, setFormData] = useState<FormData>({
    subtitle: "",
    images: [null, null, null, null, null, null],
  })

  const [dragStates, setDragStates] = useState<boolean[]>([false, false, false, false, false, false])

  const handleSubtitleChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subtitle: value }))
  }

  const handleDragOver = useCallback((e: React.DragEvent, index: number) => {
    e.preventDefault()
    e.stopPropagation()
    setDragStates((prev) => prev.map((state, i) => (i === index ? true : state)))
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent, index: number) => {
    e.preventDefault()
    e.stopPropagation()
    setDragStates((prev) => prev.map((state, i) => (i === index ? false : state)))
  }, [])

  const handleDrop = useCallback((e: React.DragEvent, index: number) => {
    e.preventDefault()
    e.stopPropagation()
    setDragStates((prev) => prev.map((state, i) => (i === index ? false : state)))
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(index, e.dataTransfer.files[0])
    }
  }, [])

  const handleImageUpload = (index: number, file: File) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.map((img, i) => (i === index ? file : img)),
    }))
  }

  const handleUploadClick = (index: number) => {
    const input = document.getElementById(`file-input-${index}`) as HTMLInputElement
    input?.click()
  }

  const handleSave = () => {
    console.log("Saving form data:", formData)
    alert("Form data saved! (Check console for details)")
  }

  return (
    <section className="px-6 py-8">
     <div className="border-gray-200 border mx-auto bg-white p-8 rounded-xl shadow-sm">
     <div className="space-y-8">
          {/* Section Header */}
          <h1 className="text-xl font-bold text-gray-900">Section</h1>

          {/* Subtitle Field */}
          <div>
            <Label htmlFor="subtitle" className="text-base font-medium text-gray-800 mb-2 block">
              Subtitle
            </Label>
            <Textarea
              id="subtitle"
              value={formData.subtitle}
              onChange={(e) => handleSubtitleChange(e.target.value)}
              placeholder="Write here"
              className="w-full h-28 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
            />
          </div>

          {/* Images Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Images</h2>

            {/* Image Upload Grid - 2x3 layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {formData.images.map((image, index) => (
                <div key={index}>
                  <Label className="text-base font-medium text-gray-800 mb-2 block">Upload Image</Label>
                  <div
                    className={`flex flex-col items-center justify-center p-8 border-2 ${
                      dragStates[index] ? "border-red-600" : "border-gray-300"
                    } border-dashed rounded-lg cursor-pointer transition-colors duration-200 h-32`}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDragLeave={(e) => handleDragLeave(e, index)}
                    onDrop={(e) => handleDrop(e, index)}
                    onClick={() => handleUploadClick(index)}
                  >
                    <CloudUpload className="w-8 h-8 text-gray-400 mb-2" />
                    <p className="text-red-600 text-sm text-center font-medium mb-1">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-gray-500 text-xs text-center">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                    <input
                      id={`file-input-${index}`}
                      type="file"
                      className="hidden"
                      accept=".svg,.png,.jpg,.jpeg,.gif"
                      onChange={(e) => e.target.files?.[0] && handleImageUpload(index, e.target.files[0])}
                    />
                    {image && <p className="mt-2 text-sm text-gray-700 text-center">Selected: {image.name}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end pt-4">
            <Button
              onClick={handleSave}
              className="bg-red-600 hover:bg-red-600/90 text-white font-semibold px-6 py-3 rounded-md"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
