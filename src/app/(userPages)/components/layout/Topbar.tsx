import { MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TopBar() {
  return (
    <div className="w-full bg-white max-w-[1366px] mx-auto text-gray-300 text-xs py-2 px-4 md:px-8 lg:px-16 flex justify-between items-center">
      {/* Left Section: Location and Phone */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center gap-1 text-[#1E1E1E]">
          <MapPin className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
          <span className="hidden sm:inline">Hargeisa, Somaliland</span>
          <span className="sm:hidden">Hargeisa</span>
        </div>
        <div className="flex items-center gap-1 text-[#1E1E1E]">
          <Phone className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
          <span>+252 636972482</span>
        </div>
      </div>

      {/* Right Section: Social Media Icons */}
      <div className="flex items-center space-x-3">
        <Link href="#" aria-label="YouTube" className="hover:opacity-80 transition-opacity">
          <Image src="/socials/youtube.svg" alt="YouTube" width={15} height={15} className="w-4 h-4 md:w-6 md:h-6" />
        </Link>
        <Link href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
          <Image src="/socials/instagram.svg" alt="Instagram" width={15} height={15} className="w-4 h-4 md:w-5 md:h-5" />
        </Link>
        <Link href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
          <Image src="/socials/facebook.svg" alt="Facebook" width={15} height={15} className="w-4 h-4 md:w-5 md:h-5" />
        </Link>
        <Link href="#" aria-label="X (Twitter)" className="hover:opacity-80 transition-opacity">
          <Image src="/socials/x.svg" alt="X (Twitter)" width={15} height={15} className="w-4 h-4 md:w-4 md:h-4" />
        </Link>
        <Link href="#" aria-label="TikTok" className="hover:opacity-80 transition-opacity">
          <Image src="/socials/tiktok.svg" alt="TikTok" width={15} height={15} className="w-4 h-4 md:w-4 md:h-4" />
        </Link>
      </div>
    </div>
  )
}
