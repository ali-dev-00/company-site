"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  imageSrc: string
  title: string
  description: string
  linkHref: string
}

function ServiceCard({ imageSrc, title, description, linkHref }: ServiceCardProps) {
  return (
    <div className="relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Card Header Image */}
      <div className="relative h-24 w-full">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>

      {/* Card Content */}
      <div className="p-6 ">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 relative pb-2 inline-block">
          {title}
          <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-600 rounded-full" />
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[280px]">{description}</p>
        
      </div>
      <Link href={linkHref} className="bottom-5 pl-5 absolute inline-flex items-center text-red-600 hover:underline font-medium text-sm">
          Learn more
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
    </div>
  )
}

export default function SustainabilityServicesSection() {
  const [activeTab, setActiveTab] = useState("people")

  const tabs = [
    { id: "people", label: "People" },
    { id: "business", label: "Business" },
    { id: "place", label: "Place" },
  ]

  const serviceContent = {
    people: [
      {
        imageSrc: "/placeholder.svg?height=96&width=400&text=Employ+GM",
        title: "Employ GM",
        description:
          "Greater Manchester offers a wide range of opportunities in the sustainability sector. Employ GM has created a Green Courses and Training Guide to support those looking to take the next step toward a greener career.",
        linkHref: "#",
      },
      {
        imageSrc: "/placeholder.svg?height=96&width=400&text=GC+Employment",
        title: "GC Employment",
        description:
          "GC Employment integrates climate change awareness and sustainable daily actions into our services, helping people secure long-term employment while also supporting the planet.",
        linkHref: "#",
      },
      {
        imageSrc: "/placeholder.svg?height=96&width=400&text=GC+Education+Skills",
        title: "GC Education and Skills",
        description:
          "GC Education and Skills are empowering individuals with the skills and education needed to develop, maintain, and innovate the technologies of the future. Through our dedicated Green Skills Academy, we are shaping the workforce of tomorrow.",
        linkHref: "#",
      },
      {
        imageSrc: "/placeholder.svg?height=96&width=400&text=GM+Skills+Map",
        title: "GM Skills Map",
        description:
          "If you are business owner or individual based in Greater Manchester and seeking to grow your skills, GM Skills Map offers flexible training opportunities within the sustainability sector to fit your budget, location, and needs.",
        linkHref: "#",
      },
    ],
    business: [
      // Add business tab content here
    ],
    place: [
      // Add place tab content here
    ],
  }

  return (
    <section className="py-12  bg-gray-50">
      <div className="max-w-[1366px] px-4 md:px-8 lg:px-16 mx-auto">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="relative pb-2 inline-block">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Sustainability across our services</h2>
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-red-600 rounded-full" />
            </div>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-4xl">
              At the Growth Company, we offer a range of services that support the nation&apos;s ambition to achieve net-zero
              by 2050, while improving lives and businesses in the communities we serve.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex justify-center flex-wrap gap-x-1 gap-y-2 mb-8 border-b border-gray-200">
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

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceContent[activeTab as keyof typeof serviceContent].map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
