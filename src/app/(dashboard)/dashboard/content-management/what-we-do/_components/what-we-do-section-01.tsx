"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

type FeatureItem = {
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
  image: File | null
}

export default function WhatWeDoSection01() {
  // State to store form data for multiple features
  const [formData, setFormData] = useState<FeatureItem[]>([
    {
      title: "",
      subtitle: "",
      buttonText: "",
      buttonLink: "",
      image: null,
    },
    {
      title: "",
      subtitle: "",
      buttonText: "",
      buttonLink: "",
      image: null,
    },
    {
      title: "",
      subtitle: "",
      buttonText: "",
      buttonLink: "",
      image: null,
    },
    {
      title: "",
      subtitle: "",
      buttonText: "",
      buttonLink: "",
      image: null,
    },
  ])

  // Handle input change for all fields
  const handleInputChange = <K extends keyof Omit<FeatureItem, "image">>(
    index: number,
    field: K,
    value: FeatureItem[K]
  ) => {
    setFormData((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    )
  }

  // Handle image upload
  const handleImageUpload = (index: number, file: File | null) => {
    setFormData((prev) =>
      prev.map((item, i) => (i === index ? { ...item, image: file } : item))
    )
  }

  // Handle form save
  const handleSave = () => {
    console.log("Saving form data:", formData)
    alert("Form data saved! (Check console for details)")
  }

  return (
    <section className="p-6">
      <div className="mx-auto bg-white p-8 border border-gray-200 rounded-xl shadow-md">
        <form className="space-y-8">
          {/* Title and Subtitle */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Title</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="title" className="text-base font-medium text-gray-800 mb-2 block">
                  Title
                </Label>
                <Input
                  id="title"
                  placeholder="Welcome"
                  value={formData[0].title}
                  onChange={(e) => handleInputChange(0, "title", e.target.value)}
                  className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                />
              </div>
              <div>
                <Label htmlFor="subtitle" className="text-base font-medium text-gray-800 mb-2 block">
                  Subtitle
                </Label>
                <Textarea
                  id="subtitle"
                  placeholder="Write here"
                  value={formData[0].subtitle}
                  onChange={(e) => handleInputChange(0, "subtitle", e.target.value)}
                  className="w-full h-28 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
                />
              </div>
            </div>
          </div>

          {/* Features Sections */}
          {formData.map((feature, index) => (
            <div key={index}>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Feature {index + 1}</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor={`feature-title-${index}`} className="text-base font-medium text-gray-800 mb-2 block">
                    Title
                  </Label>
                  <Input
                    id={`feature-title-${index}`}
                    placeholder="Feature Title"
                    value={feature.title}
                    onChange={(e) => handleInputChange(index, "title", e.target.value)}
                    className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                  />
                </div>
                <div className="flex flex-col md:flex-row w-full flex-1 gap-2">
                <div className=" md:w-1/2 w-full">
                  <Label htmlFor={`feature-subtitle-${index}`} className="text-base font-medium text-gray-800 mb-2 block">
                    Subtitle
                  </Label>
                  <Textarea
                    id={`feature-subtitle-${index}`}
                    placeholder="Write here"
                    value={feature.subtitle}
                    onChange={(e) => handleInputChange(index, "subtitle", e.target.value)}
                    className="w-full h-28 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
                  />
                </div>

                {/* Image Upload */}
                <div className=" md:w-1/2 w-full">
                  <Label htmlFor={`feature-image-${index}`} className="text-base font-medium text-gray-800 mb-2 block">
                    Upload Image
                  </Label>
                  <div className="flex flex-col items-center justify-center p-8 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer">
                    <input
                      id={`feature-image-${index}`}
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(index, e.target.files?.[0] || null)}
                    />
                    <p className="text-gray-600 text-sm text-center">
                      <span className="text-red-600 font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-gray-500 text-xs text-center mt-1">
                      SVG, PNG, JPG or GIF (max. 800x400px)
                    </p>
                  </div>
                  {feature.image && (
                    <p className="mt-2 text-sm text-gray-700">Selected file: {feature.image.name}</p>
                  )}
                </div>


                </div>
               
                {/* Button Text & Button Link */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor={`button-text-${index}`} className="text-base font-medium text-gray-800 mb-2 block">
                      Button Text
                    </Label>
                    <Input
                      id={`button-text-${index}`}
                      placeholder="Button Text"
                      value={feature.buttonText}
                      onChange={(e) => handleInputChange(index, "buttonText", e.target.value)}
                      className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`button-link-${index}`} className="text-base font-medium text-gray-800 mb-2 block">
                      Button Link
                    </Label>
                    <Input
                      id={`button-link-${index}`}
                      placeholder="Button Link"
                      value={feature.buttonLink}
                      onChange={(e) => handleInputChange(index, "buttonLink", e.target.value)}
                      className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                    />
                  </div>
                </div>
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
