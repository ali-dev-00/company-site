"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

type FeatureSection = {
    title: string
    subtitle: string
}

export default function OurValuesSectionsContent01() {
    const [formData, setFormData] = useState<FeatureSection[]>([
        { title: "", subtitle: "" },
        { title: "", subtitle: "" },
        { title: "", subtitle: "" },
        { title: "", subtitle: "" },
    ])

    const handleInputChange = (index: number, field: keyof FeatureSection, value: string) => {
        setFormData((prev) => prev.map((section, i) => (i === index ? { ...section, [field]: value } : section)))
    }

    const handleSave = (index: number) => {
        console.log(`Saving section ${index + 1} data:`, formData[index])
        alert(`Section ${index + 1} data saved! (Check console for details)`)
    }

    return (
        <section className="px-6 py-2 space-y-6">

            {formData.map((section, index) => (
                <div key={index} className="border-gray-200 border mx-auto bg-white p-8 rounded-xl shadow-sm">
                    <div className="space-y-8">
                        <div key={index} className="space-y-6">
                            <h2 className="text-xl font-bold text-gray-900">Features</h2>

                            {/* Title Input */}
                            <div>
                                <Label htmlFor={`title-${index}`} className="text-base font-medium text-gray-800 mb-2 block">
                                    Title
                                </Label>
                                <Input
                                    id={`title-${index}`}
                                    value={section.title}
                                    onChange={(e) => handleInputChange(index, "title", e.target.value)}
                                    placeholder="Welcome"
                                    className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                                />
                            </div>

                            {/* Subtitle Textarea */}
                            <div>
                                <Label htmlFor={`subtitle-${index}`} className="text-base font-medium text-gray-800 mb-2 block">
                                    Subtitle
                                </Label>
                                <Textarea
                                    id={`subtitle-${index}`}
                                    value={section.subtitle}
                                    onChange={(e) => handleInputChange(index, "subtitle", e.target.value)}
                                    placeholder="Write here"
                                    className="w-full h-28 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
                                />
                            </div>

                            {/* Save Button - positioned to the right */}
                            <div className="flex justify-end">
                                <Button
                                    onClick={() => handleSave(index)}
                                    className="bg-red-600 hover:bg-red-600/90 text-white font-semibold px-6 py-2 rounded-md"
                                >
                                    Save
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            ))}

        </section>
    )
}
