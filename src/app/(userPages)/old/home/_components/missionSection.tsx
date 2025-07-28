import Image from "next/image"

export default function MissionSection() {
  return (
    <section className="w-full  bg-[#E8E8E8]">
      <div className="container max-w-[1366px]  mx-auto px-4 md:px-8 lg:px-16 py-16 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl mb-4">Our Mission</h2>
        <p className="mx-auto max-w-[700px] text-gray-500  mb-8">
          To empower individuals, communities, and organizations through practical, accessible training that leads to
          personal growth, meaningful employment, and long-term economic development. We believe that building skills is
          the first step toward building stronger futures.
        </p>
        <div className="mx-auto max-w-5xl">
          <Image
            src="/home/mission.svg"
            width={800}
            height={600}
            alt="Group of people in a meeting room with laptops"
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
