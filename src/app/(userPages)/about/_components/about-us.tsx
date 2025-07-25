"use client"

export default function AboutUsSection() {
  return (
    <section className="bg-[#1a1a1a] py-16">
      <div className="max-w-[1366px]  px-4 md:px-8 lg:px-16  mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-[#FF2424]">Us</span>
            </h2>
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              We&apos;re on a mission to uplift individuals, institutions, and communities with practical, accredited
              training that drives real-world change.
            </p>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="group relative bg-[#262525] hover:bg-[#FF2424] p-6 rounded-lg cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-white transition-all duration-500 mb-4">1.</div>
                  <h3 className="text-xl font-semibold text-white mb-3 transition-all duration-500">Who We Are</h3>
                  <p className="text-gray-300 group-hover:text-white text-sm leading-relaxed transition-all duration-500">
                    Humanitas Pedis Ltd is a trusted training provider committed to building human capacity through
                    innovative and impactful programmes.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative bg-[#262525] hover:bg-[#FF2424] p-6 rounded-lg cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-white transition-all duration-500 mb-4">2.</div>
                  <h3 className="text-xl font-semibold text-white mb-3 transition-all duration-500">Our Mission</h3>
                  <p className="text-gray-300 group-hover:text-white text-sm leading-relaxed transition-all duration-500">
                    To enable individuals, communities, and institutions to grow through accredited training,
                    mentorship, coaching, and long-term career success.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative bg-[#262525] hover:bg-[#FF2424] p-6 rounded-lg cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-white transition-all duration-500 mb-4">3.</div>
                  <h3 className="text-xl font-semibold text-white mb-3 transition-all duration-500">Who We Serve</h3>
                  <p className="text-gray-300 group-hover:text-white text-sm leading-relaxed transition-all duration-500">
                    We work with individuals and institutions across public, private, and non-profit sectors.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group relative bg-[#262525] hover:bg-[#FF2424] p-6 rounded-lg cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-white transition-all duration-500 mb-4">4.</div>
                  <h3 className="text-xl font-semibold text-white mb-3 transition-all duration-500">Why Choose Us</h3>
                  <p className="text-gray-300 group-hover:text-white text-sm leading-relaxed transition-all duration-500">
                    All our programmes fully accredited, ensuring your investment in learning is the job market.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/about-us/about-us-01.svg"
                alt="Professional business meeting"
                className="w-full h-1/2 max-h-[350px] object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/about-us/about-us-02.svg"
                alt="Professional taking notes"
                className="w-full h-1/2 max-h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
