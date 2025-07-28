import Image from 'next/image'

export default function WhatWeStandFor() {
  const cards = [
    {
      image: '/about-us/where-we-stand-01.svg', // Use the correct path your image
      title: "Problem solvers",
      description: "using skills to address unemployment and capacity gaps",
      link: "#",
    },
    {
      image: '/about-us/where-we-stand-02.svg', // Use the correct path your image
      title: "Educators",
      description: "committed to practical, hands-on learning.",
      link: "#",
    },
    {
      image: '/about-us/where-we-stand-03.svg', // Use the correct path your image
      title: "Partners",
      description: "working alongside institutions to build a stronger future",
      link: "#",
    },
  ]

  return (
    <section className="bg-[#1a1a1a] py-16">
      <div className="max-w-[1366px] mx-auto px-4 sm:px-6 lg:px-16 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          What We <span className="text-custom-red">Stand For</span>
        </h2>
        <p className="text-lg text-gray-300 mb-12">We are not just a training company. We are:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-white hover:bg-[#262525] hover:shadow-md rounded-xl p-8 shadow-lg flex flex-col items-start text-left"
            >
              <div className="card-content-wrapper">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={48} // Adjust width and height according to your design
                  height={48}
                  className="mb-4 transition-colors duration-300 ease-in-out group-hover:text-white"
                />
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300 ease-in-out">
                  {card.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white text-base mb-4 transition-colors duration-300 ease-in-out">
                  {card.description}
                </p>
                <a
                  href={card.link}
                  className="text-custom-red group-hover:text-white text-sm font-semibold hover:underline transition-colors duration-300 ease-in-out"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
