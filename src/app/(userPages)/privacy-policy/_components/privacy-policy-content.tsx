export default function PrivacyPolicyContent() {
    const sections = [
      {
        id: 1,
        title: "Information We Collect",
        content: [
          "Name, email address, phone number",
          "Professional background (for course enrollment)",
          "Website cookies and usage data",
        ],
      },
      {
        id: 2,
        title: "How We Use Your Information",
        content: [
          "To enroll you in our training programs",
          "To send important updates or newsletters",
          "To improve user experience on our platform",
        ],
      },
      {
        id: 3,
        title: "Data Sharing",
        content: [
          "We do not sell or rent your information. We may share data with accredited training partners or certification bodies as required.",
        ],
      },
      {
        id: 4,
        title: "Your Rights",
        content: ["Access and update your data", "Opt-out of communications", "Request deletion of your information"],
      },
      {
        id: 5,
        title: "Contact Us",
        content: ["Email: info@horumarkadadka.com", "Phone: +252-617873944"],
        isContact: true, // Special flag for contact section formatting
      },
    ]
  
    return (
      <section className="py-12  bg-white">
        <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16">
          {sections.map((section) => (
            <div key={section.id} className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {section.id}- {section.title}
              </h2>
              {section.isContact ? (
                <div className="text-gray-700 text-base md:text-lg space-y-2">
                  {section.content.map((item, i) => (
                    <p key={i}>{item}</p>
                  ))}
                </div>
              ) : (
                <ul className="list-none pl-0 space-y-2">
                  {section.content.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-700 text-base md:text-lg before:content-['•'] before:mr-2 before:text-gray-500"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    )
  }
  