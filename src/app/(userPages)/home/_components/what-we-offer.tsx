import { Card, CardContent } from "@/components/ui/card"

export default function WhatWeOfferSection() {
  const offers = [
    {
      image: "/home/what-we-offer-01.svg", 
      title: "Cleaning",
      description: [
        "Level 2 Certificate in Cleaning Principles",
        "Level 2 Certificate in Cleaning and Support Services Skills",
      ],
    },
    {
      image: "/home/what-we-offer-02.svg", 
      title: "Conflict Management",
      description: ["Level 2 Award in Conflict Management", "Level 2 Award in Conflict Management in Public Sector"],
    },
    {
      image: "/home/what-we-offer-03.svg", 
      title: "Construction",
      description: ["Level 1 Award in Health and Safety within a Construction Environment"],
    },
    {
      image: "/home/what-we-offer-04.svg", 
      title: "COSHH",
      description: ["Level 2 Award in the Control of Substances Hazardous to Health"],
    },
    {
      image: "/home/what-we-offer-05.svg", 
      title: "Customer Service",
      description: ["Level 2 Award in Customer Service"],
    },
    {
      image: "/home/what-we-offer-06.svg", 
      title: "Environmental Conservation",
      description: ["Level 1 Award in Environmental Sustainability Awareness"],
    },
  ]

  return (
    <section className="max-w-[1366px] w-full mx-auto px-4 md:px-8 lg:px-16 py-16 bg-white">
      <div className=" text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">What We Offer</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 text-sm mb-10">
          To empower individuals, communities, and organizations through practical, accessible training that leads to
          personal growth, meaningful employment, and long-term economic development. We believe that building skills is
          the first step toward building stronger futures.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, index) => (
            <Card
              key={index}
              className="flex flex-col items-start p-6 rounded-xl shadow-sm border-gray-200 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-200 mb-4">
                  {/* Replaced icon with image */}
                  <img src={offer.image} alt={offer.title} className="w-6 h-6 object-cover rounded-full" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-left">{offer.title}</h3>
                {offer.description.map((line, descIndex) => (
                  <p key={descIndex} className="text-[#3B3B3B]  text-sm text-left">
                    {line}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
