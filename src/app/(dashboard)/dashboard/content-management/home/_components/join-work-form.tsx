"use client"

import React, { useMemo, useRef, useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Toast from "@/components/ui/toast"
import { getSiteContent } from "@/services/site-content.service"
import { persistJoinWorkWithUsToServer } from "@/services/site-content.service"
import type { HomeJoinWorkWithUs } from "@/types/content"

export default function JoinWorkContentForm() {
  const initial = useMemo<HomeJoinWorkWithUs>(() => getSiteContent().HomeJoinWorkWithUs || {
    JoinUsTitle: "",
    JoinUsDescription: "",
    JoinUsButtonText: "",
    JoinUsButtonLink: "",
    WorkWithUsTitle: "",
    WorkWithUsDescription: "",
    WorkWithUsButtonText: "",
    WorkWithUsButtonLink: "",
  }, [])
  const baselineRef = useRef<HomeJoinWorkWithUs>({ ...initial })
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)
  const [toastKey, setToastKey] = useState(0)

  const [formData, setFormData] = useState<HomeJoinWorkWithUs>({
    JoinUsTitle: initial.JoinUsTitle || "",
    JoinUsDescription: initial.JoinUsDescription || "",
    JoinUsButtonText: initial.JoinUsButtonText || "",
    JoinUsButtonLink: initial.JoinUsButtonLink || "",
    WorkWithUsTitle: initial.WorkWithUsTitle || "",
    WorkWithUsDescription: initial.WorkWithUsDescription || "",
    WorkWithUsButtonText: initial.WorkWithUsButtonText || "",
    WorkWithUsButtonLink: initial.WorkWithUsButtonLink || "",
  })

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ type, message })
    setToastKey((k) => k + 1)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const isDirty = (Object.keys(formData) as Array<keyof HomeJoinWorkWithUs>).some(
    (k) => formData[k] !== baselineRef.current[k]
  )

  const handleSave = async () => {
    setSaving(true)
    try {
      const saved = await persistJoinWorkWithUsToServer(formData)
      if (saved) {
        baselineRef.current = { ...saved }
        setFormData({ ...saved })
        showToast("success", "Content updated successfully")
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
        <div className="space-y-8">
          {/* Join Us */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Join Us</h3>

            <div>
              <Label htmlFor="join-us-title" className="text-base font-medium text-gray-800 mb-2 block">
                Title
              </Label>
              <Input id="JoinUsTitle" value={formData.JoinUsTitle} onChange={onChange} placeholder="Welcome" className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600" />
            </div>

            <div>
              <Label htmlFor="join-us-subtitle" className="text-base font-medium text-gray-800 mb-2 block">
                Subtitle
              </Label>
              <Textarea id="JoinUsDescription" value={formData.JoinUsDescription} onChange={onChange} placeholder="Write here" className="w-full h-28 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="join-us-button-text" className="text-base font-medium text-gray-800 mb-2 block">
                  Button Text
                </Label>
                <Input id="JoinUsButtonText" value={formData.JoinUsButtonText} onChange={onChange} placeholder="Get Started" className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600" />
              </div>
              <div>
                <Label htmlFor="JoinUsButtonLink" className="text-base font-medium text-gray-800 mb-2 block">
                  Button Link
                </Label>
                <Input id="JoinUsButtonLink" value={formData.JoinUsButtonLink} onChange={onChange} placeholder="Link" className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600" />
              </div>
            </div>
          </div>

          {/* Work With Us */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Work With Us</h3>

            <div>
              <Label htmlFor="work-with-us-title" className="text-base font-medium text-gray-800 mb-2 block">
                Title
              </Label>
              <Input id="WorkWithUsTitle" value={formData.WorkWithUsTitle} onChange={onChange} placeholder="Welcome" className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600" />
            </div>

            <div>
              <Label htmlFor="work-with-us-subtitle" className="text-base font-medium text-gray-800 mb-2 block">
                Subtitle
              </Label>
              <Textarea id="WorkWithUsDescription" value={formData.WorkWithUsDescription} onChange={onChange} placeholder="Write here" className="w-full h-28 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="work-with-us-button-text" className="text-base font-medium text-gray-800 mb-2 block">
                  Button Text
                </Label>
                <Input id="WorkWithUsButtonText" value={formData.WorkWithUsButtonText} onChange={onChange} placeholder="Get Started" className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600" />
              </div>
              <div>
                <Label htmlFor="WorkWithUsButtonLink" className="text-base font-medium text-gray-800 mb-2 block">
                  Button Link
                </Label>
                <Input id="WorkWithUsButtonLink" value={formData.WorkWithUsButtonLink} onChange={onChange} placeholder="Link" className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600" />
              </div>
            </div>
          </div>

          {/* Save */}
          <div className="flex justify-end pt-4">
            <Button onClick={handleSave} disabled={saving || !isDirty} className="bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-600/90 text-white font-semibold px-6 py-3 rounded-md">
              {saving ? "Saving..." : "Save"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
