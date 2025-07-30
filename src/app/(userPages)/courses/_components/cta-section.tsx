import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section className="py-12  px-4 md:px-6 lg:px-8">
      <div className="relative  bg-[#1B283F] rounded-xl shadow-lg overflow-hidden p-6 md:p-10 lg:p-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 md:w-2/3 lg:w-3/4">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Join HORUMARKA Dadka Now
          </h2>
          <p className="text-gray-300 text-base md:text-lg lg:text-xl mb-6 max-w-2xl">
            With our responsive themes and mobile and desktop apps, enjoy a seamless experience on any device so will
            your blog the best visitors
          </p>
          <Button className="bg-[#FF2424] hover:bg-[#FF2424]/90 text-white  py-5 px-8 rounded-md text-lg">
            Join now
          </Button>
        </div>

        {/* Abstract Image */}
        <div className="hidden md:absolute w-full h-48 md:w-1/3 md:h-auto  md:bottom-0 right-0 md:flex justify-center items-center md:justify-end ">
          <Image
            src="/courses/cta-section.png" 
            alt="Abstract geometric pattern"
            width={250} 
            height={250} 
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}
