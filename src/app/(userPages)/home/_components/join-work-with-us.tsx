import { ArrowRight } from "lucide-react"
import TitleWithUnderline from "../../components/common/Title-with-underline"

export default function JoinWorkWithUs() {
  return (
    <section className="py-16 ">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Join us Card */}
          <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-8 hover:scale-101 transform group">
            <div className="mb-6 max-w-[120px]">
              <TitleWithUnderline title="Join Us" />
            </div>

            <div className="mb-8 min-h-[100px]">
              <p className="text-gray-600 text-base leading-relaxed max-h-[120px] overflow-hidden">
                Believe in our purpose? Are you passionate, innovative, enterprising and inclusive? We&apos;d love you to
                come and work for the Growth Company.
              </p>
            </div>

            <a
              href="/careers"
              className="hover:underline   inline-flex items-center text-[#ff2424] hover:text-red-600 font-medium text-base transition-all duration-300 group"
            >
              See our current opportunities
              <ArrowRight className="ml-2 h-5 w-5 group-hover:rotate-[-45deg] transition-transform duration-300" />
            </a>
          </div>

          {/* Work with us Card */}
          <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-8 hover:scale-101 transform group">
          <div className="mb-6 max-w-[250px]">
              <TitleWithUnderline title="Work With Us" />
            </div>

            <div className="mb-8 min-h-[100px]">
              <p className="text-gray-600 text-base leading-relaxed max-h-[120px] overflow-hidden">
                We work collaboratively with our extensive network of private, public and third sector partners, across
                a range of sectors, regionally and nationally. Connect with us and help us to be stronger together.
              </p>
            </div>

            <a
              href="/partnerships"
              className="inline-flex items-center hover:underline text-[#ff2424] hover:text-red-600 font-medium text-base transition-all duration-300 group"
            >
              Talk to our team
              <ArrowRight className="ml-2 h-5 w-5 group-hover:rotate-[-45deg] transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
