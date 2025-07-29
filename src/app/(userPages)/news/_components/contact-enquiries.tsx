import Link from "next/link"

interface EnquiryCard {
  id: string
  title: string
  description: string
  email?: string
  phone?: string
}

const enquiryCards: EnquiryCard[] = [
  {
    id: "general-enquiries",
    title: "General enquiries",
    description: "To find out more about our services, please contact our enquiries team:",
    email: "info@growthco.uk",
    phone: "0161 2281111",
  },
  {
    id: "media-enquiries",
    title: "Media enquiries",
    description: "For media enquiries, please email:",
    email: "communications@growthco.uk",
  },
]

export default function ContactEnquiries() {
  return (
    <section className="py-16 bg-[#F4F2F2]">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {enquiryCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-4">{card.description}</p>
              <div className="flex  gap-10  space-y-1">
                {card.email && (
                  <Link
                    href={`mailto:${card.email}`}
                    className="text-[#ff2424] hover:text-red-600 transition-colors text-base font-medium"
                  >
                    {card.email}
                  </Link>
                )}
                {card.phone && <p className="text-gray-600 text-base">{card.phone}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
