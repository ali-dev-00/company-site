import type React from "react"
import Image from "next/image"

export default function OurPrinciplesSection() {
    const principles = [
        {
            title: "Make a positive difference",
            maxWidth: '360px',
            description:
                "We're proud to make a positive difference to the businesses, communities our colleagues and individuals that we work with.",
        },
        {
            title: "Stronger together",
            maxWidth: '260px',
            description: "We achieve more by working together.",
        },
        {
            title: "Empower people",
            maxWidth: '240px',
            description: "We encourage ambition and challenge assumptions.",
        },
        {
            title: "Do the right thing",
            maxWidth: '260px',
            description: "We always aim to do the right thing for the right reason.",
        },
        {
            title: "Build on success",
            maxWidth: '240px',
            description: "We learn from our experiences to enable continual growth and future opportunities.",
        },
    ]

    return (
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    {principles.map((principle, index) => (
                        <div key={index}>
                            <h2 className="text-3xl font-semibold text-black mb-4">{principle.title}</h2>
                            <div
                                className={`flex items-center justify-center w-full`}
                                style={{ maxWidth: principle.maxWidth }}
                            >
                                <div className="h-[4px] bg-[#ff2424] flex-grow"></div>
                                <div className="h-[2px] bg-gray-200 flex-grow"></div>
                            </div>
                            <p className="text-gray-700 text-base md:text-lg mt-2">{principle.description}</p>
                        </div>
                    ))}
                </div>
                <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:mx-0">
                    <Image src="/images/our-values-right-section.png" alt="our values" height={600} width={600} />
                </div>
            </div>
        </section>
    )
}
