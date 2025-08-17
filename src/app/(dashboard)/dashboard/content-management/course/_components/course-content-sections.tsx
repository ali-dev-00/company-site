"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import IconSelect from "../../../_components/IconSelect"

interface Feature {
  icon: string
  title: string
  subtitle: string
}

interface FormData {
  [key: string]: Feature
}

export default function CourseContentsSection() {
  const [formData, setFormData] = useState<FormData>({
    feature1: {
      icon: "Flag",
      title: "",
      subtitle: "",
    },
    feature2: {
      icon: "Flag",
      title: "",
      subtitle: "",
    },
    feature3: {
      icon: "Flag",
      title: "",
      subtitle: "",
    },
    feature4: {
      icon: "Flag",
      title: "",
      subtitle: "",
    },
  })

  // Handle input change for the form
  const handleInputChange = (field: string, value: string, featureKey: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [featureKey]: {
        ...prevState[featureKey],
        [field]: value,
      },
    }))
  }

  // Handle saving the form data
  const handleSave = () => {
    console.log("Saving form data:", formData)
    alert("Form data saved! (Check console for details)")
  }

  return (
    <section className="px-6 py-2">
      <div className="border-gray-200 border mx-auto bg-white p-8 rounded-xl shadow-sm">
        <div className="space-y-6">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            

              {/* Title Input */}
              <div>
                <Label htmlFor={`feature-title-${index}`} className="text-base font-medium text-gray-800 mb-2 block">
                  Title
                </Label>
                <Input
                  id={`feature-title-${index}`}
                  placeholder="Welcome"
                  value={formData[`feature${index}`].title}
                  onChange={(e) =>
                    handleInputChange("title", e.target.value, `feature${index}`)
                  }
                  className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                />
              </div>
                {/* Icon Select */}
                <IconSelect
                id={`feature-icon-${index}`}
                value={formData[`feature${index}`].icon}
                onChange={(value :string) => handleInputChange("icon", value, `feature${index}`)}
                options={["Flag", "Star", "Heart", "Bell"]} // Example icon options
              />

              </div>

              {/* Subtitle Textarea */}
              <div>
                <Label htmlFor={`feature-subtitle-${index}`} className="text-base font-medium text-gray-800 mb-2 block">
                  Subtitle
                </Label>
                <Textarea
                  id={`feature-subtitle-${index}`}
                  placeholder="Write here"
                  value={formData[`feature${index}`].subtitle}
                  onChange={(e) =>
                    handleInputChange("subtitle", e.target.value, `feature${index}`)
                  }
                  className="w-full h-28 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
                />
              </div>
            </div>
          ))}

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
