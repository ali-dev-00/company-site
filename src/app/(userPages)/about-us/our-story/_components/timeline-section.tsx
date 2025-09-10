export default function TimelineSection() {
  const timelineData = [
    {
      year: "2018",
      title: "Founding Vision.",
      description: "Horumarka Dadka, which is located in Hargeisa, has a clear mission: to empower people and promote development through practical, skill-based training.",
    },
    {
      year: "2019",
      title: "First Accreditations.",
      description: "We have our first official accreditations, which allow us to offer certified courses on Security and Conflict Management, establishing our credibility as a quality organization.",
    },
    {
      year: "2020",
      title: "Expanding Our Reach.",
      description: "Our initial significant agreement to deliver vocational training for a government ministry has significantly increased our visibility and influence in communities.",
    },
    {
      year: "2021",
      title: "Building Partnerships.",
      description: "Our partnership with leading local and global NGOs allows us to initiate targeted skills development programs for young people and those seeking employment.",
    },
    {
      year: "2022",
      title: "New Sectors & Specialisms.",
      description: "Our course range is broadened to encompass vital new sectors such as Health & Safety (Fire Safety, First Aid, COSHH) and Quality Assurance.",
    },
    {
      year: "2023",
      title: "Digital Learning Platform.",
      description: "Our courses are now more accessible in Somaliland thanks to a new digital initiative that complements our traditional classroom training.",
    },
    {
      year: "2024",
      title: "Leadership in Vocational Training.",
      description: "Our outsourced training services for public and private sector clients are renowned for their commitment to ethical and impact-based outcomes.",
    },
    {
      year: "2025",
      title: "Marketing Manchester and MIDAS.",
      description: "Marketing Manchester and MIDAS join the Growth Company family.",
    },
  ]

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-x-6 relative">
          {/* Vertical Line */}
          <div className="absolute left-[119px] md:left-[149px] top-0 bottom-0 w-px bg-gray-200" />

          {timelineData.map((item, index) => (
            <div key={index} className="contents">
              {/* Year Column */}
              <div className="relative py-4 pr-6 flex justify-end items-center">
                <div
                  className={`w-24 md:w-28 h-18 flex justify-center items-center text-center rounded-md shadow-sm transition-colors duration-200
                    bg-white text-red-600`}
                >
                  <span className="font-medium text-lg">{item.year}</span>
                </div>
                {/* Dot on the line */}
                <div className="absolute right-0 w-3 h-3 border-gray-300 bg-transparent border-2 rounded-full -mr-[5.5px] z-20" />
              </div>

              {/* Event Content Column */}
              <div className="py-4 pl-6">
                <h3 className="text-gray-900 font-medium text-base md:text-lg mb-1">{item.title}</h3>
                <p className="text-gray-700 text-sm md:text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
