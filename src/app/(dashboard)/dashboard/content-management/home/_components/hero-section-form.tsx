"use client"

import React, { useState, useRef, useCallback, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { CloudUpload, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import Toast from "@/components/ui/toast"
import { safeGetContent, uploadContentWithImage } from "@/services/content-management.service"

export default function HomeHeroContentForm() {
  const [isDragging, setIsDragging] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [showSuccessToast, setShowSuccessToast] = useState(false)
  const [showErrorToast, setShowErrorToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [contentExists, setContentExists] = useState(false)
  const [sectionId, setSectionId] = useState<string | null>(null)
  const [existingImageUrl, setExistingImageUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [isUpdating, setIsUpdating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
  })

  // Reference for the file input element
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  // Prefill using the stored section document (by id) if exists
  useEffect(() => {
    const prefillBySection = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const doc = await safeGetContent('home-content-section')
        console.log('Fetched content:', doc) // Debug log
        
        if (doc && doc._id && doc.sectionContent) {
          setSectionId(doc._id as string)
          try {
            const parsed = JSON.parse(doc.sectionContent as string)
            console.log('Parsed content:', parsed) // Debug log
            setFormData({
              title: parsed.title || "",
              subtitle: parsed.subtitle || "",
            })
            setExistingImageUrl(parsed.image || null)
            setContentExists(!!(parsed.title || parsed.subtitle || parsed.image))
          } catch (e) {
            console.error('JSON parse error:', e)
            // Keep empty form if parsing fails
            setFormData({ title: "", subtitle: "" })
            setExistingImageUrl(null)
            setContentExists(false)
          }
        } else {
          console.log('No existing content found')
          // No existing content - keep default empty form
          setFormData({ title: "", subtitle: "" })
          setExistingImageUrl(null)
          setContentExists(false)
        }
      } catch (err) {
        console.error('Error fetching content:', err)
        setError('Failed to load content')
        // Keep empty form on error
        setFormData({ title: "", subtitle: "" })
        setExistingImageUrl(null)
        setContentExists(false)
      } finally {
        setLoading(false)
      }
    }
    prefillBySection()
  }, [])

  // Show error toast when there's an error
  useEffect(() => {
    if (error) {
      setToastMessage(error)
      setShowErrorToast(true)
      setTimeout(() => setShowErrorToast(false), 3000)
    }
  }, [error])

  // Handle drag over and leave for the image upload area
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

  // Handle file change (when user selects a file)
  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }, [])

  // Handle form field changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  // Handle form save logic
  const handleSave = async () => {
    try {
      setIsUpdating(true)
      setError(null)

      // Prepare content data
      const contentData = {
        title: formData.title,
        subtitle: formData.subtitle,
      }

      const response = await uploadContentWithImage(
        'home-content-section',
        contentData,
        selectedFile || undefined
      )

      if (response.status && response.data) {
        setToastMessage((contentExists || sectionId) ? "Hero content updated successfully!" : "Hero content created successfully!")
        setShowSuccessToast(true)
        setSelectedFile(null) // Clear selected file after successful upload
        setContentExists(true) // Update the content exists flag
        
        // Refetch to capture and store _id and latest image
        try {
          const refreshed = await safeGetContent('home-content-section')
          if (refreshed && refreshed._id && refreshed.sectionContent) {
            setSectionId(refreshed._id as string)
            try {
              const parsed = JSON.parse(refreshed.sectionContent as string)
              setExistingImageUrl(parsed.image || null)
            } catch {}
          }
        } catch {}
        setTimeout(() => setShowSuccessToast(false), 3000)
      } else {
        setToastMessage("Failed to save hero content")
        setShowErrorToast(true)
        setTimeout(() => setShowErrorToast(false), 3000)
      }
    } catch (error) {
      console.error("Error saving hero content:", error)
      setToastMessage("An error occurred while saving")
      setShowErrorToast(true)
      setTimeout(() => setShowErrorToast(false), 3000)
    } finally {
      setIsUpdating(false)
    }
  }

  // Open file input when the user clicks on the upload area
  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <section className="px-6 py-2">
      {/* Toast Messages */}
      {showSuccessToast && <Toast message={toastMessage} type="success" />}
      {showErrorToast && <Toast message={toastMessage} type="error" />}

      <div className="border-gray-200 border mx-auto bg-white p-8 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Hero Section</h2>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="w-6 h-6 animate-spin text-red-600" />
            <span className="ml-2 text-gray-600">Loading content...</span>
          </div>
        )}

        {/* Form Content */}
        {!loading && (
          <div className="space-y-6">
            {/* Title Input */}
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
                disabled={isUpdating}
              />
            </div>

            {/* Subtitle Textarea */}
            <div>
              <Label htmlFor="subtitle" className="text-base font-medium text-gray-800 mb-2 block">
                Subtitle
              </Label>
              <Textarea
                id="subtitle"
                value={formData.subtitle}
                onChange={handleInputChange}
                placeholder="Write here"
                className="w-full h-28 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
                disabled={isUpdating}
              />
            </div>

            {/* Current Image Display */}
            {existingImageUrl && (
              <div>
                <Label className="text-base font-medium text-gray-800 mb-2 block">
                  Current Image
                </Label>
                <div className="mb-4 p-4 border border-gray-200 rounded-lg">
                  <img 
                    src={existingImageUrl} 
                    alt="Current hero image" 
                    className="max-w-full h-32 object-cover rounded"
                  />
                  <p className="text-sm text-gray-500 mt-2">Current hero image</p>
                </div>
              </div>
            )}

            {/* Upload Image */}
            <div>
              <Label htmlFor="upload-image" className="text-base font-medium text-gray-800 mb-2 block">
                Upload New Image
              </Label>
              <div
                className={`flex flex-col items-center justify-center p-8 border-2 ${
                  isDragging ? "border-red-600" : "border-gray-300"
                } border-dashed rounded-lg cursor-pointer transition-colors duration-200 ${
                  isUpdating ? "opacity-50 pointer-events-none" : ""
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={handleUploadClick}
              >
                <CloudUpload className="w-10 h-10 text-gray-400 mb-3" />
                <p className="text-gray-600 text-sm text-center">
                  <span className="text-red-600 font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-gray-500 text-xs text-center mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                <input
                  type="file"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".svg,.png,.jpg,.jpeg,.gif"
                  disabled={isUpdating}
                />
                {selectedFile && (
                  <p className="mt-2 text-sm text-gray-700">Selected file: {selectedFile.name}</p>
                )}
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end pt-4">
              <Button 
                onClick={handleSave} 
                className="bg-red-600 hover:bg-red-600/90 text-white font-semibold px-6 py-3 rounded-md"
                disabled={isUpdating}
              >
                {isUpdating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {(contentExists || sectionId) ? 'Updating...' : 'Saving...'}
                  </>
                ) : (
                  (contentExists || sectionId) ? 'Update' : 'Save'
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
