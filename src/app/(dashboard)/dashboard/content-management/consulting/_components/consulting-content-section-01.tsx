"use client"

import React, { useState, useRef, useCallback } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { CloudUpload } from "lucide-react"

type UploadSlot = "main"

export default function ConsultingContentSection01() {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    buttonText: "",
    buttonLink: "",
  })

  const [selectedFiles, setSelectedFiles] = useState<Record<UploadSlot, File | null>>({
    main: null,
  })

  const [isDragging, setIsDragging] = useState<Record<UploadSlot, boolean>>({
    main: false,
  })

  const fileInputRefs: Record<UploadSlot, React.RefObject<HTMLInputElement | null>> = {
    main: useRef<HTMLInputElement | null>(null),
  }

  const handleDragOver = useCallback((e: React.DragEvent, id: UploadSlot) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(prev => ({ ...prev, [id]: true }))
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent, id: UploadSlot) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(prev => ({ ...prev, [id]: false }))
  }, [])

  const handleDrop = useCallback((e: React.DragEvent, id: UploadSlot) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(prev => ({ ...prev, [id]: false }))
    const file = e.dataTransfer.files?.[0]
    if (file) setSelectedFiles(prev => ({ ...prev, [id]: file }))
  }, [])

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, id: UploadSlot) => {
    const file = e.target.files?.[0] ?? null
    setSelectedFiles(prev => ({ ...prev, [id]: file }))
  }, [])

  const handleUploadClick = (id: UploadSlot) => {
    fileInputRefs[id].current?.click()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSave = () => {
    console.log("Saving Feature form:", { formData, selectedFiles })
    alert("Form data saved! (Check console for details)")
  }

  const renderUploadArea = (id: UploadSlot) => (
    <div
      className={`flex flex-col items-center justify-center p-8 border-2 ${
        isDragging[id] ? "border-red-600" : "border-gray-300"
      } border-dashed rounded-lg cursor-pointer transition-colors duration-200 h-full`}
      onDragOver={e => handleDragOver(e, id)}
      onDragLeave={e => handleDragLeave(e, id)}
      onDrop={e => handleDrop(e, id)}
      onClick={() => handleUploadClick(id)}
    >
      <CloudUpload className="w-10 h-10 text-gray-400 mb-3" />
      <p className="text-gray-600 text-sm text-center">
        <span className="text-red-600 font-semibold">Click to upload</span> or drag and drop
      </p>
      <p className="text-gray-500 text-xs text-center mt-1">
        SVG, PNG, JPG or GIF (max. 800x400px)
      </p>
      <input
        type="file"
        className="hidden"
        ref={fileInputRefs[id]}
        onChange={e => handleFileChange(e, id)}
        accept=".svg,.png,.jpg,.jpeg,.gif"
      />
      {selectedFiles[id] && (
        <p className="mt-2 text-sm text-gray-700">Selected file: {selectedFiles[id]?.name}</p>
      )}
    </div>
  )

  return (
    <section className="px-6 py-2">
      <div className="border-gray-200 border mx-auto bg-white p-8 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Feature</h2>

        <div className="space-y-6">
          <div>
            <Label htmlFor="title" className="text-base font-medium text-gray-800 mb-2 block">
              Title
            </Label>
            <Input
              id="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Welcome"
              className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
            />
          </div>

          <div>
            <Label htmlFor="subtitle" className="text-base font-medium text-gray-800 mb-2 block">
              Subtitle
            </Label>
            <Textarea
              id="subtitle"
              value={formData.subtitle}
              onChange={handleInputChange}
              placeholder="Write here"
              className="w-full min-h-[120px] resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
            />
          </div>

          <div>
            <Label className="text-base font-medium text-gray-800 mb-2 block">Upload Image</Label>
            {renderUploadArea("main")}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="buttonText" className="text-base font-medium text-gray-800 mb-2 block">
                Button Text
              </Label>
              <Input
                id="buttonText"
                value={formData.buttonText}
                onChange={handleInputChange}
                placeholder="Get Started"
                className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
              />
            </div>
            <div>
              <Label htmlFor="buttonLink" className="text-base font-medium text-gray-800 mb-2 block">
                Button Link
              </Label>
              <Input
                id="buttonLink"
                value={formData.buttonLink}
                onChange={handleInputChange}
                placeholder="Link"
                className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
              />
            </div>
          </div>

          <div className="flex justify-end pt-6 border-t border-gray-200 mt-6">
            <Button
              onClick={handleSave}
              className="bg-red-600 hover:bg-red-600/90 text-white font-semibold px-8 py-3 rounded-md"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}