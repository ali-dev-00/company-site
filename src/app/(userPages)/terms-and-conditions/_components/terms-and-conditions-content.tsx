export default function TermsConditionsContent() {
    const sections = [
      {
        id: 1,
        title: "Services Provided",
        content: [
          "We offer accredited short training courses (3–30 days) across multiple sectors, such as construction, cleaning, customer service, and more.",
        ],
      },
      {
        id: 2,
        title: "Enrolment Requirements",
        content: [
          "Accurate personal and contact information",
          "Full payment (if applicable) before course start",
          "Adherence to attendance and conduct rules",
        ],
      },
      {
        id: 3,
        title: "Certification",
        content: [
          "Participants who meet course requirements will receive accredited certificates.",
        ],
      },
      {
        id: 4,
        title: "Limitations of Liability",
        content: [
          "We are not liable for indirect losses, including employment outcomes post-training.",
        ],
      },
      {
        id: 5,
        title: "Modifications",
        content: [
          "We reserve the right to update these terms at any time.",
        ],
      },
    ];
  
    return (
      <section className="py-12 bg-white">
        <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16">
          {sections.map((section) => (
            <div key={section.id} className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {section.id}- {section.title}
              </h2>
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
            </div>
          ))}
        </div>
      </section>
    );
  }
  