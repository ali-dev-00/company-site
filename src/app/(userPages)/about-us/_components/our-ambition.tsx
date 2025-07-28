import Image from "next/image"
import TitleWithUnderline from "../../components/common/Title-with-underline"

export default function OurAmbition() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Section - Text Content */}
          <div className="flex flex-col justify-center">
            {/* Section Header */}
            <div className="mb-8 max-w-[230px]">
           <TitleWithUnderline title="Our Ambition" />
            </div>

            {/* Descriptive Paragraphs */}
            <div className="space-y-6 text-gray-600 text-base leading-relaxed">
              <p>
                Our ambition is for a society where economic growth and prosperity is inclusive, sustainable and leaves
                no person or community behind. The future will help to create will be founded on promoting
                environmentally sustainable growth - with thriving businesses, creating well-paid jobs for empowered
                individuals across our diverse communities.
              </p>
              <p>
                We understand that helping people, businesses, and places to thrive requires more than ambition alone.
                Together, we shape stronger futures.
              </p>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="relative w-full h-64 lg:h-auto lg:min-h-[350px] flex items-center justify-center">
            <Image
              src="/about/our-ambition.svg"
              alt="Person pointing at whiteboard"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
            {/* Red line at the bottom of the image */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#ff2424]"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
