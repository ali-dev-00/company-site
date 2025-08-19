"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

const SUBTITLE_COUNT = 10

export default function GCBussinessSurveySectionContent02() {
  const [title, setTitle] = useState("")
  const [subtitles, setSubtitles] = useState<string[]>(
    Array.from({ length: SUBTITLE_COUNT }, () => "")
  )

  const handleSubtitleChange = (index: number, value: string) => {
    setSubtitles(prev => prev.map((s, i) => (i === index ? value : s)))
  }

  const handleSave = () => {
    console.log("Saving Business Survey Feature:", { title, subtitles })
    alert("Form data saved! (Check console for details)")
  }

  return (
    <section className="px-6 py-2">
      <div className="border-gray-200 border mx-auto bg-white p-8 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Feature</h2>

        <div className="space-y-6">
          <div>
            <Label htmlFor="title" className="text-base font-medium text-gray-800 mb-2 block">
              Title
            </Label>
            <Input
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Welcome"
              className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
            />
          </div>

          {subtitles.map((value, i) => (
            <div key={i}>
              <Label
                htmlFor={`subtitle-${i}`}
                className="text-base font-medium text-gray-800 mb-2 block"
              >
                Subtitle
              </Label>
              <Textarea
                id={`subtitle-${i}`}
                value={value}
                onChange={e => handleSubtitleChange(i, e.target.value)}
                placeholder="Write here"
                className="w-full min-h-[120px] resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
              />
            </div>
          ))}

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