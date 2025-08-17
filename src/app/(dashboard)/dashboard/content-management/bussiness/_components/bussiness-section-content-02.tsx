"use client"

import type React from "react"
import { useState, useCallback } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { CloudUpload } from "lucide-react"

type FormData = {
    sectionName: string
    card: {
        title: string
        subtitle: string
        image: File | null
        buttonText: string
        buttonLink: string
    }
    content1: {
        title: string
        subtitle: string
        image: File | null
        buttonText: string
        buttonLink: string
    }
    content2: {
        title: string
        subtitle: string
        image: File | null
        buttonText: string
        buttonLink: string
    }
}

export default function BussinessSectionsContent02() {
    const [formData, setFormData] = useState<FormData>({
        sectionName: "",
        card: {
            title: "",
            subtitle: "",
            image: null,
            buttonText: "",
            buttonLink: "",
        },
        content1: {
            title: "",
            subtitle: "",
            image: null,
            buttonText: "",
            buttonLink: "",
        },
        content2: {
            title: "",
            subtitle: "",
            image: null,
            buttonText: "",
            buttonLink: "",
        },
    })

    const [dragStates, setDragStates] = useState<{ [key: string]: boolean }>({
        card: false,
        content1: false,
        content2: false,
    })

    const handleInputChange = (section: keyof FormData, field: string, value: string) => {
        if (section === "sectionName") {
            setFormData((prev) => ({ ...prev, sectionName: value }))
        } else {
            setFormData((prev) => ({
                ...prev,
                [section]: { ...prev[section], [field]: value },
            }))
        }
    }

    const handleDragOver = useCallback((e: React.DragEvent, section: string) => {
        e.preventDefault()
        e.stopPropagation()
        setDragStates((prev) => ({ ...prev, [section]: true }))
    }, [])

    const handleDragLeave = useCallback((e: React.DragEvent, section: string) => {
        e.preventDefault()
        e.stopPropagation()
        setDragStates((prev) => ({ ...prev, [section]: false }))
    }, [])

    const handleDrop = useCallback((e: React.DragEvent, section: string) => {
        e.preventDefault()
        e.stopPropagation()
        setDragStates((prev) => ({ ...prev, [section]: false }))
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleImageUpload(section, e.dataTransfer.files[0])
        }
    }, [])

    const handleImageUpload = (section: string, file: File) => {
        if (section === "card") {
            setFormData((prev) => ({
                ...prev,
                card: { ...prev.card, image: file },
            }))
        } else if (section === "content1") {
            setFormData((prev) => ({
                ...prev,
                content1: { ...prev.content1, image: file },
            }))
        } else if (section === "content2") {
            setFormData((prev) => ({
                ...prev,
                content2: { ...prev.content2, image: file },
            }))
        }
    }

    const handleUploadClick = (section: string) => {
        const input = document.getElementById(`file-input-${section}`) as HTMLInputElement
        input?.click()
    }

    const handleSave = () => {
        console.log("Saving form data:", formData)
        alert("Form data saved! (Check console for details)")
    }

    const UploadImageSection = ({ section, image }: { section: string; image: File | null }) => (
        <div>
            <Label className="text-base font-medium text-gray-800 mb-2 block">Upload Image</Label>
            <div
                className={`flex flex-col items-center justify-center p-8 border-2 ${dragStates[section] ? "border-red-600" : "border-gray-300"
                    } border-dashed rounded-lg cursor-pointer transition-colors duration-200 h-32`}
                onDragOver={(e) => handleDragOver(e, section)}
                onDragLeave={(e) => handleDragLeave(e, section)}
                onDrop={(e) => handleDrop(e, section)}
                onClick={() => handleUploadClick(section)}
            >
                <CloudUpload className="w-8 h-8 text-gray-400 mb-2" />
                <p className="text-red-600 text-sm text-center font-medium mb-1">Click to upload or drag and drop</p>
                <p className="text-gray-500 text-xs text-center">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                <input
                    id={`file-input-${section}`}
                    type="file"
                    className="hidden"
                    accept=".svg,.png,.jpg,.jpeg,.gif"
                    onChange={(e) => e.target.files?.[0] && handleImageUpload(section, e.target.files[0])}
                />
                {image && <p className="mt-2 text-sm text-gray-700 text-center">Selected: {image.name}</p>}
            </div>
        </div>
    )

    return (
        <section className="px-6 py-8">
            <div className="border-gray-200 border mx-auto bg-white p-8 rounded-xl shadow-sm">
                <div className="space-y-6">
                    {/* 1-Question Section */}
                    <div className="space-y-4">
                        <h1 className="text-xl font-bold text-gray-900">1-Section</h1>
                        <div>
                            <Label htmlFor="section-name" className="text-base font-medium text-gray-800 mb-2 block">
                                Section Name
                            </Label>
                            <Input
                                id="section-name"
                                value={formData.sectionName}
                                onChange={(e) => handleInputChange("sectionName", "", e.target.value)}
                                placeholder="Welcome"
                                className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                            />
                        </div>
                    </div>

                    {/* Card Section */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-gray-900">Card</h2>

                        <div>
                            <Label htmlFor="card-title" className="text-base font-medium text-gray-800 mb-2 block">
                                Title
                            </Label>
                            <Input
                                id="card-title"
                                value={formData.card.title}
                                onChange={(e) => handleInputChange("card", "title", e.target.value)}
                                placeholder="Welcome"
                                className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                            />
                        </div>

                        <div>
                            <Label htmlFor="card-subtitle" className="text-base font-medium text-gray-800 mb-2 block">
                                Subtitle
                            </Label>
                            <Textarea
                                id="card-subtitle"
                                value={formData.card.subtitle}
                                onChange={(e) => handleInputChange("card", "subtitle", e.target.value)}
                                placeholder="Write here"
                                className="w-full h-28 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
                            />
                        </div>

                        <UploadImageSection section="card" image={formData.card.image} />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <Label htmlFor="card-button-text" className="text-base font-medium text-gray-800 mb-2 block">
                                    Button Text
                                </Label>
                                <Input
                                    id="card-button-text"
                                    value={formData.card.buttonText}
                                    onChange={(e) => handleInputChange("card", "buttonText", e.target.value)}
                                    placeholder="Get Started"
                                    className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                                />
                            </div>

                            <div>
                                <Label htmlFor="card-button-link" className="text-base font-medium text-gray-800 mb-2 block">
                                    Button Link
                                </Label>
                                <Input
                                    id="card-button-link"
                                    value={formData.card.buttonLink}
                                    onChange={(e) => handleInputChange("card", "buttonLink", e.target.value)}
                                    placeholder="Link"
                                    className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                                />
                            </div>
                        </div>
                    </div>
                    {/* First Content Block */}
                    <div className="space-y-6">
                        <div>
                            <Label htmlFor="content1-title" className="text-base font-medium text-gray-800 mb-2 block">
                                Title
                            </Label>
                            <Input
                                id="content1-title"
                                value={formData.content1.title}
                                onChange={(e) => handleInputChange("content1", "title", e.target.value)}
                                placeholder="Welcome"
                                className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                            />
                        </div>

                        <div>
                            <Label htmlFor="content1-subtitle" className="text-base font-medium text-gray-800 mb-2 block">
                                Subtitle
                            </Label>
                            <Textarea
                                id="content1-subtitle"
                                value={formData.content1.subtitle}
                                onChange={(e) => handleInputChange("content1", "subtitle", e.target.value)}
                                placeholder="Write here"
                                className="w-full h-28 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
                            />
                        </div>

                        <UploadImageSection section="content1" image={formData.content1.image} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <Label htmlFor="content1-button-text" className="text-base font-medium text-gray-800 mb-2 block">
                                    Button Text
                                </Label>
                                <Input
                                    id="content1-button-text"
                                    value={formData.content1.buttonText}
                                    onChange={(e) => handleInputChange("content1", "buttonText", e.target.value)}
                                    placeholder="Get Started"
                                    className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                                />
                            </div>
                            <div>
                                <Label htmlFor="card-button-link" className="text-base font-medium text-gray-800 mb-2 block">
                                    Button Link
                                </Label>
                                <Input
                                    id="card-button-link"
                                    value={formData.card.buttonLink}
                                    onChange={(e) => handleInputChange("content1", "buttonLink", e.target.value)}
                                    placeholder="Link"
                                    className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Second Content Block */}
                    <div className="space-y-6">
                        <div>
                            <Label htmlFor="content2-title" className="text-base font-medium text-gray-800 mb-2 block">
                                Title
                            </Label>
                            <Input
                                id="content2-title"
                                value={formData.content2.title}
                                onChange={(e) => handleInputChange("content2", "title", e.target.value)}
                                placeholder="Welcome"
                                className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                            />
                        </div>

                        <div>
                            <Label htmlFor="content2-subtitle" className="text-base font-medium text-gray-800 mb-2 block">
                                Subtitle
                            </Label>
                            <Textarea
                                id="content2-subtitle"
                                value={formData.content2.subtitle}
                                onChange={(e) => handleInputChange("content2", "subtitle", e.target.value)}
                                placeholder="Write here"
                                className="w-full h-28 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
                            />
                        </div>

                        <UploadImageSection section="content2" image={formData.content2.image} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <Label htmlFor="content2-button-text" className="text-base font-medium text-gray-800 mb-2 block">
                                    Button Text
                                </Label>
                                <Input
                                    id="content2-button-text"
                                    value={formData.content2.buttonText}
                                    onChange={(e) => handleInputChange("content2", "buttonText", e.target.value)}
                                    placeholder="Get Started"
                                    className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                                />
                            </div>
                            <div>
                                <Label htmlFor="card-button-link" className="text-base font-medium text-gray-800 mb-2 block">
                                    Button Link
                                </Label>
                                <Input
                                    id="card-button-link"
                                    value={formData.card.buttonLink}
                                    onChange={(e) => handleInputChange("content2", "buttonLink", e.target.value)}
                                    placeholder="Link"
                                    className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                                />
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
                </div>
            </div>
        </section>
    )
}
