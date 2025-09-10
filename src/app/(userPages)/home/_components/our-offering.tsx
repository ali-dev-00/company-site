import Image from "next/image"
import Link from "next/link"

interface OfferCard {
  id: string
  image: string // Background image for the card
  linkHref: string
  // Properties for the overlay content - now consistent for all
  overlayTitle: string
  overlaySubtitle?: string
  overlayDescription?: string
  showRedUnderline?: boolean // Specific to Adult Courses
}

const offerings: OfferCard[] = [
  {
    id: "adult-courses",
    image: "/home/our-offer-01.png",
    linkHref: "/courses",
    overlayTitle: "Adult Courses",
    overlayDescription: "Explore our range of accredited training programs designed for skill development and career advancement.",
  },
  {
    id: "business-setup",
    image: "/home/our-offer-02.png",
    linkHref: "/courses",
    overlayTitle: "Business Setup",
    overlayDescription: "Training and support for entrepreneurs and SMEs to start, sustain, and scale their businesses.",
  },
  {
    id: "events-networking",
    image: "/home/our-offer-03.png",
    linkHref: "/courses",
    overlayTitle: "Events & Networking",
    overlayDescription: "Join workshops, seminars, and networking sessions to connect with professionals and grow your opportunities.",
  },
]

export default function OurOfferings() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
      {offerings.map((offer) => (
        <Link
          key={offer.id}
          href={offer.linkHref}
          className="relative block rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
        >
          <div className="relative w-full h-48">
            <Image
              src={offer.image || "/placeholder.svg"}
              alt={offer.overlayTitle}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            {/* Overlay that appears on hover for all cards */}
            <div className="absolute inset-0 bg-black/90 bg-opacity-70 flex flex-col  p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <div className="max-w-[150px]">
               <h3 className="text-3xl font-bold mb-2">
                {offer.overlayTitle}
              </h3>
              <div className="flex items-center w-full">
                <div className="h-[4px] bg-[#ff2424] w-16"></div>
                <div className="h-[2px] bg-gray-200 flex-grow"></div>
              </div>
             </div>
              <p className="text-sm mt-2">{offer.overlayDescription}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
