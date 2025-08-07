import Link from "next/link"
import { ArrowRight } from "lucide-react"
import TitleWithUnderline from "../../components/common/Title-with-underline"

export default function OurCredentials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-8 max-w-[270px]">
          <TitleWithUnderline title="Our Crediantials" />
        </div>

        {/* Descriptive Paragraphs */}
        <div className="space-y-6 mb-12 text-gray-600 text-base leading-relaxed ">
          <p>
            For 35 years, the Growth Company has continued to innovate, finding new ways to help people improve their
            lives; support businesses to grow; and enable places to thrive.
          </p>
          <p>
            Our services work with thousands of individuals and businesses each year and we&apos;re proud of the positive
            difference we make to our customers and our communities.
          </p>
          <p>
            Underpinning our success are our core values and commitment to ensuring quality across all aspects of our
            services and corporate operations. This is evidenced in our external accreditations from ISO 9001 to
            Investors in People.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Accreditations Card */}
          <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-8 border border-gray-100 group">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Accreditations and certifications</h3>
            <p className="text-gray-600 text-sm mb-6">View the full list of our accreditations and certifications.</p>
            <Link
              href="/our-credientials"
              className="inline-flex  hover:underline items-center text-[#ff2424] hover:text-red-600 font-medium text-sm transition-all duration-300 group"
            >
              Find out more
              <ArrowRight className="ml-2 h-4 w-4 group-hover:rotate-[-45deg] transition-transform duration-300" />
            </Link>
          </div>

          {/* Our Story Card */}
          <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-8 border border-gray-100 group">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Our story</h3>
            <p className="text-gray-600 text-sm mb-6">Discover more about our rich heritage.</p>
            <Link
              href="/our-story"
              className="inline-flex items-center hover:underline text-[#ff2424] hover:text-red-600 font-medium text-sm transition-all duration-300 group"
            >
              Find out more
              <ArrowRight className="ml-2 h-4 w-4 group-hover:rotate-[-45deg] transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
