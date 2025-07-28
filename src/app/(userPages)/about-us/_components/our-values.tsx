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
      "We work with thousands of businesses and individuals every day and will expand our reach to engage even more.",
  },
  {
    id: "outstanding-talent",
    image: "/about/our-values-02.svg", 
    title: "Outstanding talent",
    description:
      "We will continue to be recognised and accredited as a leading employer, attracting and retaining a diverse and highly skilled workforce.",
  },
  {
    id: "trusted-partner",
    image: "/about/our-values-03.svg", 
    title: "Trusted partner",
    description:
      "We will deliver meaningful outcomes by continuing to bring together insight, strategy, and action across our network of partners.",
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
