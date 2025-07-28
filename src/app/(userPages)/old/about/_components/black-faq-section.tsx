"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

interface FAQItem {
    question: string
    answer: string
}

const faqData: FAQItem[] = [
    {
        question: "How This Work?",
        answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        question: "Are there any additional fee?",
        answer:
            "No, there are no hidden fees. Our pricing is transparent and includes all the features mentioned in your selected plan. You only pay for what you see in the pricing table.",
    },
    {
        question: "What features do you offer and others not?",
        answer:
            "We offer unique features like advanced analytics, 24/7 customer support, seamless integrations with popular tools, and a user-friendly interface that sets us apart from competitors.",
    },
]

export default function BlackFaqSection() {
    const [openItems, setOpenItems] = useState<number[]>([])

    const toggleItem = (index: number) => {
        setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
    }

    return (
        <section className=" bg-[#1a1a1a]"  >
            <div className="py-16 px-4 md:px-8 lg:px-16 max-w-[1366px] mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-white">
                FAQs <span className="text-[#FF2424]">Horumarka Dadka</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-6">
                    <div className="space-y-4">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white">
                            Any questions?
                            <br />
                            <span className="text-[#FF2424]">We got you.</span>
                        </h3>

                        <p className="text-gray-400 leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        </p>
                    </div>
                </div>

                {/* Right Column - FAQ Items */}
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="border-[#FF2424] border-b-2  text-gray-300">
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full py-4 flex items-center justify-between text-left   transition-colors duration-200"
                            >
                                <h4 className="text-lg font-medium  pr-4">{item.question}</h4>
                                <div className="flex-shrink-0 transition-transform duration-200">
                                    {openItems.includes(index) ? (
                                        <Minus className="w-5 h-5 text-gray-400" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-gray-400" />
                                    )}
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openItems.includes(index) ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="text-gray-400 leading-relaxed">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
           
        </section>
    )
}
