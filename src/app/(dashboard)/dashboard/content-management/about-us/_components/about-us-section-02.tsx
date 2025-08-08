"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function AboutUsSection02() {
  const sections = [
    {
      id: "feature",
      title: "Feature",
      iconOptions: ["Flag", "Star", "Heart", "Bell"],
      defaultIcon: "Flag",
    },
    {
      id: "join-us-1",
      title: "Join Us",
      iconOptions: ["Star", "Flag", "Heart", "Bell"],
      defaultIcon: "Star",
    },
    {
      id: "join-us-2", 
      title: "Joi Us",
      iconOptions: ["Tick", "Flag", "Star", "Heart", "Bell"],
      defaultIcon: "Tick",
    },
  ]

  // State for form data
  const [formData, setFormData] = useState(
    sections.reduce((acc, section) => {
      acc[section.id] = {
        icon: section.defaultIcon,
        title: "",
        subtitle: "",
      }
      return acc
    }, {} as Record<string, { icon: string; title: string; subtitle: string }>)
  )

  const handleInputChange = (sectionId: string, field: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [sectionId]: {
        ...prevState[sectionId],
        [field]: value,
      },
    }))
  }

  const handleSave = () => {
    console.log("Saving form data:", formData)
    alert("Form data saved! (Check console for details)")
  }

  return (
    <section className="px-6 py-2">
      <div className="mx-auto bg-white border-gray-200 border rounded-xl p-8 shadow-sm">
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          {sections.map((section) => (
            <div key={section.id} className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Icon Select (using React state) */}
                <div>
                  <Label
                    htmlFor={`${section.id}-icon`}
                    className="text-base font-medium text-gray-800 mb-2 block"
                  >
                    Icon
                  </Label>
                  <select
                    id={`${section.id}-icon`}
                    value={formData[section.id]?.icon}
                    onChange={(e) =>
                      handleInputChange(section.id, "icon", e.target.value)
                    }
                    className="w-full h-12 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
                  >
                    {section.iconOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Title Input */}
                <div>
                  <Label
                    htmlFor={`${section.id}-title`}
                    className="text-base font-medium text-gray-800 mb-2 block"
                  >
                    Title
                  </Label>
                  <Input
                    id={`${section.id}-title`}
                    placeholder="Welcome"
                    value={formData[section.id]?.title || ""}
                    onChange={(e) =>
                      handleInputChange(section.id, "title", e.target.value)
                    }
                    className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                  />
                </div>
              </div>

              {/* Subtitle Textarea */}
              <div>
                <Label
                  htmlFor={`${section.id}-subtitle`}
                  className="text-base font-medium text-gray-800 mb-2 block"
                >
                  Subtitle
                </Label>
                <Textarea
                  id={`${section.id}-subtitle`}
                  placeholder="Write here"
                  value={formData[section.id]?.subtitle || ""}
                  onChange={(e) =>
                    handleInputChange(section.id, "subtitle", e.target.value)
                  }
                  className="w-full h-28 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
                />
              </div>
            </div>
          ))}

          {/* Save Button */}
          <div className="flex justify-end pt-4">
            <Button
              type="button"
              onClick={handleSave}
              className="bg-red-600 hover:bg-red-600/90 text-white font-semibold px-6 py-3 rounded-md"
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
