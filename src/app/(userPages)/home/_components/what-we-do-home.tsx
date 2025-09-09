import Image from "next/image"
import { ArrowRight } from "lucide-react"
import OurOfferings from "./our-offering"
import TitleWithUnderline from "../../components/common/Title-with-underline"
import Link from "next/link"

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
    title: "Assisting People to Succeed",
    description:
      "Horumarka Dadka is a premier company supporting education, skills development, employment opportunities, and youth empowerment across East Africa.",
    image: "/home/what-we-do-01.svg",
    linkText: "More Detail",
    linkHref: "/what-we-do/people",
  },
  {
    id: "supporting-businesses",
    title: "Business Growth Support",
    description:
      "Horumarka Dadka has made a significant impact on the business community. We&apos;ve empowered more than 500 businesses to not only adapt and innovate but also to drive economic development by creating employment opportunities.",
    image: "/home/what-we-do-02.svg",
    linkText: "More Detail",
    linkHref: "/what-we-do/business",
  },
  {
    id: "exceptional-consulting",
    title: "Investment and Consulting",
    description:
      "We connect organisations, places, and partnerships with the investments they need to grow. Our consulting services help you understand potential impacts, ensuring you get measurable results and achieve real economic growth.",
    image: "/home/what-we-do-03.svg",
    linkText: "More Detail",
    linkHref: "/what-we-do/consulting",
  },
]

export default function WhatWeDo() {
  return (
    <section className="pt-16">
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
                <Link
                  href={service.linkHref}
                  className="inline-flex items-center group-hover:underline text-[#ff2424] hover:text-red-600 font-medium text-sm transition-all duration-300 group"
                >
                  {service.linkText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:rotate-[-45deg]  transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <OurOfferings />
      </div>
    </section>
  )
}
