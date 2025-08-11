"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import TitleWithUnderline from "@/app/(userPages)/components/common/Title-with-underline";

interface ServiceCardProps {
    imageSrc: string;
    title: string;
    maxWidth: string;
    description: string;
    linkHref: string;
}

function ServiceCard({ imageSrc, title, maxWidth  , description, linkHref }: ServiceCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
            {/* Card Image/Logo */}
            <div className="relative h-38 w-full flex items-center justify-center ">
                <Image
                    src={imageSrc || "/placeholder.svg"}
                    alt={title}
                    fill
                    className=" object-bottom"        
                    priority={false}
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600" />
            </div>

            <div className="p-6">
                <div className="mb-4" style={{ maxWidth: maxWidth }}>
                    <TitleWithUnderline title={title} small={true} />
                </div>

                {/* Description */}
                <p className="text-gray-800 text-base leading-relaxed mb-6 line-clamp-5 min-h-[250px]">
                    {description}
                </p>

                {/* Learn More Link */}
                <Link href={linkHref} className="inline-flex items-center text-red-600 hover:underline text-sm font-semibold">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
            </div>
        </div>
    );
}

export default function OurServicesSection() {
    const [activeTab, setActiveTab] = useState("business-support");

    const tabs = [
        { id: "business-support", label: "Business Support" },
        { id: "business-finance", label: "Business Finance" },
        { id: "international", label: "International" },
        { id: "innovation", label: "Innovation" },
        { id: "net-zero", label: "Net Zero" },
        { id: "accreditations", label: "Accreditations" },
    ] as const;

    const serviceContent: Record<string, ServiceCardProps[]> = {
        "business-support": [
            {
                imageSrc: "/images/bussiness/our-services-01.svg",
                title: "Aspire Recruitment",
                maxWidth: '220px',
                description:
                    "Aspire Recruitment is an award-winning, not-for-profit ethical recruitment agency that supports businesses and individuals with their employment challenges.",
                linkHref: "#",
            },
            {
                imageSrc: "/images/bussiness/our-services-02.svg",
                title: "GM Business Growth Hub",
                maxWidth: '300px',
                description:
                    "A Greater Manchester innovation, adopted nationally, the GM Business Growth Hub delivers tailored programmes to assist entrepreneurs and businesses to start, grow, innovate, raise finance, develop their workforce, internationalise and become environmentally sustainable.",
                linkHref: "#",
            },
            {
                imageSrc: "/images/bussiness/our-services-03.svg",
                title: "GC Insight",
                maxWidth: '120px',
                description:
                    "GC Insight offers expertly designed and delivered support programmes that lead to thriving businesses, high-quality jobs, and growing local economies. With decades of expertise and a deep understanding of the challenges and opportunities faced by SMEs, GC Insights provides tailored solutions that deliver sustainable success for our clients.",
                linkHref: "#",
            },
        ],
        "business-finance": [],
        international: [],
        innovation: [],
        "net-zero": [],
        accreditations: [],
    };

    return (
        <section className="py-12  bg-white">
            <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16">
                <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8">Our services</h2>

                {/* Tabs Navigation */}
                <div className="flex justify-center flex-wrap gap-x-0.5 gap-y-2 mb-8 border-b-2 border-gray-200">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative px-5 py-3 pt-4 after:absolute after:top-0 after:left-0 after:w-full after:h-1 after:bg-red-600 font-medium transition-colors bg-gray-200 text-sm duration-200 ${activeTab === tab.id
                                    ? "text-red-600 "
                                    : "text-gray-700 hover:text-gray-900   "
                                }`}
                            type="button"
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-6 capitalize">
                        {tabs.find((tab) => tab.id === activeTab)?.label}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceContent[activeTab]?.map((service, index) => (
                            <ServiceCard key={`${service.title}-${index}`} {...service} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
