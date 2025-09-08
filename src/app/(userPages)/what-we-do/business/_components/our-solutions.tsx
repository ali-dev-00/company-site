
import Image from "next/image"

export default function OurSolutionsSection() {
  const solutions = [
    {
      imageUrl: '/images/bussiness/bussiness-icon-01.svg',
      title: "Business leaders",
      description: "Who have the tools to maximise profits and enrich their staff, community and environment.",
    },
    {
      imageUrl: '/images/bussiness/bussiness-icon-02.svg',
      title: "Economic development leaders",
      description:
        "Who have the insights and know-how to build thriving business networks & clusters that help level-up local communities.",
    },
    {
      imageUrl: '/images/bussiness/bussiness-icon-03.svg',
      title: "A fair and prosperous country",
      description:
        "Where government and private partners have the right solutions to increase productivity, achieve Net Zero and deliver an innovative Global Britain.",
    },
  ]

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-100">
      <div className="max-w-[1366px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">Our solutions</h2>
        <p className="text-gray-700 text-base md:text-lg mb-12 max-w-3xl mx-auto">
          As the leading national provider of business support services – drawing on 30+ years of expertise, insights
          and data – we&apos;re passionate about creating:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center mb-6">
                 <Image src={solution.imageUrl} alt={solution.title} width={30} height={30} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
