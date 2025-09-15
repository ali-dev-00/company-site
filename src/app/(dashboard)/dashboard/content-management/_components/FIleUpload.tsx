"use client"

import React, { useState, useRef, useCallback, useEffect } from "react"
import { CloudUpload } from "lucide-react"

interface FileUploadProps {
  label?: string
  onFileSelect: (file: File | null) => void
  acceptedTypes?: string
  className?: string
  previewUrl?: string | null
  uploading?: boolean
  fullWidthPreview?: boolean
  previewHeightClass?: string
}

export default function FileUpload({
  label = "Upload File",
  onFileSelect,
  acceptedTypes = ".svg,.png,.jpg,.jpeg,.gif",
  className = "w-full",
  previewUrl = null,
  uploading = false,
  fullWidthPreview = false,
  previewHeightClass = "h-48",
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [localPreview, setLocalPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

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
      const file = e.dataTransfer.files[0]
      setSelectedFile(file)
      onFileSelect(file)
    }
  }, [onFileSelect])

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedFile(file)
      onFileSelect(file)
    }
  }, [onFileSelect])

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  // Generate a local object URL for immediate preview when a new file is selected
  useEffect(() => {
    if (!selectedFile) {
      // No local file selected, clear local preview
      if (localPreview) URL.revokeObjectURL(localPreview)
      setLocalPreview(null)
      return
    }
    const objUrl = URL.createObjectURL(selectedFile)
    setLocalPreview(objUrl)
    return () => {
      URL.revokeObjectURL(objUrl)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFile])

  return (
  <div className={className}>
      {label && (
        <label className="text-base font-medium text-gray-800 mb-2 block">
          {label}
        </label>
      )}
      <div
        className={`relative w-full flex flex-col items-center justify-center p-8 border-2 ${isDragging ? "border-red-600" : "border-gray-300"} border-dashed rounded-lg cursor-pointer transition-colors duration-200`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleUploadClick}
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
          ref={fileInputRef}
          onChange={handleFileChange}
          accept={acceptedTypes}
        />
        {(localPreview || previewUrl) && (
          <div className={`mt-4 w-full ${fullWidthPreview ? "" : "max-w-xl"}`}>
            <img
              src={localPreview || previewUrl || ""}
              alt="Selected preview"
              className={`w-full ${previewHeightClass} object-cover rounded-md border`}
            />
            {selectedFile && (
              <p className="mt-2 text-xs text-gray-600 truncate">{selectedFile.name}</p>
            )}
          </div>
        )}

        {uploading && (
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] rounded-lg flex items-center justify-center">
            <div className="h-8 w-8 border-2 border-gray-300 border-t-red-600 rounded-full animate-spin" />
          </div>
        )}
      </div>
    </div>
  )
}
