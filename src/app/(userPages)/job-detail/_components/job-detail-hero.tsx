import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function JobDetailHero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden max-h-[600px]">
      <Image
        src="/images/product-designer-hero.svg"
        alt="Background image of an office desk"
        fill
        priority
        className="object-cover z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 py-12 md:py-24 lg:py-32 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Product designer </h1>
        <p className="text-sm max-w-2xl mb-8 leading-relaxed">
        Job Type: Full Time No of Vacancies:02
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="#" passHref>
            <Button
              className="px-8 py-3 text-base font-medium rounded-md shadow-lg transition-colors"
              style={{ backgroundColor: "#FF2424", color: "white" }}
            >
              Apply Now
            </Button>
          </Link>
          
        </div>
      </div>
    </section>
  )
}
