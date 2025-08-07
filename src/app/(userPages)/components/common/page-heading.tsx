import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface PageHeadingProps {
  currentPage: string,
  mainPage?: React.ReactNode | null;
}

export default function PageHeading({ currentPage , mainPage  }: PageHeadingProps) {
  return (
    <section className="py-3 bg-white">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16">
        <nav className="text-sm font-medium" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-1">
            <li>
              <Link href="/home" className="text-gray-600 hover:text-gray-900 transition-colors">
               {mainPage ?? 'Home' }
              </Link>
            </li>
            <li>
              <span className="text-[#ff2424]"><ChevronRight size={15}/></span>
            </li>
            <li>
              <span className="text-[#ff2424]">{currentPage}</span>
            </li>
          </ol>
        </nav>
      </div>
    </section>
  )
}
