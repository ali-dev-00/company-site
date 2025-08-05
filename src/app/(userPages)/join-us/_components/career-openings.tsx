import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface JobCategory {
    id: string
    name: string
    count?: number
    isActive?: boolean
}

interface JobOpening {
    id: string
    title: string
    experience: string
    deadline: string
    linkHref: string
}

const jobCategories: JobCategory[] = [
    { id: "ht-admin", name: "HT & ADMIN" },
    { id: "engineering", name: "ENGINEERING", count: 20, isActive: true },
    { id: "support", name: "SUPPORT" },
    { id: "design", name: "DESIGN" },
    { id: "digital-marketing", name: "DIGITAL MARKETING" },
]

const jobOpenings: JobOpening[] = [
    {
        id: "wordpress-developer",
        title: "Wordpress Developer",
        experience: "2 Years",
        deadline: "2021-05-08",
        linkHref: "/job-detail",
    },
    {
        id: "javascript-developer",
        title: "Javascript",
        experience: "1 Years",
        deadline: "2021-05-08",
        linkHref: "/job-detail",
    },
    {
        id: "apps-developer",
        title: "Apps Developer",
        experience: "3 Years",
        deadline: "2021-05-08",
        linkHref: "/job-detail",
    },
    {
        id: "ios-developer",
        title: "IOS Developer",
        experience: "2 Years",
        deadline: "2021-05-08",
        linkHref: "/job-detail",
    },
    {
        id: "node-js-developer",
        title: "Node JS Developer",
        experience: "3 Years",
        deadline: "2021-05-08",
        linkHref: "/job-detail",
    },
]

const CareerOpenings = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Top Section - Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">COME JOIN US</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Career Openings</h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
            We&apos;re always looking for creative, talented self-starters to join the JMC family. Check out our open roles
            below and fill out an application.
          </p>
        </div>
        {/* Main Content - Sidebar and Job List */}
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12">
          {/* Left Sidebar - Job Categories */}
          <div className="flex flex-col space-y-4 ">
            {jobCategories.map((category) => (
              <Link
                key={category.id}
                href={`/careers?category=${category.id}`}
                className={`text-lg font-medium group ${
                  category.isActive ? "text-[#ff2424]" : "text-gray-700 hover:text-gray-900"
                } transition-colors`}
              >
                {category.name}
                {category.count && <span className="ml-2 text-gray-500">({category.count})</span>}
              </Link>
            ))}
          </div>
          {/* Right Section - Job Openings List */}
          <div className="space-y-4">
            {jobOpenings.map((job) => (
              <Link
                key={job.id}
                href={`/job-detail`}
                className="flex  flex-col sm:flex-row items-start sm:items-center justify-between bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="md:flex  flex-1 md:justify-between md:max-w-[80%] items-center  mb-4 sm:mb-0">
                  <h3 className="text-xl md:mt-2 font-semibold text-gray-900 mb-2">{job.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:space-x-12 text-gray-600 text-sm">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Experience</span>
                      <span className="text-base font-semibold text-gray-800">{job.experience}</span>
                    </div>
                    <div className="flex flex-col mt-2 sm:mt-0">
                      <span className="text-xs text-gray-500">Deadline</span>
                      <span className="text-base font-semibold text-gray-800">{job.deadline}</span>
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-500 group-hover:translate-x-1 group-hover:-rotate-45 group-hover:text-red-600 transition-all duration-300 sm:ml-auto" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareerOpenings
