"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import ContentTabsSection from "../_components/content-tabs-section"

type FeatureItem = {
    name: string
    designation: string
    description: string
    image: File | null
}

type QAItem = {
    question: string
    answer: string
}

export default function OurBoardPageContent() {
    const [formData, setFormData] = useState<FeatureItem[]>([
        { name: "", designation: "", description: "", image: null },
        { name: "", designation: "", description: "", image: null },
        { name: "", designation: "", description: "", image: null },
        { name: "", designation: "", description: "", image: null },
        { name: "", designation: "", description: "", image: null },
        { name: "", designation: "", description: "", image: null },
        { name: "", designation: "", description: "", image: null },
    ])

    const [joinUs, setJoinUs] = useState({
        title: "",
        subtitle: "",
        buttonText: "",
        buttonLink: "",
    })

    const [advisoryBoard, setAdvisoryBoard] = useState({
        title: "",
        subtitle: "",
        questions: [
            { question: "", answer: "" },
            { question: "", answer: "" },
            { question: "", answer: "" },
        ] as QAItem[],
    })

    const handleFeatureChange = <K extends keyof Omit<FeatureItem, "image">>(
        index: number,
        field: K,
        value: FeatureItem[K]
    ) => {
        setFormData((prev) =>
            prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
        )
    }

    const handleImageUpload = (index: number, file: File | null) => {
        setFormData((prev) =>
            prev.map((item, i) => (i === index ? { ...item, image: file } : item))
        )
    }

    const handleQAChange = (
        index: number,
        field: keyof QAItem,
        value: string
    ) => {
        setAdvisoryBoard((prev) => {
            const updatedQuestions = prev.questions.map((q, i) =>
                i === index ? { ...q, [field]: value } : q
            )
            return { ...prev, questions: updatedQuestions }
        })
    }

    const handleSave = () => {
        console.log("Join Us:", joinUs)
        console.log("Advisory Board:", advisoryBoard)
        console.log("Features:", formData)
        alert("Form data saved! (Check console for details)")
    }
    return (
        <>
            <ContentTabsSection />
            <section className="p-6">
                <div className="mx-auto bg-white p-6 border border-gray-200 rounded-xl shadow-md space-y-8">
                    <form className="space-y-10">
                        {formData.map((feature, index) => (
                            <div key={index} className="space-y-4">
                                <h2 className="text-lg font-semibold text-gray-900">Features</h2>
                                {/* Name & Designation */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor={`name-${index}`} className="text-base font-medium text-gray-800 mb-2 block">
                                            Name
                                        </Label>
                                        <Input
                                            id={`name-${index}`}
                                            placeholder="jon"
                                            value={feature.name}
                                            onChange={(e) =>
                                                handleFeatureChange(index, "name", e.target.value)
                                            }
                                            className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor={`designation-${index}`} className="text-base font-medium text-gray-800 mb-2 block">
                                            Designation
                                        </Label>
                                        <Input
                                            id={`designation-${index}`}
                                            placeholder="CEO"
                                            value={feature.designation}
                                            onChange={(e) =>
                                                handleFeatureChange(index, "designation", e.target.value)
                                            }
                                            className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                                        />
                                    </div>
                                </div>

                                {/* Description & Upload Image */}
                                <div className="flex flex-col md:flex-row gap-4">
                                    <div className="w-full md:w-1/2">
                                        <Label htmlFor={`description-${index}`} className="text-base font-medium text-gray-800 mb-2 block">
                                            Description
                                        </Label>
                                        <Textarea
                                            id={`description-${index}`}
                                            placeholder="Write here"
                                            value={feature.description}
                                            onChange={(e) =>
                                                handleFeatureChange(index, "description", e.target.value)
                                            }
                                            className="w-full h-28 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
                                        />
                                    </div>

                                    <div className="w-full md:w-1/2">
                                        <Label htmlFor={`image-${index}`} className="text-base font-medium text-gray-800 mb-2 block">
                                            Upload Image
                                        </Label>
                                        <label
                                            htmlFor={`image-${index}`}
                                            className="flex flex-col items-center justify-center p-8 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer"
                                        >
                                            <input
                                                id={`image-${index}`}
                                                type="file"
                                                className="hidden"
                                                accept="image/*"
                                                onChange={(e) => handleImageUpload(index, e.target.files?.[0] || null)}
                                            />
                                            <p className="text-gray-600 text-sm text-center">
                                                <span className="text-red-600 font-semibold">Click to upload</span> or drag and drop
                                            </p>
                                            <p className="text-gray-500 text-xs text-center mt-1">
                                                SVG, PNG, JPG or GIF (max. 800×400px)
                                            </p>
                                        </label>
                                        {feature.image && (
                                            <p className="mt-2 text-sm text-gray-700">Selected file: {feature.image.name}</p>
                                        )}
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
                    <form className="space-y-10">

                        {/* Join Us Section */}
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-gray-900">Join Us</h2>
                            <div>
                                <Label className="text-base font-medium text-gray-800 mb-2 block" htmlFor="join-title">Title</Label>
                                <Input
                                    id="join-title"
                                    placeholder="Welcome"
                                    value={joinUs.title}
                                    onChange={(e) =>
                                        setJoinUs((prev) => ({ ...prev, title: e.target.value }))
                                    }
                                    className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                                />
                            </div>
                            <div>
                                <Label className="text-base font-medium text-gray-800 mb-2 block" htmlFor="join-subtitle">Subtitle</Label>
                                <Textarea
                                    id="join-subtitle"
                                    placeholder="Write here"
                                    value={joinUs.subtitle}
                                    onChange={(e) =>
                                        setJoinUs((prev) => ({ ...prev, subtitle: e.target.value }))
                                    }
                                    className="w-full h-28 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label className="text-base font-medium text-gray-800 mb-2 block" htmlFor="join-button-text">Button Text</Label>
                                    <Input
                                        id="join-button-text"
                                        placeholder="Get Started"
                                        value={joinUs.buttonText}
                                        onChange={(e) =>
                                            setJoinUs((prev) => ({
                                                ...prev,
                                                buttonText: e.target.value,
                                            }))
                                        }
                                        className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                                    />
                                </div>
                                <div>
                                    <Label className="text-base font-medium text-gray-800 mb-2 block" htmlFor="join-button-link">Button Link</Label>
                                    <Input
                                        id="join-button-link"
                                        placeholder="Link"
                                        value={joinUs.buttonLink}
                                        onChange={(e) =>
                                            setJoinUs((prev) => ({
                                                ...prev,
                                                buttonLink: e.target.value,
                                            }))
                                        }
                                        className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Advisory Board Section */}
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-gray-900">
                                Advisory Board
                            </h2>
                            <div>
                                <Label className="text-base font-medium text-gray-800 mb-2 block" htmlFor="advisory-title">Title</Label>
                                <Input
                                    id="advisory-title"
                                    placeholder="Welcome"
                                    value={advisoryBoard.title}
                                    onChange={(e) =>
                                        setAdvisoryBoard((prev) => ({
                                            ...prev,
                                            title: e.target.value,
                                        }))
                                    }
                                    className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                                />
                            </div>
                            <div>
                                <Label className="text-base font-medium text-gray-800 mb-2 block" htmlFor="advisory-subtitle">Subtitle</Label>
                                <Textarea
                                    id="advisory-subtitle"
                                    placeholder="Write here"
                                    value={advisoryBoard.subtitle}
                                    onChange={(e) =>
                                        setAdvisoryBoard((prev) => ({
                                            ...prev,
                                            subtitle: e.target.value,
                                        }))
                                    }
                                    className="w-full h-28 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
                                />
                            </div>

                            {/* Styled Numbered Q&A */}
                            {advisoryBoard.questions.map((qa, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex items-center font-semibold">
                                        {index + 1}-
                                        <span className="ml-1">Question</span>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Input
                                            placeholder="Question"
                                            value={qa.question}
                                            onChange={(e) =>
                                                handleQAChange(index, "question", e.target.value)
                                            }
                                        />
                                        <Input
                                            placeholder="Answer"
                                            value={qa.answer}
                                            onChange={(e) =>
                                                handleQAChange(index, "answer", e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

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
        </>
    )
}
