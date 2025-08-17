"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Plus, Minus, ArrowRight } from "lucide-react"

interface ExpandableItemProps {
    title: string
    content: string
    isOpen: boolean
    onToggle: () => void
}

function ExpandableItem({ title, content, isOpen, onToggle }: ExpandableItemProps) {
    return (
        <div className="border-b border-gray-200 py-3">
            <button onClick={onToggle} className="flex justify-between items-center w-full text-left focus:outline-none">
                <span className="text-gray-800 font-medium text-base">{title}</span>
                <div className="text-gray-600">{isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}</div>
            </button>
            {isOpen && <div className="mt-3 text-gray-700 text-sm leading-relaxed">{content}</div>}
        </div>
    )
}

export default function NetZeroSection() {
    const [openColleagueItems, setOpenColleagueItems] = useState<{ [key: number]: boolean }>({})
    const [openSupplyChainItems, setOpenSupplyChainItems] = useState<{ [key: number]: boolean }>({})

    const toggleColleagueItem = (index: number) => {
        setOpenColleagueItems((prev) => ({
            ...prev,
            [index]: !prev[index],
        }))
    }

    const toggleSupplyChainItem = (index: number) => {
        setOpenSupplyChainItems((prev) => ({
            ...prev,
            [index]: !prev[index],
        }))
    }

    const colleagueItems = [
        {
            title: "Transport",
            content: "Information about sustainable transport initiatives and policies for our colleagues.",
        },
        {
            title: "Knowledge",
            content: "Educational resources and training programs to help colleagues understand sustainability practices.",
        },
        {
            title: "Community",
            content: "Community engagement programs and local environmental initiatives that colleagues can participate in.",
        },
    ]

    const supplyChainItems = [
        {
            title: "Responsible",
            content: "Our responsible sourcing practices and supplier assessment criteria.",
        },
        {
            title: "Strategy",
            content: "Strategic approach to sustainable supply chain management and carbon reduction.",
        },
        {
            title: "Social Value",
            content: "How we work with suppliers to create positive social and environmental impact.",
        },
    ]

    return (
        <section className="py-12  bg-white">
            <div className="max-w-[1366px] px-4 md:px-8 lg:px-16 mx-auto">
                <div className="space-y-8">
                    {/* Header */}
                    <div className="relative pb-2 inline-block">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Net Zero by 2035</h2>
                        <span className="absolute bottom-0 left-0 w-16 h-1 bg-red-600 rounded-full" />
                    </div>

                    {/* Main Content with Business Declares Logo */}
                    <div className=" gap-8 items-start">
                        {/* Text Content */}
                        <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                            <p>
                                In 2019, the Growth Company announced its intention to be Carbon Neutral by 2023. In February 2022, we
                                updated our commitment to becoming Net Zero across scopes 1, 2 and 3 by 2035. This new commitment
                                reflects our heightened commitment to reduce our carbon emissions across the organisation and provides a
                                clear pathway for action.
                            </p>

                            <p>
                                We recognise the need to prioritise effort on the impacts associated with the activities under our
                                direct control (scope 1 and 2) swiftly and in line with the Paris Agreement to limit global warming to
                                an upper threshold of 1.5 degrees centigrade. We also appreciate the pressing need to mitigate the
                                impacts associated with our value chain (scope 3).
                            </p>
                            <div className="grid grid-cols-1 lg:grid-cols-4 space" >
                                <div className="lg:col-span-3 space-y-4" >
                                    <p>
                                        We're proud to pledge our support for the UN's Race to Net Zero through Business Declares, a
                                        fast-growing network of businesses who acknowledge the Climate and Ecological Emergency. Our aim is to
                                        continue to reduce our emissions and impact on biodiversity year-on-year, off-setting the remaining
                                        carbon through a recognised carbon off-setting scheme, to the point of becoming Net Zero by 2035.
                                    </p>

                                    <p>
                                        Concern for both people and the planet are not new to us. We're an award-winning provider of
                                        environmental services, having helped Greater Manchester small-medium enterprises save 2 million tonnes
                                        of carbon.
                                    </p>
                                </div>
                                <div className="flex justify-center">
                                    <Image
                                        src="/images/bussiness-declares.svg"
                                        alt="Business Declares Logo"
                                        width={350}
                                        height={150}
                                        className="object-contain"
                                    />
                                </div>
                            </div>


                            <p>
                                We achieved ISO 14001 Environmental Management System accreditation in 2021 and were reaccredited in
                                2024. We are also an accredited Institute of Sustainability and Environmental Professionals (ISEH)
                                training centre, with our Journey to Net Zero programme an accredited ISEH Course.
                            </p>

                            <p>
                                We look forward to continuing to share our journey and ensuring our voice is part of the collective,
                                resounding call for change. We are certainly not claiming to be perfect, neither are we judging others -
                                instead we're part of a coalition of the willing, looking to collaborate and accelerate action while
                                continuing to highlight the challenges and uncomfortable truths.
                            </p>

                            <p>
                                To meet this goal, we've launched a 5-year programme focused on reducing energy and fuel consumption,
                                making sustainable purchasing decisions, and improving waste management. This initiative is designed to
                                continually enhance the quality of our operations as we work towards a more sustainable future.
                            </p>
                        </div>


                    </div>

                    {/* Call to Action Link */}

                    <Link href="#" className="inline-flex items-center text-red-600 hover:underline font-medium text-base">
                        Take a look at our Carbon Reduction Plan
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>


                    {/* Two Column Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Our colleagues */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-900">Our colleagues</h3>
                            <p className="text-gray-700 text-base leading-relaxed">
                                We actively empower our colleagues to embrace sustainability in both their work and personal lives,
                                offering practical benefits and valuable resources to help them contribute to a more sustainable future.
                            </p>
                            <div className="space-y-0">
                                {colleagueItems.map((item, index) => (
                                    <ExpandableItem
                                        key={index}
                                        title={item.title}
                                        content={item.content}
                                        isOpen={openColleagueItems[index] || false}
                                        onToggle={() => toggleColleagueItem(index)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Our supply chain */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-900">Our supply chain</h3>
                            <p className="text-gray-700 text-base leading-relaxed">
                                At the Growth Company, we recognise that our supply chain is a critical part of our sustainability
                                efforts, accounting for approximately 44% of our overall emissions.
                            </p>
                            <div className="space-y-0">
                                {supplyChainItems.map((item, index) => (
                                    <ExpandableItem
                                        key={index}
                                        title={item.title}
                                        content={item.content}
                                        isOpen={openSupplyChainItems[index] || false}
                                        onToggle={() => toggleSupplyChainItem(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
