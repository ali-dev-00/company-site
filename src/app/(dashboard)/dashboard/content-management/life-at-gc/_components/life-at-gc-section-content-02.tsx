"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function LifeAtGCContentSection02() {
  const [formData, setFormData] = useState({
    link: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSave = () => {
    console.log("Saving Video form:", formData)
    alert("Form data saved! (Check console for details)")
  }

  return (
    <section className="px-6 py-2">
      <div className="border-gray-200 border mx-auto bg-white p-8 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Video</h2>

        <div className="space-y-6">
          <div>
            <Label htmlFor="link" className="text-base font-medium text-gray-800 mb-2 block">
              Link
            </Label>
            <Input
              id="link"
              type="url"
              value={formData.link}
              onChange={handleInputChange}
              placeholder="Link"
              className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
            />
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