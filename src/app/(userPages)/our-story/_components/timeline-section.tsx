export default function TimelineSection() {
  const timelineData = [
    {
      year: "1990",
      title: "Starting life",
      description: "The Growth Company starts life as The Manchester Training And Enterprise Council.",
      hasAsterisk: false,
    },
    {
      year: "1990-99",
      title: "Training and employment initiatives",
      description:
        "We develop our own training and employment initiatives becoming the most innovative and entrepreneurial TEC in the country.",
      hasAsterisk: false,
    },
    {
      year: "2000-04",
      title: "Continued growth",
      description:
        "We continue to grow our offer as all the companies join the organisation's including Chamber Business Enterprises and Cowan Solutions.",
      hasAsterisk: false,
    },
    {
      year: "2004",
      title: "New contracts",
      description:
        "We are recognised as the economic development organisation for Greater Manchester and expand as we win new contracts across the North West.",
      hasAsterisk: false,
    },
    {
      year: "2006",
      title: "Restructure",
      description:
        "The organisation is restructured and becomes known as Manchester Solutions with a clear focus on delivery.",
      hasAsterisk: false,
    },
    {
      year: "2007-09",
      title: "Commercial offering",
      description: "We develop our commercial offer as the Centre for Assessment and IDG join our organisation.",
      hasAsterisk: false,
    },
    {
      year: "2012",
      title: "Business Growth Hub",
      description:
        "The Growth Company's Business Growth Hub is established and quickly becomes the leading business growth hub in the UK.",
      hasAsterisk: false,
    },
    {
      year: "2015",
      title: "Marketing Manchester and MIDAS",
      description: "Marketing Manchester and MIDAS join the Growth Company family.",
      hasAsterisk: false,
    },
    {
      year: "2017",
      title: "Rebrand",
      description:
        "National Skills Training and The Manufacturing Institute join our organisation. We rebrand as The Growth Company to reflect the growing remit of our services in the UK.",
      hasAsterisk: false,
    },
    {
      year: "2018",
      title: "London office",
      description: "We continue to innovate and grow. Our London office is launched.",
      hasAsterisk: false,
    },
    {
      year: "2018",
      title: "GC Angels",
      description: "GC Angels is established, working with entrepreneurs to grow and scale their businesses.",
      hasAsterisk: false,
    },
    {
      year: "2021",
      title: "eleven2ten acquisition",
      description:
        "The Growth Company announces the successful acquisition of eleven2ten, one of the UK's leading independent companies providing economic and social impact, analysis and consulting advice.",
      hasAsterisk: false,
    },
    {
      year: "2022",
      title: "Social Enterprise 'Gold Mark'",
      description:
        "We are awarded the 'Social Enterprise Gold Mark', which endorses our reputation and credibility as an organisation which uses commercial best practices to achieve social key objectives.",
      hasAsterisk: false,
    },
    {
      year: "2023",
      title: "Green Skills Academy launches",
      description: "The academy is a new initiative to provide training and skills for the green economy.",
      hasAsterisk: false,
    },
    {
      year: "2023",
      title: "GrowthFlag",
      description: "GrowthFlag is a new tool which shows where growth potential exists across the UK.",
      hasAsterisk: false,
    },
    {
      year: "2023",
      title: "Winning Moves acquisition and GC Insight launch",
      description:
        "The Growth Company announces the acquisition of Winning Moves and the launch of GC Insight, to reflect our expanded consulting offer.",
      hasAsterisk: true, // This is the one with the asterisk
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
