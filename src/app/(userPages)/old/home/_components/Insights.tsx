"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function Insights() {
  const updates = [
    {
      id: 1,
      image: "/home/insights-01.svg",
      author: "Alec Whitten",
      date: "17 Jan 2022",
      title: "Fundraising in Nigerian village",
      description:
        "A young girl received life‑saving surgery thanks to donations, giving her a second chance at a healthy future.",
      link: "#",
    },
    {
      id: 2,
      image: "/home/insights-02.svg",
      author: "Demi Wilkinson",
      date: "16 Jan 2022",
      title: "Local food lunch for donation",
      description:
        "After a flood destroyed their home, we helped a family rebuild and access food, shelter, and emotional support.",
      link: "#",
    },
    {
      id: 3,
      image: "/home/insights-03.svg",
      author: "Candice Wu",
      date: "15 Jan 2022",
      title: "Donation items for the children",
      description:
        "We provided clean drinking water to a remote village, preventing disease and improving daily life for over 300 families.",
      link: "#",
    },
    {
      id: 4,
      image: "/home/insights-04.svg",
      author: "Sarah Johnson",
      date: "14 Jan 2022",
      title: "Educational support program",
      description:
        "New educational initiatives launched to support children's learning and development in underserved communities.",
      link: "#",
    },
    {
      id: 5,
      image: "/home/insights-01.svg",
      author: "Michael Chen",
      date: "13 Jan 2022",
      title: "Healthcare outreach mission",
      description:
        "Mobile healthcare units deployed to provide essential medical services to remote areas lacking proper facilities.",
      link: "#",
    },
  ]

  const [current, setCurrent] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3.5)

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {

        setCardsPerView(1.3)
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2.5)
      } else {
        setCardsPerView(3.5)
      }
    }

    updateCardsPerView()
    window.addEventListener("resize", updateCardsPerView)
    return () => window.removeEventListener("resize", updateCardsPerView)
  }, [])

  // Reset current index when cards per view changes
  useEffect(() => {
    setCurrent(0)
  }, [cardsPerView])

  const CARD_WIDTH_PERCENT = 100 / cardsPerView
  const maxIndex = Math.max(0, updates.length - Math.floor(cardsPerView))

  const prev = () => setCurrent((p) => Math.max(0, p - 1))
  const next = () => setCurrent((p) => Math.min(maxIndex, p + 1))

  const canPrev = current > 0
  const canNext = current < maxIndex

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1366px] mx-auto py-8 md:py-12 lg:py-16">
        {/* Header container with responsive padding */}
        <div className="px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2 lg:gap-4 mb-8 lg:mb-10">
            <div className="w-full lg:w-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3 lg:mb-2">
                Insights & Resources
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-xl leading-relaxed">
              Explore expert articles on training, employment, and community development.
              </p>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex flex-col items-end gap-3">
             <Link className="text-gray-800 px-4 py-2 hover:bg-gray-100 rounded-full border-gray-200 border hover:text-black text-sm p-0 h-auto font-medium" href="#">View all</Link>
              <div className="flex gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  className={`cursor-pointer w-10 h-10 rounded-full border-[#FF2424] text-[#FF2424] ${
                    canPrev ? "hover:bg-[#FF2424]/10" : "opacity-50 cursor-not-allowed"
                  }`}
                  disabled={!canPrev}
                  onClick={prev}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className={`cursor-pointer w-10 h-10 rounded-full bg-[#FF2424] text-white border-[#FF2424] ${
                    canNext ? "hover:bg-[#FF2424]/90" : "opacity-50 cursor-not-allowed"
                  }`}
                  disabled={!canNext}
                  onClick={next}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Mobile/Tablet navigation */}
            <div className="flex lg:hidden w-full justify-between items-center">
              <Button asChild variant="link" className="text-gray-700 hover:text-black p-0 h-auto font-medium text-sm">
                <a href="#" className="flex items-center gap-1">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <div className="flex gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  className={`cursor-pointer w-9 h-9 md:w-10 md:h-10 rounded-full border-[#FF2424] text-[#FF2424] ${
                    canPrev ? "hover:bg-[#FF2424]/10" : "opacity-50 cursor-not-allowed"
                  }`}
                  disabled={!canPrev}
                  onClick={prev}
                >
                  <ChevronLeft className="h-3 w-3 md:h-4 md:w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className={`cursor-pointer w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#FF2424] text-white border-[#FF2424] ${
                    canNext ? "hover:bg-[#FF2424]" : "opacity-50 cursor-not-allowed"
                  }`}
                  disabled={!canNext}
                  onClick={next}
                >
                  <ChevronRight className="h-3 w-3 md:h-4 md:w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive carousel with proper padding */}
        <div className="relative pl-4 md:pl-8 lg:pl-16 overflow-hidden pb-5">
          <div
            className="flex gap-3 md:gap-4 lg:gap-6 transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${current * CARD_WIDTH_PERCENT}%)` }}
          >
            {updates.map((u) => (
              <div key={u.id} style={{ width: `${CARD_WIDTH_PERCENT}%` }} className="flex-shrink-0">
                <Card className="h-full py-0 rounded-lg md:rounded-xl border-none shadow-none  hover:border border-gray-50 overflow-hidden group hover:shadow-md transition-shadow duration-200">
                  <div className="relative h-40 sm:h-44 md:h-48 lg:h-52 w-full ">
                    <div className="w-full h-full rounded-md md:rounded-lg overflow-hidden">
                      <Image
                        src={u.image || "/placeholder.svg"}
                        alt={u.title}
                        fill
                        className="object-cover rounded-md md:rounded-lg"
                      />
                    </div>
                  </div>
                  <CardContent className="pb-5">
                    <p className="text-xs md:text-sm text-gray-900 mb-2">
                      {u.author} • {u.date}
                    </p>
                    <h3 className="cursor-pointer hover:text-[#FF2424] transition-colors duration-200 text-sm sm:text-base md:text-lg font-semibold text-gray-900 group-hover:text-gray-700 mb-2 line-clamp-2">
                      {u.title}
                    </h3>
                    <p className="text-gray-900 text-xs md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">
                      {u.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="flex sm:hidden justify-center mt-6 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                current === index ? "bg-[#FF2424]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
