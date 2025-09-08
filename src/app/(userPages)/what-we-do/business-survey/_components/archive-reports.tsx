import Link from "next/link";

export default function ArchivedReports() {
  // Hardcoded data within the component
  const archiveData = [
    {
      year: "2024",
      items: [
        { label: "December Report", href: "/reports/2024-12" },
        { label: "November Report", href: "/reports/2024-11" },
        { label: "October Report", href: "/reports/2024-10" },
        { label: "September Report", href: "/reports/2024-09" },
        { label: "August Report", href: "/reports/2024-08" },
        { label: "July Report", href: "/reports/2024-07" },
        { label: "June Report", href: "/reports/2024-06" },
        { label: "May Report", href: "/reports/2024-05" },
        { label: "April Report", href: "/reports/2024-04" },
        { label: "March Report", href: "/reports/2024-03" },
        { label: "February Report", href: "/reports/2024-02" },
        { label: "January Report", href: "/reports/2024-01" },
      ],
    },
    {
      year: "2023",
      items: [
        { label: "December Report", href: "/reports/2023-12" },
        { label: "November Report", href: "/reports/2023-11" },
        { label: "October Report", href: "/reports/2023-10" },
        { label: "September Report", href: "/reports/2023-09" },
        { label: "August Report", href: "/reports/2023-08" },
        { label: "July Report", href: "/reports/2023-07" },
        { label: "June Report", href: "/reports/2023-06" },
        { label: "May Report", href: "/reports/2023-05" },
        { label: "April Report", href: "/reports/2023-04" },
        { label: "March Report", href: "/reports/2023-03" },
        { label: "February Report", href: "/reports/2023-02" },
        { label: "January Report", href: "/reports/2023-01" },
      ],
    },
    {
      year: "2022",
      items: [
        { label: "December Report", href: "/reports/2022-12" },
        { label: "November Report", href: "/reports/2022-11" },
        { label: "October Report", href: "/reports/2022-10" },
        { label: "September Report", href: "/reports/2022-09" },
        { label: "August Report", href: "/reports/2022-08" },
        { label: "July Report", href: "/reports/2022-07" },
        { label: "June Report", href: "/reports/2022-06" },
        { label: "May Report", href: "/reports/2022-05" },
        { label: "April Report", href: "/reports/2022-04" },
        { label: "March Report", href: "/reports/2022-03" },
        { label: "February Report", href: "/reports/2022-02" },
        { label: "January Report", href: "/reports/2022-01" },
      ],
    },
    // Add more years here as needed
  ];

  return (
    <section className="w-full my-5">
      <div className="mx-auto max-w-xs text-center">
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900">
          Archived Reports
        </h2>

        <div className="flex flex-col items-center">
          {archiveData.map((group, i) => (
            <div key={group.year} className="flex flex-col items-center">
              {/* Year */}
              <div className="my-1 text-md font-semibold text-gray-900">
                {group.year}
              </div>

              {/* Items */}
              <ul className="space-y-1">
                {group.items.map((it, idx) => (
                  <li key={`${group.year}-${idx}`} className="leading-none">
                    <Link
                      href={it.href}
                      className="text-sm font-medium text-red-600 hover:underline focus:underline"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}

               
              </ul>

              {/* tiny gap between years */}
              {i < archiveData.length - 1 && <div className="my-3 h-px w-6 bg-transparent" />}

              
            </div>
          ))}
           <p className="max-w-4xs text-sm my-10 font-medium text-gray-800">For more information on this survey, please contact
           Sabirah.Chowdhury@growthco.uk </p>
        </div>
      </div>
    </section>
  );
}
