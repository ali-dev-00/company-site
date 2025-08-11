"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface Feature {
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
}

interface FormData {
  [key: string]: Feature
}

export default function ContactUsSectionsContent() {
  const [formData, setFormData] = useState<FormData>({
    feature1: {
      title: "",
      subtitle: "",
      buttonText: "Get Started",
      buttonLink: "Link",
    },
    feature2: {
      title: "",
      subtitle: "",
      buttonText: "Get Started",
      buttonLink: "Link",
    }
  })

  const handleInputChange = (field: string, value: string, featureKey: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [featureKey]: {
        ...prevState[featureKey],
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
      <div className="border-gray-200 border mx-auto bg-white p-8 rounded-xl shadow-sm">
        <div className="space-y-6">
          {[1, 2].map((index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">Features</h3>
              
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

              {/* Button Text and Link */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor={`feature-button-text-${index}`} className="text-base font-medium text-gray-800 mb-2 block">
                    Button Text
                  </Label>
                  <Input
                    id={`feature-button-text-${index}`}
                    placeholder="Get Started"
                    value={formData[`feature${index}`].buttonText}
                    onChange={(e) =>
                      handleInputChange("buttonText", e.target.value, `feature${index}`)
                    }
                    className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                  />
                </div>

                <div>
                  <Label htmlFor={`feature-button-link-${index}`} className="text-base font-medium text-gray-800 mb-2 block">
                    Button Link
                  </Label>
                  <Input
                    id={`feature-button-link-${index}`}
                    placeholder="Link"
                    value={formData[`feature${index}`].buttonLink}
                    onChange={(e) =>
                      handleInputChange("buttonLink", e.target.value, `feature${index}`)
                    }
                    className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                  />
                </div>
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
