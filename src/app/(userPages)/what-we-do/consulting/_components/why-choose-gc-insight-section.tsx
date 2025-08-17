import TitleWithUnderline from "@/app/(userPages)/components/common/Title-with-underline"
import Image from "next/image"

export default function WhyChooseGCInsightSection() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-100">
      <div className="max-w-[1366px] mx-auto">
        <div className="flex items-center">
          {/* Left Column: Text Content */}
          <div className="w-3/4 pr-5 space-y-6">
            <div className="max-w-[450px]">
              <TitleWithUnderline title="Why Choose GC Insight?" />
            </div>

            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                We understand that economic growth starts with ambition, but requires a good strategy, effective
                operational design and the ability to mix necessary competencies around skills, employment, and physical
                regeneration, to ensure delivery happens effectively and quickly. With over 30 years of practical
                experience, we make the delivery and implementation of your economic ambition a reality.
              </p>

              <p>
                Building on the extensive capability within the Growth Company group, as well as our network of partners
                and associates, GC Insight can support you to achieve your economic goals for your organisation,
                industry, or area. With an ethos grounded in trust and collaboration, we put your needs and interests
                first to respond reliably and provide the expert capability you need.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-1/4 relative h-64 rounded-tr-lg rounded-bl-lg overflow-hidden ">
            <Image
              src="/what-we-do/why-choose-gc-insights.svg" // Adjust the image path if necessary
              alt="Business professionals in a meeting discussing strategy"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#ff2424]"></div>
              <div className="absolute bg-gray-100  h-[150px] w-[120px] rotate-45 -bottom-16 -right-15" ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
