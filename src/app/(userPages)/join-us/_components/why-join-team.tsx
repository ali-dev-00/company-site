import type React from "react"

interface BenefitCard {
  id: string
  url: string 
  title: string
  description: string
  iconBgColor: string
}

const benefits: BenefitCard[] = [
  {
    id: "team-work",
    url: "/images/why-join-us-01.svg", 
    title: "Team work",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    iconBgColor: "bg-blue-50", 
  },
  {
    id: "secured-future",
    url: "/images/why-join-us-02.svg", 
    title: "Secured Future",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    iconBgColor: "bg-green-50",
  },
  {
    id: "learning-opportunity",
    url: "/images/why-join-us-03.svg", 
    title: "Learning Opportunity",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    iconBgColor: "bg-blue-50", 
  },
  {
    id: "upgrade-skills",
    url: "/images/why-join-us-04.svg",
    title: "Upgrade Skills",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    iconBgColor: "bg-pink-50", 
  },
]

export default function WhyJoinTeam() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section - Text Content */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">BENEFITS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Why you Should Join Our Awesome Team
            </h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-md">
              we want to feel like home when you are working at JMC[Japan Marketing & Consultancy Limited] & for that we
              have curated a great set of benefits for you.It all starts with the free lunch!
            </p>
          </div>

          {/* Right Section - Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="flex flex-col items-start hover:shadow-md p-4 rounded-lg">
                {/* Icon Image */}
                <div className={`p-4 rounded-lg mb-4 ${benefit.iconBgColor}`}>
                  <img src={benefit.url} alt={benefit.title} className="w-6 h-6" />
                </div>
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
