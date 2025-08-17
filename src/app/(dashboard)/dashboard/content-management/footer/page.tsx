"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import ContentTabsSection from "../_components/content-tabs-section"

interface SocialLinks {
    youtube: string
    instagram: string
    facebook: string
    x: string
    tiktok: string
}

interface Contact {
    number: string
    email: string
}

interface FormData {
    footerSubtitle: string
    contact: Contact
    socialLinks: SocialLinks
}

export default function FooterAndContactForm() {
    const [formData, setFormData] = useState<FormData>({
        footerSubtitle: "",
        contact: {
            number: "",
            email: "",
        },
        socialLinks: {
            youtube: "",
            instagram: "",
            facebook: "",
            x: "",
            tiktok: "",
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
                        {/* Footer Section */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800">Footer</h3>
                            <div>
                                <Label htmlFor="footerSubtitle" className="text-base font-medium text-gray-800 mb-2 block">
                                    Subtitle
                                </Label>
                                <Textarea
                                    id="footerSubtitle"
                                    placeholder="Write here"
                                    value={formData.footerSubtitle}
                                    onChange={(e) =>
                                        handleInputChange("footerSubtitle", e.target.value, "footer")
                                    }
                                    className="w-full h-28 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
                                />
                            </div>
                            <div className="flex justify-end pt-4">
                                <Button onClick={() => handleSave("footer")} className="bg-red-600 dis hover:bg-red-600/90 text-white font-semibold px-6 py-3 rounded-md">
                                    Save
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="border-gray-200 my-6 border mx-auto bg-white p-8 rounded-xl shadow-sm">
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
                                    <Label htmlFor="contactEmail" className="text-base font-medium text-gray-800 mb-2 block">
                                        Email
                                    </Label>
                                    <Input
                                        id="contactEmail"
                                        placeholder="Email"
                                        value={formData.contact.email}
                                        onChange={(e) =>
                                            handleInputChange("email", e.target.value, "contact")
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

                        {/* Social Media Links Section */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800">Social Links</h3>

                            {["youtube", "instagram", "facebook", "x", "tiktok"].map((platform) => (
                                <div key={platform}>
                                    <Label htmlFor={platform} className="text-base font-medium text-gray-800 mb-2 block">
                                        {platform.charAt(0).toUpperCase() + platform.slice(1)}
                                    </Label>
                                    <Input
                                        id={platform}
                                        placeholder="Link"
                                        value={formData.socialLinks[platform as keyof SocialLinks]}
                                        onChange={(e) =>
                                            handleInputChange(platform, e.target.value, "socialLinks")
                                        }
                                        className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                                    />
                                </div>
                            ))}
                            {/* Save Button */}
                            <div className="flex justify-end pt-4">
                                <Button onClick={() => handleSave("socialLinks")} className="bg-red-600 hover:bg-red-600/90 text-white font-semibold px-6 py-3 rounded-md">
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
