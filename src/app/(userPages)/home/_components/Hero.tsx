import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative bg-[#F4F2F2] mx-auto h-screen max-h-[600px] w-full mb-40 lg:mb-48 xl:mb-50">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/home/hero.png"
          alt="Team collaboration in office environment"
          fill
          className="object-cover object-center sm:object-center md:object-center"
          priority
        />
      </div>

     <div className="w-full max-w-[1366px] bottom-0 mx-auto ">
         {/* Red Overlay Content */}
      <div className="absolute z-10 -bottom-43 px-4 md:px-8 lg:px-16 inset-0 flex items-end mx-auto ">
        <div className="w-full relative overflow-hidden border-t-4  bg-red-600/80 bg-opacity-95 px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-14 lg:px-24 lg:py-16 xl:px-28 xl:py-16">
          <div className="relative max-w-full sm:max-w-4xl lg:max-w-5xl">
         
            <h1 className="text-2xl font-bold z-50 text-white mb-4 sm:text-3xl sm:mb-5 md:text-4xl md:mb-6  lg:mb-6">
              We are the Growth Company
            </h1>

            {/* Decorative Line */}
            <div className="relative w-full max-w-120 h-1 mb-6 sm:mb-7 md:mb-8">
              <div className="absolute inset-0 h-[2px] bg-gray-200/80"></div>
              <div className="absolute left-0 top-0 h-1 w-20 sm:w-24 md:w-28 lg:w-32 bg-black"></div>
            </div>

            {/* Subtitle */}
            <p className="text-sm text-white mb-4 font-medium sm:text-base sm:mb-5 md:mb-6 ">
              We are a leading social enterprise delivering insight, business, employment and skills support.
            </p>

            {/* Description */}
            <p className="text-sm text-white leading-relaxed max-w-full sm:text-base  md:text-base md:max-w-3xl lg:max-w-4xl">
              Working with our partners, customers and colleagues, we are proud to be a national exemplar for inclusive
              growth driving economic, social and environmental change.
            </p>
          </div>
          <div className="bg-black/6 top-[-150px] -left-[-94.7px] bottom-[-350px] rotate-45 w-[180px] h-[600px] absolute "/>
        </div>
      </div>
     </div>
    </section>
  )
}
