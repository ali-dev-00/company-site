import Image from "next/image"

export default function WhatWeServeSection() {
  const services = [
    "Government ministries and departments",
    "Civil servants and local authorities",
    "Private companies and NGOs",
    "Community organizations and job seekers",
    "Youth and return-to-work programmes",
  ]

  return (
    <section
    className="relative w-full bg-white "
    style={{
      backgroundImage: 'url("/home/dotted-pattern.svg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
      <div className="max-w-[1366px] w-full mx-auto px-4 md:px-8 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="lg:pr-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900  mb-6">Who We Serve</h2>
          <ul className="text-sm text-black  leading-relaxed list-disc pl-5 space-y-2">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
        {/* Right Column: Images */}
        <div className="relative h-[400px] lg:h-[500px] w-full flex justify-center items-center">
          <div className="flex gap-4 h-full w-full justify-center items-start">
            <div className="relative w-1/2 h-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/home/who-we-serve-01.svg"
                alt="Close up of hands typing on a laptop keyboard"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <div className="relative w-1/2 h-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/home/who-we-serve-02.svg"
                alt="Top down view of a wooden table with laptops, coffee cups, and a notebook"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
