"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input"; 
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type FormItem = {
    year: string;
    subtitle: string;
    title: string;
};

export default function OurStorySectionsContent01() {
    const [formData, setFormData] = useState<FormItem[]>([
        { year: "", subtitle: "", title: "" },
        { year: "", subtitle: "", title: "" },
        { year: "", subtitle: "", title: "" },
        { year: "", subtitle: "", title: "" },
        { year: "", subtitle: "", title: "" },
        { year: "", subtitle: "", title: "" },
    ]);

    const handleChange = (
        index: number,
        field: keyof FormItem,
        value: string
    ) => {
        const updatedFormData = [...formData];
        updatedFormData[index][field] = value;
        setFormData(updatedFormData);
    };

    const handleSave = () => {
        console.log("Form Data:", formData);
        alert("Form data saved! (Check console for details)");
    };

    return (
        <section className="p-6 space-y-6">

            {formData.map((item, index) => (
                <div key={index} className="mx-auto bg-white p-6 border border-gray-200 rounded-xl shadow-sm space-y-8">
                    <form className="space-y-6">
                        <div key={index} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Year Field */}
                                <div className="space-y-2">
                                    <div>
                                        <Label htmlFor={`year-${index}`} className="text-base font-medium text-gray-800 mb-2 block">
                                            Year
                                        </Label>
                                        <Input
                                            id={`year-${index}`}
                                            value={item.year}
                                            onChange={(e) => handleChange(index, "year", e.target.value)}
                                            className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                                        />
                                    </div>
                                    <div>
                                        {/* Title Field */}
                                        <Label htmlFor={`title-${index}`} className="text-base font-medium text-gray-800 mb-2 block">
                                            Title
                                        </Label>
                                        <Input
                                            id={`title-${index}`}
                                            value={item.title}
                                            onChange={(e) => handleChange(index, "title", e.target.value)}
                                            className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                                        />
                                    </div>
                                </div>

                                {/* Subtitle Field */}
                                <div>
                                    <Label htmlFor={`subtitle-${index}`} className="text-base font-medium text-gray-800 mb-2 block">
                                        Subtitle
                                    </Label>
                                    <Textarea
                                        id={`subtitle-${index}`}
                                        value={item.subtitle}
                                        onChange={(e) => handleChange(index, "subtitle", e.target.value)}
                                        className="w-full h-34 resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
                                    />
                                </div>
                            </div>


                        </div>
                    </form>
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

        </section>
    );
}
