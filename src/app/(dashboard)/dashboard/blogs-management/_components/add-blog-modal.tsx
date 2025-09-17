"use client";

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import RichTextEditor from "../../_components/text-editor-formik"
import { createBlog, getBlogById, updateBlog } from "@/services/blogs.service"
import type { Blog } from "@/types/blog-types"
import { BlogStatus } from "@/types/blog-types"
import { UploadCloud, Loader2 } from "lucide-react"
import Image from "next/image"

interface AddBlogModalProps {
  isOpen: boolean
  onClose: () => void
  blogId?: string | null
  onSaved?: () => void
}

export default function AddBlogModal({ isOpen, onClose, blogId, onSaved }: AddBlogModalProps) {
  const isEditing = !!blogId
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [slug, setSlug] = useState("")
  const [status, setStatus] = useState<BlogStatus | "">("")
  const [featuredImageFile, setFeaturedImageFile] = useState<File | undefined>(undefined)
  const [existingImage, setExistingImage] = useState<string | undefined>(undefined)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    const loadBlogIfEditing = async () => {
      if (!blogId) return
      const res = await getBlogById(blogId)
      if (res?.status && res.data) {
        const b = res.data as Blog
        setTitle(b.title || "")
        setDescription(b.description || "")
        setSlug(b.slug || "")
        setStatus(b.status || "")
        setExistingImage(b.featuredImage)
      }
    }
    if (isOpen) {
      setErrors({})
      if (blogId) {
        loadBlogIfEditing()
      } else {
        setTitle("")
        setDescription("")
        setSlug("")
        setStatus("")
        setFeaturedImageFile(undefined)
        setExistingImage(undefined)
      }
    } else {
      if (!blogId) {
        setTitle("")
        setDescription("")
        setSlug("")
        setStatus("")
        setFeaturedImageFile(undefined)
        setExistingImage(undefined)
      }
    }
  }, [isOpen, blogId])

  const handleSave = async () => {
    try {
      const newErrors: Record<string, string> = {}
      if (!title.trim()) newErrors.title = 'Title is required'
      if (!description || description.replace(/<[^>]*>/g, '').trim().length === 0) newErrors.description = 'Description is required'
      if (!status) newErrors.status = 'Status is required'
      if (!blogId && !featuredImageFile) newErrors.featuredImage = 'Featured image is required'
      if (Object.keys(newErrors).length) { setErrors(newErrors); return }

      setIsSaving(true)
      const payload = {
        title,
        description,
        slug: slug || undefined,
        status: status as BlogStatus,
        featuredImageFile,
      }
      const res = blogId
        ? await updateBlog(blogId, payload)
        : await createBlog(payload as any)
      if (!res.status) {
        const e: Record<string, string> = {}
        if (res.message?.toLowerCase().includes('title')) e.title = res.message
        else if (res.message?.toLowerCase().includes('image')) e.featuredImage = res.message
        else e.form = res.message || 'Failed to save blog'
        setErrors(e)
        return
      }
      onSaved?.()
      onClose()
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-[900px] md:max-w-[1000px] max-h-[85vh] p-0 rounded-lg overflow-hidden bg-white overflow-y-auto">
        <DialogHeader className="p-3 px-6 border-b border-gray-200 flex flex-row items-center justify-between">
          <DialogTitle className="text-xl font-bold">{isEditing ? 'Edit Blog' : 'Add Blog'}</DialogTitle>
        </DialogHeader>
        <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {errors.form && (<div className="md:col-span-2 text-sm text-red-600">{errors.form}</div>)}

          <div className="space-y-2 md:col-span-2">
            <label htmlFor="blog-title" className="text-sm font-semibold text-gray-700">Title</label>
            <Input id="blog-title" placeholder="Title" value={title} onChange={(e) => { setTitle(e.target.value); if (errors.title) setErrors({ ...errors, title: '' }) }} className="border-gray-300 focus:ring-[#FF2424]" />
            {errors.title && <p className="text-xs text-red-600">{errors.title}</p>}
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-gray-700">Description</label>
            <RichTextEditor name="description" value={description} onChange={setDescription} onBlur={() => {}} />
            {errors.description && <p className="text-xs text-red-600">{errors.description}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="slug" className="text-sm font-semibold text-gray-700">Slug (optional)</label>
            <Input id="slug" placeholder="my-blog-post" value={slug} onChange={(e) => setSlug(e.target.value)} className="border-gray-300 focus:ring-[#FF2424]" />
          </div>

          <div className="space-y-2">
            <label htmlFor="status" className="text-sm font-semibold text-gray-700">Status</label>
            <Select value={status} onValueChange={(v) => { setStatus(v as BlogStatus); if (errors.status) setErrors({ ...errors, status: '' }) }}>
              <SelectTrigger className="w-full border-gray-300 focus:ring-[#FF2424]"><SelectValue placeholder="Select" /></SelectTrigger>
              <SelectContent>
                <SelectItem value={BlogStatus.DRAFT}>Draft</SelectItem>
                <SelectItem value={BlogStatus.PUBLISHED}>Published</SelectItem>
              </SelectContent>
            </Select>
            {errors.status && <p className="text-xs text-red-600">{errors.status}</p>}
          </div>

          <div className="space-y-2 md:col-span-2">
            <label htmlFor="upload-featured" className="text-sm font-semibold text-gray-700">Featured Image</label>
            <div className="relative flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-md text-center select-none">
              {featuredImageFile || existingImage ? (
                <div className="relative w-full h-40 mb-2">
                  <Image
                    src={featuredImageFile ? URL.createObjectURL(featuredImageFile) : (existingImage || "")}
                    alt="Featured preview"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                    unoptimized
                  />
                </div>
              ) : (
                <UploadCloud className="h-8 w-8 text-gray-500 mb-2 pointer-events-none" />
              )}
              <p className="text-gray-600 pointer-events-none">
                {featuredImageFile ? featuredImageFile.name : existingImage ? 'Current image' : "Click to upload or drag & drop"}
              </p>
              <input
                id="upload-featured"
                type="file"
                accept="image/*"
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                onChange={(e) => { setFeaturedImageFile(e.target.files?.[0]); if (errors.featuredImage) setErrors({ ...errors, featuredImage: '' }) }}
              />
            </div>
            {errors.featuredImage && <p className="text-xs text-red-600">{errors.featuredImage}</p>}
          </div>
        </div>
        <div className="p-4 md:p-6 pt-4 border-t border-gray-200 flex justify-end">
          <Button className="bg-[#FF2424] hover:bg-[#FF2424]/90 text-white" onClick={handleSave} disabled={isSaving}>
            {isSaving ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" /> {isEditing ? 'Updating...' : 'Saving...'}</>) : (isEditing ? 'Update Blog' : 'Save Blog')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
