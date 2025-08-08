"use client"

import React from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function JoinWorkContentForm() {
  const handleSave = () => {
    const formData = {
      joinUs: {
        title: (document.getElementById("join-us-title") as HTMLInputElement)?.value,
        subtitle: (document.getElementById("join-us-subtitle") as HTMLTextAreaElement)?.value,
        buttonText: (document.getElementById("join-us-button-text") as HTMLInputElement)?.value,
        buttonLink: (document.getElementById("join-us-button-link") as HTMLInputElement)?.value,
      },
      workWithUs: {
        title: (document.getElementById("work-with-us-title") as HTMLInputElement)?.value,
        subtitle: (document.getElementById("work-with-us-subtitle") as HTMLTextAreaElement)?.value,
        buttonText: (document.getElementById("work-with-us-button-text") as HTMLInputElement)?.value,
        buttonLink: (document.getElementById("work-with-us-button-link") as HTMLInputElement)?.value,
      },
    }
    console.log("Saving form data:", formData)
    alert("Form data saved! (Check console for details)")
  }

  return (
    <section className="px-6 py-2">
      <div className="border-gray-200 border mx-auto bg-white p-8 rounded-xl shadow-sm">
        <div className="space-y-8">
          {/* Join Us */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Join Us</h3>

            <div>
              <Label htmlFor="join-us-title" className="text-base font-medium text-gray-800 mb-2 block">
                Title
              </Label>
              <Input
                id="join-us-title"
                placeholder="Welcome"
                className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
              />
            </div>

            <div>
              <Label htmlFor="join-us-subtitle" className="text-base font-medium text-gray-800 mb-2 block">
                Subtitle
              </Label>
              <Textarea
                id="join-us-subtitle"
                placeholder="Write here"
                className="w-full h-28 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="join-us-button-text" className="text-base font-medium text-gray-800 mb-2 block">
                  Button Text
                </Label>
                <Input
                  id="join-us-button-text"
                  placeholder="Get Started"
                  className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                />
              </div>
              <div>
                <Label htmlFor="join-us-button-link" className="text-base font-medium text-gray-800 mb-2 block">
                  Button Link
                </Label>
                <Input
                  id="join-us-button-link"
                  placeholder="Link"
                  className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                />
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
              <Input
                id="work-with-us-title"
                placeholder="Welcome"
                className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
              />
            </div>

            <div>
              <Label htmlFor="work-with-us-subtitle" className="text-base font-medium text-gray-800 mb-2 block">
                Subtitle
              </Label>
              <Textarea
                id="work-with-us-subtitle"
                placeholder="Write here"
                className="w-full h-28 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="work-with-us-button-text" className="text-base font-medium text-gray-800 mb-2 block">
                  Button Text
                </Label>
                <Input
                  id="work-with-us-button-text"
                  placeholder="Get Started"
                  className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                />
              </div>
              <div>
                <Label htmlFor="work-with-us-button-link" className="text-base font-medium text-gray-800 mb-2 block">
                  Button Link
                </Label>
                <Input
                  id="work-with-us-button-link"
                  placeholder="Link"
                  className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                />
              </div>
            </div>
          </div>

          {/* Save */}
          <div className="flex justify-end pt-4">
            <Button
              onClick={handleSave}
              className="bg-red-600 hover:bg-red-600/90 text-white font-semibold px-6 py-3 rounded-md"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
