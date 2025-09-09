import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface OfferCard {
  id: string;
  image: string; // Background image for the card
  linkHref: string;
  // Properties for the overlay content - now consistent for all
  overlayTitle: string;
  overlaySubtitle?: string;
  overlayDescription?: string;
}

const offerings: OfferCard[] = [
  {
    id: "adult-courses",
    image: "/home/our-offer-01.svg",
    linkHref: "/courses",
    overlayTitle:
      "Level 2 Award for Security Officers in Private Security Industry",
  },
  {
    id: "insight",
    image: "/home/our-offer-02.svg",
    linkHref: "/courses",
    overlayTitle: "Level 4 Award in Internal Quality Assurance",
  },
  {
    id: "growth-flag",
    image: "/home/our-offer-03.svg",
    linkHref: "/courses",
    overlayTitle: "Level 2 Award in Fire Safety",
  },
];

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
            <div className="absolute inset-0 bg-black/50 bg-opacity-70 flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-bold mb-2 ">{offer.overlayTitle}</h3>
              <span className="flex items-center align-baseline text-sm gap-1">
                More Detail <ArrowRight className="h-4" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
