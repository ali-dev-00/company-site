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
      "Practical training programs have equipped thousands of people with accredited skills, helped organisations strengthen their workforce and pushed for higher service standards as well as improved safety measures in key sectors. Our job involves comprehending real-world issues and providing relevant, efficient solutions.",
  },
  {
    id: "trusted-partner",
    imageSrc: "/images/why-work-with-us-02.svg", 
    title: "Trusted partner",
    description:
      "Our reputation as a preferred partner in Somaliland and the surrounding region has been built on our ability to support economic development and institutional growth through accredited skills training.",
  },
  {
    id: "agile-diverse",
    imageSrc: "/images/why-work-with-us-03.svg" ,
    title: "Agile and diverse",
    description:
      "We take an integrated, practical approach and think creatively while also being quick to respond to emerging challenges and opportunities. The diversity of skills and specialties we possess allows us to cater to the unique needs of our clients and communities.",
  },
];

export default function WhyWorkWithUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Feature Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center mb-12">
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
        <div className="text-left mt-8">
          <Link
            href="contact-us"
            className="inline-flex items-center hover:underline text-[#ff2424] hover:text-red-600 font-medium text-lg transition-all duration-300 group"
          >
          Obtain additional information on our partnership opportunities.
            <ArrowRight className="ml-2 h-5 w-5 group-hover:rotate-[-45deg] transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
