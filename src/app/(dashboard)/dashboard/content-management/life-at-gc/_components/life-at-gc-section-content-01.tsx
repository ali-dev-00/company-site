
"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

type FaqItem = {
  id: number
  question: string
  answer: string
}

type FaqField = "question" | "answer"

export default function LifeAtGCContentSection01() {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
  })

  const [faqs, setFaqs] = useState<FaqItem[]>(
    Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      question: "",
      answer: "",
    }))
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleFaqInputChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const key = e.target.id as FaqField
    const value = e.target.value
    setFaqs(prev => prev.map((f, i) => (i === index ? { ...f, [key]: value } : f)))
  }

  const handleSave = () => {
    console.log("Saving LifeAtGC Content:", { formData, faqs })
    alert("Form data saved! (Check console for details)")
  }

  return (
    <section className="px-6 py-2">
      <div className="border-gray-200 border mx-auto bg-white p-8 rounded-xl shadow-sm">
        <div className="space-y-6">
          <div>
            <Label htmlFor="title" className="text-base font-medium text-gray-800 mb-2 block">
              Title
            </Label>
            <Input
              id="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Welcome"
              className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
            />
          </div>

          <div>
            <Label htmlFor="subtitle" className="text-base font-medium text-gray-800 mb-2 block">
              Subtitle
            </Label>
            <Textarea
              id="subtitle"
              value={formData.subtitle}
              onChange={handleInputChange}
              placeholder="Write here"
              className="w-full min-h-[120px] resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
            />
          </div>

          <div className="space-y-5 pt-2">
            {faqs.map((item, index) => (
              <div key={item.id} className="space-y-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="question" className="text-base font-medium text-gray-800 mb-2 block">
                      {item.id}- Question
                    </Label>
                    <Input
                      id="question"
                      value={item.question}
                      onChange={e => handleFaqInputChange(index, e)}
                      placeholder="Question"
                      className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                    />
                  </div>
                  <div>
                    <Label htmlFor="answer" className="text-base font-medium text-gray-800 mb-2 block">
                      Answer
                    </Label>
                    <Input
                      id="answer"
                      value={item.answer}
                      onChange={e => handleFaqInputChange(index, e)}
                      placeholder="Answer"
                      className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                    />
                  </div>
                </div>
              </div>
            ))}
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