"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import ContentTabsSection from "../_components/content-tabs-section"

interface FormData {
    contact: {
        number: string
        location: string
    }
    button: {
        buttonText: string
        buttonLink: string
    }
}

export default function HeaderForm() {
    const [formData, setFormData] = useState<FormData>({
        contact: {
            number: "",
            location: "",
        },
        button: {
            buttonText: "Get Started",
            buttonLink: "Link",
        },
    })

    // Handle input change for the form
    const handleInputChange = (field: string, value: string, section: string) => {
        setFormData((prevState) => ({
            ...prevState,
            [section]: {
                [field]: value,
            },
        }))
    }

    // Handle saving the form data
    const handleSave = (section: string) => {
        alert(`${section} form data saved! (Check console for details)`)
    }

    return (
        <>
            <ContentTabsSection />
            <section className="px-6 py-2">
                <div className="border-gray-200 border mx-auto bg-white p-8 rounded-xl shadow-sm">
                    <div className="space-y-6">
                        {/* Contact Section */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="contactNumber" className="text-base font-medium text-gray-800 mb-2 block">
                                        Number
                                    </Label>
                                    <Input
                                        id="contactNumber"
                                        placeholder="Number"
                                        value={formData.contact.number}
                                        onChange={(e) =>
                                            handleInputChange("number", e.target.value, "contact")
                                        }
                                        className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="contactLocation" className="text-base font-medium text-gray-800 mb-2 block">
                                        Location
                                    </Label>
                                    <Input
                                        id="contactLocation"
                                        placeholder="Location"
                                        value={formData.contact.location}
                                        onChange={(e) =>
                                            handleInputChange("location", e.target.value, "contact")
                                        }
                                        className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end pt-4">
                            <Button onClick={() => handleSave("contact")} className="bg-red-600 hover:bg-red-600/90 text-white font-semibold px-6 py-3 rounded-md">
                                Save
                            </Button>
                            </div>
                        </div>

                        {/* Button Section */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800">Button</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="buttonText" className="text-base font-medium text-gray-800 mb-2 block">
                                        Button Text
                                    </Label>
                                    <Input
                                        id="buttonText"
                                        placeholder="Get Started"
                                        value={formData.button.buttonText}
                                        onChange={(e) =>
                                            handleInputChange("buttonText", e.target.value, "button")
                                        }
                                        className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="buttonLink" className="text-base font-medium text-gray-800 mb-2 block">
                                        Button Link
                                    </Label>
                                    <Input
                                        id="buttonLink"
                                        placeholder="Link"
                                        value={formData.button.buttonLink}
                                        onChange={(e) =>
                                            handleInputChange("buttonLink", e.target.value, "button")
                                        }
                                        className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end pt-4">
                                <Button onClick={() => handleSave("button")} className="bg-red-600 hover:bg-red-600/90 text-white font-semibold px-6 py-3 rounded-md">
                                    Save
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
