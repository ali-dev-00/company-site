import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function InformationSection() {
  const policyLinks = [
    {
      title: "The Growth Company Procurement Policy",
      href: "#",
    },
    {
      title: "Responsible Procurement Principles",
      href: "#",
    },
    {
      title: "Modern Slavery and Human Trafficking Statement",
      href: "#",
    },
    {
      title: "Social Value Policy",
      href: "#",
    },
  ]

  return (
    <section className="py-12  bg-gray-100">
      <div className="max-w-[1366px] px-4 md:px-8 lg:px-16 mx-auto">
        <div className="space-y-6">
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">Policies and further information</h2>

          {/* Policy Links */}
          <div className="space-y-4">
            {policyLinks.map((link, index) => (
              <div key={index}>
                <Link
                  href={link.href}
                  className="inline-flex items-center text-red-600 hover:underline font-medium text-base "
                >
                  {link.title}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
