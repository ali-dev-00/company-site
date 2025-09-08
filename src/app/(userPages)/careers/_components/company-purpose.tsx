import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import TitleWithUnderline from "../../components/common/Title-with-underline"

interface PurposeCard {
    id: string
    image: string
    title: string
    description: string
    linkHref: string
}

const purposeCards: PurposeCard[] = [
    {
        id: "our-mission",
        image: "/careers/careers-01.svg",
        title: "Our Mission",
        description:
            "A reliable training provider, Horumarka Dadka strives to promote growth through job creation, improve lives through practical experience.",
        linkHref: "/what-we-do",
    },
    {
        id: "our-values",
        image: "/careers/careers-02.svg",
        title: "Our values",
        description: "We're committed to a consistent culture of empowerment, practicality, and impact.",
        linkHref: "/careers/our-values",
    },
    {
        id: "rewards-benefits",
        image: "/careers/careers-03.svg",
        title: "Rewards and benefits",
        description: "The people we employ are a valuable part of our team, and we strive to maintain empathetic relationships.",
        linkHref: "/careers/life-at-horumarka-dadka",
    },
]

export default function CompanyPurpose() {
    return (
        <section className="py-16 bg-[#F4F2F2]">
            <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16">
                {/* Section Header and Introductory Text */}
                <div className="mb-12 max-w-4xl lg:max-w-full">
                    <div className="mb-8 max-w-[600px]">
                        <TitleWithUnderline title="Join a purpose-driven enterprise." />
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed">
                       We&apos;re honoured to be motivated by our mission. What is our identity and what we want to achieve? Horumarka Dadka is a great place to build if you&apos;re committed to peoples progress, and we don&apos;t see this as compromising our values.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {purposeCards.map((card) => (
                        <div
                            key={card.id}
                            className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
                        >
                            {/* Card Image */}
                            <div className="relative h-48 w-full">
                                <Image
                                    src={card.image || "/placeholder.svg"}
                                    alt={card.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                                    className="inline-flex items-center text-[#ff2424] hover:text-[#ff2424] hover:underline font-medium text-sm transition-all duration-300 group"
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
