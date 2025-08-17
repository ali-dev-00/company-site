"use client"

import { useState } from "react"
import { Plus, Minus, Play, ArrowRight } from "lucide-react"
import TitleWithUnderline from "@/app/(userPages)/components/common/Title-with-underline"

interface ExpandableItemProps {
    title: string
    content: string
    isOpen: boolean
    onToggle: () => void
}

function ExpandableItem({ title, content, isOpen, onToggle }: ExpandableItemProps) {
    return (
        <div className="border-b border-gray-200 py-4">
            <button onClick={onToggle} className="flex justify-between items-center w-full text-left focus:outline-none">
                <span className="text-red-600 font-medium text-base md:text-lg">{title}</span>
                <div className="text-red-600">{isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}</div>
            </button>
            {isOpen && <div className="mt-4 text-gray-700 text-base leading-relaxed">{content}</div>}
        </div>
    )
}

export default function OrganisationPurposeSection() {
    const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({})

    const toggleItem = (index: number) => {
        setOpenItems((prev) => ({
            ...prev,
            [index]: !prev[index],
        }))
    }

    const expandableItems = [
        {
            title: "The right type of place to work",
            content:
                "We provide a supportive and inclusive work environment where everyone can thrive and contribute to meaningful work that makes a difference in communities across the UK.",
        },
        {
            title: "Benefits beyond salary",
            content:
                "We offer comprehensive benefits including flexible working arrangements, professional development opportunities, health and wellbeing support, and competitive pension schemes.",
        },
        {
            title: "Better way to work",
            content:
                "We embrace flexible working practices, promote work-life balance, and provide the tools and technology you need to work effectively, whether in the office, at home, or on the go.",
        },
        {
            title: "Our commitment to equality, diversity and inclusion",
            content:
                "We are committed to creating an inclusive workplace where everyone feels valued, respected, and able to bring their authentic selves to work, regardless of their background or identity.",
        },
        {
            title: "Committed to wellbeing",
            content:
                "We prioritize the mental health and wellbeing of our colleagues through comprehensive support programs, mental health resources, and a culture that promotes work-life balance.",
        },
    ]

    return (
        <section className="py-12  bg-white">
            <div className="max-w-[1366px] px-4 md:px-8 lg:px-16 mx-auto">
                <div className="space-y-8">
                    {/* Header */}
                    <div className="space-y-4">
                        <div className="max-w-2xl">
                            <TitleWithUnderline reverse={true} title="Be part of an organisation with a purpose" />
                        </div>
                        <p className="text-gray-700 text-base md:text-lg">We&apos;re looking for passionate people who will live our values day in, day out. Shaped and driven by our people, these values define who are and where we want to be in the future.</p>
                       
                    </div>

                    {/* Expandable Items */}
                    <div className="space-y-0">
                        {expandableItems.map((item, index) => (
                            <ExpandableItem
                                key={index}
                                title={item.title}
                                content={item.content}
                                isOpen={openItems[index] || false}
                                onToggle={() => toggleItem(index)}
                            />
                        ))}
                    </div>

                    {/* Video Player */}
                    <div className="mt-12">
                        <div className="relative w-full h-64 md:h-80 lg:h-96 bg-black rounded-lg overflow-hidden">
                            <button
                                className="absolute inset-0 flex items-center justify-center group"
                                onClick={() => {
                                    // Add video play functionality here
                                    console.log("Play video")
                                }}
                            >
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:bg-opacity-20 transition-colors duration-300">
                                    <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="white" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
