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
    image: "/home/our-offer-01.svg",
    linkHref: "/adult-courses",
    overlayTitle: "Adult Courses",
    overlaySubtitle: "Fully Funded Adult Courses",
    overlayDescription: "Find out more about our fully funded Adult Courses",
    showRedUnderline: true,
  },
  {
    id: "insight",
    image: "/home/our-offer-02.svg",
    linkHref: "/insight",
    overlayTitle: "Insight",
    overlaySubtitle: "Discover key insights", 
    overlayDescription: "Explore data-driven reports and market analysis.", 
    showRedUnderline: true,
  },
  {
    id: "growth-flag",
    image: "/home/our-offer-03.svg",
    linkHref: "/growth-flag",
    overlayTitle: "Growth Flag",
    overlaySubtitle: "Accelerate your growth", // Example subtitle for Growth Flag
    overlayDescription: "Tools and resources to boost your business.", // Example description for Growth Flag
    showRedUnderline: true, // No red underline for Growth Flag
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

                {/* Overlay that appears on hover for all cards with consistent text structure */}
                <div className="absolute inset-0 bg-gray-900/90 bg-opacity-70 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold mb-2">{offer.overlayTitle}</h3>
                  {offer.showRedUnderline && <div className="w-12 h-1 bg-[#ff2424] mb-2"></div>}
                  {offer.overlaySubtitle && <p className="text-sm mb-1">{offer.overlaySubtitle}</p>}
                  {offer.overlayDescription && <p className="text-sm">{offer.overlayDescription}</p>}
                </div>
              </div>
            </Link>
          ))}
        </div>
     
  )
}
