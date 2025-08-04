import Image from "next/image"
import Link from "next/link"

export default function ContactUsBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background pattern image */}
      <Image
        src="/images/contact-us-background.png"
        alt="Background pattern"
        fill
        className="object-cover opacity-20 z-0"
        sizes="100vw"
      />

      <div className="relative py-12 z-10 max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between">

        {/* Left Section - Text and Button */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact us</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-lg lg:max-w-none mx-auto lg:mx-0">
            If you would like more information about any of our services, please get in touch.
          </p>
          <Link
            href="/contact-us"
            className="z-12 inline-block px-8 py-3 border border-gray-300 text-gray-800 font-medium rounded hover:bg-gray-100 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Right Section - Image with diagonal red line */}
        <div className="relative w-full lg:w-1/2 lg:absolute lg:right-0 top-0 flex items-center justify-end lg:min-h-[280px]">
          <Image
            src="/images/mask-group.svg"
            alt="People smiling"
            fill
            className="object-cover object-right"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />     
        </div>
      </div>
    </section>
  )
}
