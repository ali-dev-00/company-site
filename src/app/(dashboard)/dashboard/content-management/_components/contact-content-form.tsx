"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import FileUpload from "./FIleUpload"
import Toast from "@/components/ui/toast"
import { getSiteContent, uploadHeroImage, persistContactUsBannerToServer, saveContactUsBanner } from "@/services/site-content.service"
import type { HomeContactUsBanner } from "@/types/content"

export default function ContactUsContentForm() {
  const initial = useMemo<HomeContactUsBanner>(() => getSiteContent().HomeContactUsBanner || {
    title: "Contact us",
    description: "Feel free to reach out if you'd like more details about any of our services.",
    buttonText: "Contact Us",
    buttonLink: "/contact-us",
    backgroundImage: "/home/latest-news-bg.png",
    rightImage: "/images/mask-group.svg",
  }, [])
  const [formData, setFormData] = useState<HomeContactUsBanner>({
    title: initial.title || "Contact us",
    description: initial.description || "Feel free to reach out if you'd like more details about any of our services.",
    buttonText: initial.buttonText || "Contact Us",
    buttonLink: initial.buttonLink || "/contact-us",
    backgroundImage: initial.backgroundImage || "/home/latest-news-bg.png",
    rightImage: initial.rightImage || "/images/mask-group.svg",
  })
  const baselineRef = useRef<HomeContactUsBanner>({ ...initial })
  const [saving, setSaving] = useState(false)
  const [uploadingRight, setUploadingRight] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)
  const [toastKey, setToastKey] = useState(0)

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ type, message })
    setToastKey((k) => k + 1)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleRightSelect = async (file: File | null) => {
    if (!file) return
    setUploadingRight(true)
    try {
      const url = await uploadHeroImage(file)
      setFormData((p) => ({ ...p, rightImage: url }))
      showToast("success", "Right image uploaded")
    } catch {
      showToast("error", "Failed to upload right image")
    } finally {
      setUploadingRight(false)
    }
  }

  const isDirty = (Object.keys(formData) as Array<keyof HomeContactUsBanner>).some((k) => formData[k] !== baselineRef.current[k])

  useEffect(() => {
    let active = true
    const load = async () => {
      try {
        const res = await fetch('/content.json', { cache: 'no-store' })
        if (!res.ok) return
        const json = await res.json()
        const data = json?.HomeContactUsBanner
        if (active && data) {
          const next = {
            title: data.title ?? formData.title,
            description: data.description ?? formData.description,
            buttonText: data.buttonText ?? formData.buttonText,
            buttonLink: data.buttonLink ?? formData.buttonLink,
            backgroundImage: data.backgroundImage ?? formData.backgroundImage,
            rightImage: data.rightImage ?? formData.rightImage,
          }
          baselineRef.current = { ...next }
          setFormData(next)
        }
      } catch {}
    }
    load()
    return () => { active = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSave = async () => {
    setSaving(true)
    try {
      const saved = await persistContactUsBannerToServer(formData)
      if (saved) {
        saveContactUsBanner(saved)
        baselineRef.current = { ...saved }
        setFormData({ ...saved })
        showToast("success", "Contact banner updated")
      } else {
        showToast("error", "Failed to save content")
      }
    } finally {
      setSaving(false)
    }
  }

  return (
    <section className="px-6 py-2">
      {toast && <Toast key={toastKey} message={toast.message} type={toast.type} />}
      <div className="border-gray-200 border mx-auto bg-white p-8 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>

        <div className="space-y-6 ">
          <div>
            <Label htmlFor="title" className="text-base font-medium text-gray-800 mb-2 block">Title</Label>
            <Input id="title" value={formData.title} onChange={onChange} placeholder="Contact us" className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600" />
          </div>

          <div>
            <Label htmlFor="description" className="text-base font-medium text-gray-800 mb-2 block">Subtitle</Label>
            <Textarea id="description" value={formData.description} onChange={onChange} placeholder="Write here" className="w-full h-28 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600" />
          </div>

          <div>
            <Label htmlFor="buttonText" className="text-base font-medium text-gray-800 mb-2 block">Button Text</Label>
            <Input id="buttonText" value={formData.buttonText} onChange={onChange} placeholder="Contact Us" className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600" />
          </div>

          <div>
            <Label htmlFor="buttonLink" className="text-base font-medium text-gray-800 mb-2 block">Button Link</Label>
            <Input id="buttonLink" value={formData.buttonLink} onChange={onChange} placeholder="/contact-us" className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600" />
          </div>

          <div className="grid grid-cols-1 gap-6">
            <FileUpload label="Upload Right Image" onFileSelect={handleRightSelect} previewUrl={formData.rightImage} uploading={uploadingRight} fullWidthPreview previewHeightClass="h-64" />
          </div>

          <div className="flex justify-end pt-4">
            <Button onClick={handleSave} disabled={saving || uploadingRight || !isDirty} className="bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-600/90 text-white font-semibold px-6 py-3 rounded-md">
              {saving ? "Saving..." : "Save"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
