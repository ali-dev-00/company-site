import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function LearnMoreGCInsightSection() {
  return (
    <section className="py-12 my-5 px-4 md:px-8 lg:px-16 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Heading */}
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700">Learn more about GC Insight</h2>

          {/* Right: Button */}
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 border-2 border-gray-800 text-gray-800 font-semibold hover:bg-gray-800 hover:text-white transition-colors duration-300 rounded-md"
          >
            GC Insight
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
