import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function OpportunitiesSection() {
  const procurementPoints = [
    {
      title: "Be responsible",
      description:
        "we recognise and assess our suppliers on ethical practices, including environmental sustainability, carbon measurement and reduction, and good employment practices.",
    },
    {
      title: "Be inclusive",
      description:
        "we aim to seek out small, local, socially purposeful organisations and suppliers with diverse leaders.",
    },
    {
      title: "Generate social value",
      description:
        "in our tenders, we aim to understand what our suppliers do to make a positive contribution to their communities, our society, the economy and the environment.",
    },
    {
      title: "Achieve value for money",
      description:
        "we aim to achieve the maximum benefit from the resources available to us, maximising economic, social and environmental outcomes.",
    },
    {
      title: "Be fair and transparent",
      description: "we will act with integrity and fairness in the tendering process.",
    },
  ]

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-[1366px] mx-auto">
        <div className="space-y-6">
          {/* Header */}
          <p className="text-gray-800 text-base md:text-lg leading-relaxed">
            We procure a diverse range of goods and services to support our customers, teams and our operations.
          </p>

          {/* Main description */}
          <p className="text-gray-800 text-base md:text-lg leading-relaxed">
            As a supply chain partner, you can play a role in delivering economic growth that is inclusive, sustainable
            and leaves no person or community behind.
          </p>

          {/* Process introduction */}
          <p className="text-gray-800 text-base md:text-lg leading-relaxed">
            Through our procurement processes, we aim to:
          </p>

          {/* Bullet points */}
          <ul className="space-y-4">
            {procurementPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <div className="text-gray-800 text-base md:text-lg leading-relaxed">
                  <strong>{point.title}</strong> – {point.description}
                </div>
              </li>
            ))}
          </ul>

          {/* Two-column section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            {/* Our procurement process */}
            <div className="space-y-4 p-4 border border-gray-200 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Our procurement process</h3>
              <p className="text-gray-700 text-base leading-relaxed">Find out more about our procurement process.</p>
              <Link href="#" className="mt-4 inline-flex items-center text-red-600 hover:underline font-medium text-base">
                Find out more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Opportunities */}
            <div className="space-y-4 p-4 border border-gray-200 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Opportunities</h3>
              <p className="text-gray-700 text-base leading-relaxed">Explore our current and future opportunities</p>
              <Link href="#" className="mt-4 inline-flex items-center text-red-600 hover:underline font-medium text-base">
                Find out more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
