"use client"

import type React from "react"
import { useState, useRef, useCallback } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { CloudUpload } from "lucide-react"

type FeatureSection = {
    title: string
    subtitle: string
    categories: string
    tags: string
    image: File | null
}

export default function CareerStoriesSectionsContent() {
    const [dragStates, setDragStates] = useState<boolean[]>([false, false, false])
    const [formData, setFormData] = useState<FeatureSection[]>([
        { title: "", subtitle: "", categories: "", tags: "", image: null },
        { title: "", subtitle: "", categories: "", tags: "", image: null },
        { title: "", subtitle: "", categories: "", tags: "", image: null },
        { title: "", subtitle: "", categories: "", tags: "", image: null },
        { title: "", subtitle: "", categories: "", tags: "", image: null },
    ])

    const fileInputRefs = useRef<(HTMLInputElement | null)[]>([null, null, null])

    const handleDragOver = useCallback((e: React.DragEvent, index: number) => {
        e.preventDefault()
        e.stopPropagation()
        setDragStates((prev) => prev.map((state, i) => (i === index ? true : state)))
    }, [])

    const handleDragLeave = useCallback((e: React.DragEvent, index: number) => {
        e.preventDefault()
        e.stopPropagation()
        setDragStates((prev) => prev.map((state, i) => (i === index ? false : state)))
    }, [])

    const handleDrop = useCallback((e: React.DragEvent, index: number) => {
        e.preventDefault()
        e.stopPropagation()
        setDragStates((prev) => prev.map((state, i) => (i === index ? false : state)))
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileChange(index, e.dataTransfer.files[0])
        }
    }, [])

    const handleFileChange = (index: number, file: File) => {
        setFormData((prev) => prev.map((section, i) => (i === index ? { ...section, image: file } : section)))
    }

    const handleInputChange = (index: number, field: keyof Omit<FeatureSection, "image">, value: string) => {
        setFormData((prev) => prev.map((section, i) => (i === index ? { ...section, [field]: value } : section)))
    }

    const handleSectionSave = (index: number) => {
        console.log(`Saving section ${index + 1} data:`, formData[index])
        alert(`Section ${index + 1} data saved! (Check console for details)`)
    }

    const handleGlobalSave = () => {
        console.log("Saving all form data:", formData)
        alert("All form data saved! (Check console for details)")
    }

    const handleUploadClick = (index: number) => {
        fileInputRefs.current[index]?.click()
    }

    return (
        <section className="px-6 py-2">
            <div className="border-gray-200 border mx-auto bg-white p-8 rounded-xl shadow-sm">
                <div className="space-y-8">
                    {formData.map((section, index) => (
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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                        className="w-full h-40 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
                                    />
                                </div>

                                {/* Upload Image */}
                                <div>
                                    <Label htmlFor={`upload-image-${index}`} className="text-base font-medium text-gray-800 mb-2 block">
                                        Upload Image
                                    </Label>
                                    <div
                                        className={`flex flex-col items-center justify-center p-8 border-2 ${dragStates[index] ? "border-red-600" : "border-gray-300"
                                            } border-dashed rounded-lg cursor-pointer transition-colors duration-200`}
                                        onDragOver={(e) => handleDragOver(e, index)}
                                        onDragLeave={(e) => handleDragLeave(e, index)}
                                        onDrop={(e) => handleDrop(e, index)}
                                        onClick={() => handleUploadClick(index)}
                                    >
                                        <CloudUpload className="w-10 h-10 text-gray-400 mb-3" />
                                        <p className="text-gray-600 text-sm text-center">
                                            <span className="text-red-600 font-semibold">Click to upload</span> or drag and drop
                                        </p>
                                        <p className="text-gray-500 text-xs text-center mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                                        <input
                                            type="file"
                                            className="hidden"
                                            ref={(el: any) => (fileInputRefs.current[index] = el)}
                                            onChange={(e) => e.target.files?.[0] && handleFileChange(index, e.target.files[0])}
                                            accept=".svg,.png,.jpg,.jpeg,.gif"
                                        />
                                        {section.image && <p className="mt-2 text-sm text-gray-700">Selected file: {section.image.name}</p>}
                                    </div>
                                </div>
                            </div>
                            {/* Categories and Tags Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Categories */}
                                <div>
                                    <Label htmlFor={`categories-${index}`} className="text-base font-medium text-gray-800 mb-2 block">
                                        Categories
                                    </Label>
                                    <Input
                                        id={`categories-${index}`}
                                        value={section.categories}
                                        onChange={(e) => handleInputChange(index, "categories", e.target.value)}
                                        placeholder="Get Started"
                                        className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                                    />
                                </div>

                                {/* Tags */}
                                <div>
                                    <Label htmlFor={`tags-${index}`} className="text-base font-medium text-gray-800 mb-2 block">
                                        Tags
                                    </Label>
                                    <div className="flex gap-2">
                                        <Input
                                            id={`tags-${index}`}
                                            value={section.tags}
                                            onChange={(e) => handleInputChange(index, "tags", e.target.value)}
                                            placeholder="more tags"
                                            className="flex-1 h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                                        />

                                    </div>
                                </div>
                            </div>

                        
                        </div>
                    ))}

                    {/* Global Save Button */}
                    <div className="flex justify-end pt-8">
                        <Button
                            onClick={handleGlobalSave}
                            className="bg-red-600 hover:bg-red-600/90 text-white font-semibold px-8 py-3 rounded-md text-lg"
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
