"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

type FeatureSection = {
  title: string
  subtitle: string
}

type ActionSection = {
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
}

type AboutFormData = {
  feature: FeatureSection
  joinUs: ActionSection
  workWithUs: ActionSection
}

export default function AboutUsSection03() {
  // State to store form data
  const [formData, setFormData] = useState<AboutFormData>({
    feature: {
      title: "",
      subtitle: "",
    },
    joinUs: {
      title: "",
      subtitle: "",
      buttonText: "",
      buttonLink: "",
    },
    workWithUs: {
      title: "",
      subtitle: "",
      buttonText: "",
      buttonLink: "",
    },
  })

  // Handle input change for all fields
  const handleInputChange = <S extends keyof AboutFormData, F extends keyof AboutFormData[S]>(
    section: S,
    field: F,
    value: AboutFormData[S][F]
  ) => {
    setFormData((prevData) => {
      const updatedSection = {
        ...prevData[section],
        [field]: value,
      } as AboutFormData[S]

      return {
        ...prevData,
        [section]: updatedSection,
      }
    })
  }

  // Handle form save
  const handleSave = () => {
    console.log("Saving form data:", formData)
    alert("Form data saved! (Check console for details)")
  }

  return (
     <section className="px-6 py-2">
      <div className="mx-auto bg-white border-gray-200 border rounded-xl p-8 shadow-sm">
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          {/* Feature Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Feature</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="feature-title" className="sr-only">
                  Title
                </Label>
                <Input
                  id="feature-title"
                  placeholder="Welcome"
                  value={formData.feature.title}
                  onChange={(e) => handleInputChange("feature", "title", e.target.value)}
                  className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                />
              </div>
              <div>
                <Label htmlFor="feature-subtitle" className="sr-only">
                  Subtitle
                </Label>
                <Textarea
                  id="feature-subtitle"
                  placeholder="Write here"
                  value={formData.feature.subtitle}
                  onChange={(e) => handleInputChange("feature", "subtitle", e.target.value)}
                  className="w-full h-28 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
                />
              </div>
            </div>
          </div>

          {/* Join Us Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Join Us</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="join-us-title" className="sr-only">
                  Title
                </Label>
                <Input
                  id="join-us-title"
                  placeholder="Welcome"
                  value={formData.joinUs.title}
                  onChange={(e) => handleInputChange("joinUs", "title", e.target.value)}
                  className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                />
              </div>
              <div>
                <Label htmlFor="join-us-subtitle" className="sr-only">
                  Subtitle
                </Label>
                <Textarea
                  id="join-us-subtitle"
                  placeholder="Write here"
                  value={formData.joinUs.subtitle}
                  onChange={(e) => handleInputChange("joinUs", "subtitle", e.target.value)}
                  className="w-full h-28 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="join-us-button-text" className="sr-only">
                    Button Text
                  </Label>
                  <Input
                    id="join-us-button-text"
                    placeholder="Get Started"
                    value={formData.joinUs.buttonText}
                    onChange={(e) => handleInputChange("joinUs", "buttonText", e.target.value)}
                    className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                  />
                </div>
                <div>
                  <Label htmlFor="join-us-button-link" className="sr-only">
                    Button Link
                  </Label>
                  <Input
                    id="join-us-button-link"
                    placeholder="Link"
                    value={formData.joinUs.buttonLink}
                    onChange={(e) => handleInputChange("joinUs", "buttonLink", e.target.value)}
                    className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Work With Us Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Work With Us</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="work-with-us-title" className="sr-only">
                  Title
                </Label>
                <Input
                  id="work-with-us-title"
                  placeholder="Welcome"
                  value={formData.workWithUs.title}
                  onChange={(e) => handleInputChange("workWithUs", "title", e.target.value)}
                  className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                />
              </div>
              <div>
                <Label htmlFor="work-with-us-subtitle" className="sr-only">
                  Subtitle
                </Label>
                <Textarea
                  id="work-with-us-subtitle"
                  placeholder="Write here"
                  value={formData.workWithUs.subtitle}
                  onChange={(e) => handleInputChange("workWithUs", "subtitle", e.target.value)}
                  className="w-full h-28 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="work-with-us-button-text" className="sr-only">
                    Button Text
                  </Label>
                  <Input
                    id="work-with-us-button-text"
                    placeholder="Get Started"
                    value={formData.workWithUs.buttonText}
                    onChange={(e) => handleInputChange("workWithUs", "buttonText", e.target.value)}
                    className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                  />
                </div>
                <div>
                  <Label htmlFor="work-with-us-button-link" className="sr-only">
                    Button Link
                  </Label>
                  <Input
                    id="work-with-us-button-link"
                    placeholder="Link"
                    value={formData.workWithUs.buttonLink}
                    onChange={(e) => handleInputChange("workWithUs", "buttonLink", e.target.value)}
                    className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end pt-4">
            <Button
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
