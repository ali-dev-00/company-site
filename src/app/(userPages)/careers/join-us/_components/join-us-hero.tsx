import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function JoinUsHero() {
  return (
    <section className="relative w-full max-h-[700px] h-screen flex items-center justify-center text-white overflow-hidden">
      <Image
        src="/images/join-us-hero.png"
        alt="Background image of an office desk"
        fill
        priority
        className="object-cover z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 py-12 md:py-24 lg:py-32 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">JOIN US</h1>
        <p className="text-sm max-w-2xl mb-8 leading-relaxed">
          We&apos;re not just a team, we are essentially bringing people together in East Africa through Horumarka Dadka. If you&apos;re interested in enhancing your skills and training experience, join our team to build your career.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="#" passHref>
            <Button
              className="px-8 py-5 text-base font-medium rounded-md shadow-lg transition-colors"
              style={{ backgroundColor: "#FF2424", color: "white" }}
            >
              Join the team
            </Button>
          </Link>
          <Link href="#" passHref>
            <Button
              variant="outline"
              className="px-8 py-5 text-base font-medium rounded-md transition-colors border-white text-white bg-transparent hover:bg-white/10"
            >
              Culture
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
