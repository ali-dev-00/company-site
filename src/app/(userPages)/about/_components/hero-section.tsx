import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutHeroSection() {
    return (
        <section style={{ backgroundImage: 'url("/about-us/about-hero.svg")' }} className="bg-cover bg-center bg-fixed relative max-w-[1366px] w-full overflow-hidden py-16 md:py-24 lg:py-16 px-4 md:px-8 lg:px-16 min-h-screen max-h-[600px] flex items-center ">
            <div className="absolute inset-0 bg-black opacity-60" aria-hidden="true"></div>
        
        <div className="absolute inset-0 bg-black opacity-60" aria-hidden="true"></div> {/* Additional dark overlay */}
        <div className="relative z-10 grid items-center gap-8  md:grid-cols-2 lg:gap-12">
          {/* Left Content Area */}
          <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6 text-white">
              Empowering Growth Through <span className="text-[#FF2424]">Skills Training</span>
            </h1>
            <p className="max-w-[600px] text-lg text-white/90 md:text-xl mx-auto md:mx-0">
              We&apos;re on a mission to uplift individuals, institutions, and communities with practical, accredited training
              that drives real-world change.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href="#" passHref>
                <Button className="bg-[#FF2424] hover:bg-red-700 text-white px-8 py-5 text-lg rounded-md shadow-lg transition-colors duration-300">
                  Explore Courses
                </Button>
              </Link>
            </div>
          </div>
  
          {/* Right Section Images */}
          <div className=" hidden relative h-[400px] w-full md:h-[500px] lg:h-[600px] lg:flex items-center justify-center md:justify-end">
            {/* Image 1 */}
            <div className="absolute top-8 right-0 w-[300px] h-[180px] md:w-[400px] md:h-[220px] lg:w-[450px] lg:h-[200px] rounded-xl overflow-hidden shadow-2xl z-20">
              <Image
                src="/about-us/about-hero-01.svg"
                alt="Two hands clasped together"
                fill
                className="object-cover"
              />
            </div>
  
            {/* Image 2 */}
            <div className="absolute top-1/2 mt-20 right-0 -translate-y-1/2 w-[300px] h-[180px] md:w-[400px] md:h-[220px] lg:w-[450px] lg:h-[250px] rounded-xl overflow-hidden shadow-2xl z-10">
              <Image
                src="/about-us/about-hero-02.jpg"
                alt="Smiling woman in a classroom"
                fill
                className="object-cover"
              />
            </div>
  
            {/* Image 3 */}
            <div className="bg-black p-2 absolute bottom-8 left-0 w-[180px] h-[180px] md:w-[220px] md:h-[220px] lg:w-[250px] lg:h-[250px] rounded-3xl overflow-hidden shadow-2xl z-30">
              <Image
                src="/about-us/about-hero-03.svg"
                alt="Smiling man in a classroom"
                fill
                className="w-[100%] h-[100%] pt-2"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
  