import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceGridCard {
  id: string
  image: string
  title: string
  description: string
  linkHref: string
}

const serviceGridCards: ServiceGridCard[] = [
  {
    id: "people-1",
    image: "/images/our-services-01.svg",
    title: "People",
    description:
      "As a leading provider of education, skills, employment support, youth services and offender rehabilitation support, we help people achieve their personal goals.",
    linkHref: "/people-services",
  },
  {
    id: "business-1",
    image: "/images/our-services-02.svg",
    title: "Business",
    description:
      "We provide business support and finance services designed to drive productivity, improve innovation and create high quality and inclusive jobs.",
    linkHref: "/business-services",
  },
  {
    id: "people-2",
    image: "/images/our-services-03.svg",
    title: "People",
    description:
      "As a leading provider of education, skills, employment support, youth services and offender rehabilitation support, we help people achieve their personal goals.",
    linkHref: "/people-services",
  },
  {
    id: "business-2",
    image: "/images/our-services-04.svg",
    title: "Business",
    description:
      "We provide business support and finance services designed to drive productivity, improve innovation and create high quality and inclusive jobs.",
    linkHref: "/business-services",
  },
]

export default function OurServicesGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceGridCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              {/* Card Image */}
              <div className="relative h-56 w-full">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ff2424]"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4 min-h-[80px]">
                  {card.description}
                </p>
                <Link
                  href={card.linkHref}
                  className="inline-flex hover:underline items-center text-[#ff2424] hover:text-red-600 font-medium text-sm transition-all duration-300 group"
                >
                  Find out more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:rotate-[-45deg] transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
