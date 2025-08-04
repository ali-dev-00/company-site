import type React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image"; // Import Image from Next.js

interface CommitmentProp {
  id: string;
  imageSrc: string;  // Change icon to imageSrc
  title: string;
  description: string;
}

const commitmentProps: CommitmentProp[] = [
  {
    id: "our-impact",
    imageSrc: "/images/why-work-with-us-01.svg", 
    title: "Our impact",
    description:
      "Since 2020, we've created over 42,000 new jobs, supported over 48,000 clients into work and seen over 2,000 new apprenticeship starts. We work with cities and regions on policy, service development and delivery; based on a high level of research and our collective expertise.",
  },
  {
    id: "trusted-partner",
    imageSrc: "/images/why-work-with-us-02.svg", 
    title: "Trusted partner",
    description:
      "We have an established 35-year track record as a partner of choice at an international, national and local level, supporting economic development and inward investment.",
  },
  {
    id: "agile-diverse",
    imageSrc: "/images/why-work-with-us-03.svg" ,
    title: "Agile and diverse",
    description:
      "The breadth of our integrated offer enables us to think innovatively and to mobilise at speed to address emerging challenges and opportunities. As a Group we encompass a wide range of skills and backgrounds that reflect the diversity of our client base and the communities in which we work.",
  },
];

export default function WhyWorkWithUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Feature Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center mb-12">
          {commitmentProps.map((prop) => (
            <div key={prop.id} className="flex flex-col items-center p-4">
              {/* Image */}
              <div className="bg-[#ff2424] p-4 rounded-full mb-6">
                <Image 
                  src={prop.imageSrc}  // Use the image source path
                  alt={prop.title}  // Add an alt text for the image
                  width={25}        // Set the width of the image
                  height={25}       // Set the height of the image
                  className="object-cover rounded-full"  // Optional: to make sure the image fits inside the circle
                />
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{prop.title}</h3>
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">{prop.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Link */}
        <div className="text-center mt-8">
          <Link
            href="contact-us"
            className="inline-flex items-center hover:underline text-[#ff2424] hover:text-red-600 font-medium text-lg transition-all duration-300 group"
          >
            Find out more about becoming a supplier
            <ArrowRight className="ml-2 h-5 w-5 group-hover:rotate-[-45deg] transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
