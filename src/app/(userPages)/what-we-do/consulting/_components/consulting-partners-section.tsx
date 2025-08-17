import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ConsultingPartnerProps {
    title: string
    description: string
    expertiseTitle: string
    expertiseList: string[]
    logoSrc: string
    logoAlt: string
    buttonText: string
    buttonHref: string
}

function ConsultingPartner({
    title,
    description,
    expertiseTitle,
    expertiseList,
    logoSrc,
    logoAlt,
    buttonText,
    buttonHref,
}: ConsultingPartnerProps) {
    return (
        <div className="bg-white rounded-lg ">
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-800 ,t-2 text-base leading-relaxed">{description}</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Left Column: Content */}
                <div className="lg:col-span-2 space-y-6">

                    <div>
                        <h4 className="text-lg font-semibold mt-5 text-gray-900 mb-3">{expertiseTitle}</h4>
                        <ul className="space-y-2">
                            {expertiseList.map((item, index) => (
                                <li key={index} className="flex align-center items-start">
                                    <span className="w-2 h-2 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span className="text-gray-800 text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="pt-4 ml-5 flex gap-4  items-center">
                        <p className="text-gray-800 text-sm ">For more information, visit:</p>
                        <Link
                            href={buttonHref}
                            className="inline-flex items-center px-4 py-2  border-[#182D4C] border-2 text-gray-700 text-sm font-medium hover:bg-[#182D4C] hover:text-white transition-colors duration-300"
                        >
                            {buttonText}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>

                {/* Right Column: Logo */}
                <div className="flex justify-start items-start">
                    <Image
                        src={logoSrc || "/placeholder.svg"}
                        alt={logoAlt}
                        width={250}
                        height={120}
                        className="object-contain max-w-full h-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default function ConsultingPartnersSection() {
    const partners = [
        {
            title: "ekosgen consulting",
            description:
                "ekosgen provides consultancy and research services on economic development and social impact for public, private and third sector commissioners, consultants in policy advice and delivering strong local, learning and clients from public, private and third sector organisations. We work with clients to provide understanding and realistic, affordable and workable strategies to achieve their desired outcomes.",
            expertiseTitle: "OUR EXPERTISE",
            expertiseList: [
                "Economic development",
                "Business and sectors",
                "Education and skills",
                "Culture, tourism and leisure",
                "Digitisation and innovation",
                "Health and social care",
                "Climate action/climate and levelling",
                "Housing and planning",
                "Science and local skills policy",
                "Community and housing",
                "Property holding and development",
            ],
            logoSrc: "/what-we-do/eksogen.svg",
            logoAlt: "Ekosgen logo",
            buttonText: "Ekosgen",
            buttonHref: "#",
        },
        {
            title: "Winning Moves",
            description:
                "Winning Moves offers fast core and complementary services. As flagship benchmarking solutions, Benchmark Ireland, offers critical and evidence-based insights to help businesses grow in Ireland. Engage in benchmarking, Benchmark Ireland offers critical and evidence-based insights to help businesses grow in Ireland. Engage in benchmarking, Benchmark Ireland offers critical and evidence-based insights to help businesses grow in Ireland. Backed by first deep expertise in data and software solutions, Winning Moves also provides digital consultancy in business support organisations to help SMEs increase productivity, efficiency and resilience.",
            expertiseTitle: "Our expertise includes:",
            expertiseList: [
                "Benchmarking and business diagnostic tools and platforms",
                "Business Support",
                "New technologies and lean",
                "Digital skills and connectivity",
                "Energy efficiency",
                "Sustainability",
                "Research and innovation",
                "Resource efficiency and the circular economy",
            ],
            logoSrc: "/what-we-do/winning-moves.svg",
            logoAlt: "Winning Moves logo",
            buttonText: "Winning Moves",
            buttonHref: "#",
        },
    ]

    return (
        <section className="py-12 px-4 md:px-8 lg:px-16">
            <div className="max-w-[1366px] mx-auto space-y-8">
                {partners.map((partner, index) => (
                    <ConsultingPartner key={index} {...partner} />
                ))}
            </div>
        </section>
    )
}
