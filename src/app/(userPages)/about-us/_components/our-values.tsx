import type React from "react"
import Image from "next/image"

interface ValueProp {
  id: string
  image: string
  title: string
  description: string
}

const valueProps: ValueProp[] = [
  {
    id: "unrivalled-reach",
    image: "/about/our-values-01.svg", 
    title: "Unrivalled Reach",
    description:
      "We work in partnership with a variety of partners, including government ministries and local groups, and aim to broaden our scope to include more students and institutions.",
  },
  {
    id: "outstanding-talent",
    image: "/about/our-values-02.svg", 
    title: "Outstanding talent",
    description:
      "Our training programs are recognized and accredited as leading trainers, offering certified courses that are tailored to the real-world industry demands and challenges.",
  },
  {
    id: "trusted-partner",
    image: "/about/our-values-03.svg", 
    title: "Trusted partner",
    description:
      "We achieve these results by combining expert insight, practical strategy, and active collaboration with our diverse group of collaborators.",
  },
]

export default function OurValues() {
  return (
    <section className="py-16 bg-[#F4F2F2]">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {valueProps.map((prop) => (
            <div key={prop.id} className="flex flex-col items-center p-4">
              {/* Image as image */}
              <div className="bg-[#ff2424] p-4 rounded-full mb-6">
                <Image
                  src={prop.image}  // Use the image path
                  alt={prop.title}
                  width={32}        // Set width
                  height={32}       // Set height
                  className="object-cover"
                />
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{prop.title}</h3>
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
