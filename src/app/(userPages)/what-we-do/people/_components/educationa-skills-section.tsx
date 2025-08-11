"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

interface ServiceCardProps {
  imageSrc: string
  title: string
  description: string
  linkHref: string
}

function ServiceCard({ imageSrc, title, description, linkHref }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      {/* Card Image/Logo */}
      <div className="relative h-48 w-full flex items-center justify-center p-4">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-contain max-h-full max-w-full" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600"></div>
      </div>
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 mb-4 transition-colors duration-300 relative pb-2 inline-block">
          {title}
          <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-600 rounded-full" />
        </h3>
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-5 min-h-[100px]">{description}</p>
        {/* Learn More Link */}
        <Link href={linkHref} className="inline-flex items-center text-red-600 hover:underline text-sm font-semibold">
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

export default function EducationSkillsSection() {
  const [activeTab, setActiveTab] = useState("education-skills")

  const tabs = [
    { id: "education-skills", label: "Education and Skills" },
    { id: "employment", label: "Employment" },
    { id: "youth-services", label: "Youth Services" },
    { id: "justice-services", label: "Justice Services" },
  ]

  const educationSkillsContent = {
    heading: "Education and Skills",
    paragraphs: [
      "As one of the largest providers of apprenticeships and training in the country, we help people to develop their skills across a diverse range of sectors and levels.",
      "Our services prepare people to enter the workplace, to continuously improve and develop leadership skills and drive productivity. We provide career-boosting training at all levels and across some of our fastest growing industries.",
      "We take a whole-person approach to skills development, embedding a wide range of wrap-around developmental support including: digital citizenship and mental wellbeing awareness. Our teams work with leading businesses to ensure our curricula helps to boost the career prospects of individuals and the productivity of businesses.",
    ],
    awardImage: "/images/rate-50-training-providers.jpg",
    cards: [
      {
        imageSrc: "/placeholder.svg?height=100&width=200&+Skills+logo=",
        title: "GC Education and Skills",
        description:
          "As one of the largest providers of apprenticeships and training in the country, GC Education and Skills help people to develop their skills across a diverse range of sectors and levels.",
        linkHref: "#",
      },
      {
        imageSrc: "/placeholder.svg?height=100&width=200",
        title: "GC Employment",
        description:
          "GC Employment delivers services across the UK which help tens of thousands of people move into good jobs and careers. Our highly personalised services take a holistic approach, empowering people to navigate the changing world of work at the same time as overcoming personal challenges.",
        linkHref: "#",
      },
    ],
  }

  // Placeholder for other tab content
  const otherTabContent = {
    employment: {
      heading: "Employment",
      paragraphs: ["Content for Employment services."],
      awardImage: "",
      cards: [],
    },
    "youth-services": {
      heading: "Youth Services",
      paragraphs: ["Content for Youth Services."],
      awardImage: "",
      cards: [],
    },
    "justice-services": {
      heading: "Justice Services",
      paragraphs: ["Content for Justice Services."],
      awardImage: "",
      cards: [],
    },
  }

  const currentContent = activeTab === "education-skills" ? educationSkillsContent : otherTabContent[activeTab as keyof typeof otherTabContent]

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Tabs Navigation */}
        <div className="flex flex-wrap gap-x-1 gap-y-2 mb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-4 text-base bg-gray-200 font-semibold transition-colors duration-200
                ${
                  activeTab === tab.id
                    ? "text-red-600 after:absolute after:top-0 after:left-0 after:w-full after:h-1 after:bg-red-600"
                    : "text-gray-600 hover:text-gray-900 bg-gray-200"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div>
          <h3 className="text-2xl font-medium text-gray-900 mb-6 capitalize">{currentContent.heading}</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Left Text Content */}
            <div className="space-y-4 text-gray-700 text-base md:text-lg">
              {currentContent.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            {/* Right Award Image */}
            {currentContent.awardImage && (
              <div className="flex justify-center items-center lg:justify-end">
                <Image
                  src={currentContent.awardImage || "/placeholder.svg"}
                  alt="Award: RATEMYAPPRENTICESHIP BEST 50 TRAINING PROVIDERS 2024 - 2025"
                  width={500}
                  height={400}
                  className="object-contain"
                />
              </div>
            )}
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentContent.cards.map((card, index) => (
              <ServiceCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
