import Image from "next/image"

export default function SustainabilityCommitmentsSection() {
  const certifications = [
    {
      logoSrc: "/images/net-zero-01.svg",
      logoAlt: "ISO 14001 UKAS Certification",
      title: "ISO 14001",
      description: (
        <>
          Internationally recognised standard for{" "}
          <span className="text-red-600 font-medium">environmental management systems</span>
        </>
      ),
    },
    {
      logoSrc: "/images/net-zero-02.svg",
      logoAlt: "Race to Zero Logo",
      title: "Race to Zero",
      description: (
        <>
          Pledged commitment to the United Nations <span className="text-red-600 font-medium">Race to Zero</span>
        </>
      ),
    },
    {
      logoSrc: "/images/net-zero-03.svg",
      logoAlt: "Carbon Literate Organisation Badge",
      title: "Carbon Literacy",
      description: (
        <>
          Accredited as a <span className="text-red-600 font-medium">Carbon Literate &apos;Bronze&apos; Organisation</span>
        </>
      ),
    },
  ]

  return (
    <section className="py-12  bg-white">
      <div className="max-w-[1366px] px-4 md:px-8 lg:px-16 mx-auto">
        <div className="space-y-12">
          {/* Introduction Text */}
          <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
            <p>
              As an award-winning social enterprise, we&apos;ve championed sustainability across Greater Manchester and
              beyond for nearly two decades, recognising that protecting our planet aligns with sustainable economic
              growth. We know that tackling climate change requires collective effort, and we&apos;re well-positioned to
              drive positive change.
            </p>
            <p>
              Our commitment is central to our mission, embedding sustainable principles into everything we do while
              reducing our own emissions and minimising our environmental impact.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-4">
                {/* Logo */}
                <div className="relative w-full h-32 flex items-center justify-center">
                  <Image
                    src={cert.logoSrc || "/placeholder.svg"}
                    alt={cert.logoAlt}
                    width={400}
                    height={400}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>

                {/* Title */}
                <h3 className="text-md  text-gray-700">{cert.title}</h3>

                {/* Description */}
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
