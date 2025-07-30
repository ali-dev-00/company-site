import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[600px] lg:h-[500px] max-h-[700px] mb-48 lg:mb-28 md:mb-36 ">
      {/* Background Image */}
      <Image
        src="/courses/courses-hero.png"
        alt="Person studying on a laptop"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80 bg-opacity-50 z-10" />

      {/* Text Content */}
      <div className="mt-8 absolute inset-x-0 top-1/3 transform -translate-y-1/2 text-center text-white z-20 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          Learn something new everyday.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-medium">Become professionals and ready to join the world.</p>
      </div>

      {/* Search Bar */}
      <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2 flex justify-center z-30 px-4">
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-full max-w-5xl mx-auto">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">What do you want to learn?</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <Input
              type="text"
              placeholder="Find courses, skills, software, etc"
              className="col-span-1 md:col-span-2 h-12 px-4 rounded-md border border-gray-300 focus:ring-[#FF2424] focus:border-[#FF2424]"
            />
            <Input
              type="text"
              placeholder="Categories"
              className="h-12 px-4 rounded-md border border-gray-300 focus:ring-[#FF2424] focus:border-[#FF2424]"
            />
            <Input
              type="text"
              placeholder="Topic"
              className="h-12 px-4 rounded-md border border-gray-300 focus:ring-[#FF2424] focus:border-[#FF2424]"
            />
            <Button className="bg-[#FF2424] w-full h-12  text-white font-sembold rounded-md">
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
