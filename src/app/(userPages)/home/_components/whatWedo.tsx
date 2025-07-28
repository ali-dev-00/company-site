import Image from "next/image"
import { ArrowRight } from "lucide-react"
import OurOfferings from "./our-offering"
import TitleWithUnderline from "../../components/common/Title-with-underline"

interface ServiceCard {
  id: string
  title: string
  description: string
  image: string
  linkText: string
  linkHref: string
}

const services: ServiceCard[] = [
  {
    id: "supporting-people",
    title: "Supporting People",
    description:
      "The Growth Company is a leading provider of education, skills, employment, youth and offender rehabilitation support. Since 2020, to improve lives we&apos;ve created over 42,000 new jobs, supported over 48,000 clients into work and seen over",
    image: "/home/what-we-do-01.svg",
    linkText: "Find out more",
    linkHref: "/supporting-people",
  },
  {
    id: "supporting-businesses",
    title: "Supporting Businesses",
    description:
      "Businesses face ongoing challenges and since 2020, the Growth Company has assisted over 10,000 businesses to innovate, transform their businesses and create new jobs.",
    image: "/home/what-we-do-02.svg",
    linkText: "Business",
    linkHref: "/supporting-businesses",
  },
  {
    id: "exceptional-consulting",
    title: "Exceptional Consulting",
    description:
      "By collaborating with a diverse range of organisations, places and partnerships, we help you understand the potential impact of various scenarios to deliver measurable results and achieve economic growth.",
    image: "/home/what-we-do-03.svg",
    linkText: "Find out more",
    linkHref: "/exceptional-consulting",
  },
]

export default function WhatWeDo() {
  return (
    <section className="pt-16 bg-[#F4F2F2]">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-8 max-w-[230px]">
           <TitleWithUnderline title="What We Do" />
          </div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden hover:scale-105 transform group"
            >
              {/* Card Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ff2424]"></div>
              </div>
              <div className="p-6 relative">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#ff2424] mb-4 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-6 min-h-[135px]">
                  {service.description}
                </p>
                <a
                  href={service.linkHref}
                  className="inline-flex items-center group-hover:underline text-[#ff2424] hover:text-red-600 font-medium text-sm transition-all duration-300 group"
                >
                  {service.linkText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:rotate-[-45deg]  transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <OurOfferings />
      </div>
    </section>
  )
}
