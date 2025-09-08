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
    title: "Purpose-Driven Work.",
    description:
      "Join a team where your work has an impact.? Every day, you'll be involved in helping advance our cause through practical experience training..",
    iconBgColor: "bg-blue-50", 
  },
  {
    id: "secured-future",
    url: "/images/why-join-us-02.svg", 
    title: "Continuous Learning.",
    description:
      "We practice what we preach. We provide free accredited training courses to help you improve your abilities, obtain certifications, and advance your professional development.",
    iconBgColor: "bg-green-50",
  },
  {
    id: "learning-opportunity",
    url: "/images/why-join-us-03.svg", 
    title: "Collaborative Environment.",
    description:
      "Join the diverse and supportive family. In our view, the most effective ideas are those that result from a collaborative team effort and shared experiences.",
    iconBgColor: "bg-blue-50", 
  },
  {
    id: "upgrade-skills",
    url: "/images/why-join-us-04.svg",
    title: "Secure Your Future.",
    description:
      "We aim to establish a stable and expanding organization.? Engage with us to construct a prosperous career path at our firm that prioritizes the well-being of its workforce and populace.",
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
              Reasons to join our mission driven team? Read more about.
            </h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-md">
             We prioritize your well-being and career advancement. We&apos;ve designed a supportive environment and prestigious benefits because we believe that to empower others, we must first empower our own team.
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
