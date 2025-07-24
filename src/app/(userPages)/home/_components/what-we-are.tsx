import Image from "next/image"

export default function WhoWeAre() {
  return (
    <section
      className="relative w-full bg-white "
      style={{
        backgroundImage: 'url("/home/dotted-pattern.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1366px] w-full mx-auto px-4 md:px-8 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
     
        <div className="lg:pr-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Horumarka Dadka is a leading training provider dedicated to uplifting individuals, businesses, and
            government institutions. We specialise in short, accredited training designed to create real-world impact
            across key industries. Whether it&apos;s community upskilling, workplace development, or public service
            excellence we deliver solutions that drive growth.
          </p>
        </div>

        {/* Right Column: Sticky Image */}
        <div className="relative h-[400px] lg:h-[500px] w-full flex justify-center items-center">
          <div className="lg:sticky lg:top-20 w-full h-full max-w-[600px] lg:max-w-none rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/home/people-training.svg"
              alt="People in a training session"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
