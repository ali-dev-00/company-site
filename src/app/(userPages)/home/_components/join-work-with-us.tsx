"use client";
import { getSiteContent } from "@/services/site-content.service";
import { ArrowRight } from "lucide-react";
import TitleWithUnderline from "../../components/common/Title-with-underline";
import Link from "next/link";
import type { HomeJoinWorkWithUs } from "@/types/content";

export default function JoinWorkWithUs() {
  const joinData: Partial<HomeJoinWorkWithUs> = getSiteContent().HomeJoinWorkWithUs ?? {};
  const {
    JoinUsTitle = "Join Us",
    JoinUsDescription = "Passionate about making a difference? If you're an innovative, enterprising, and inclusive person who believes in our mission, come join Horumarka Dadka",
    JoinUsButtonText = "See our current opportunities",
    JoinUsButtonLink = "/careers/join-us",
    WorkWithUsTitle = "Partner with us",
    WorkWithUsDescription = "We collaborate with a wide network of partners in the private, public, and third sectors, from our local region to international levels. Join us and let's work together to make a greater impact.",
    WorkWithUsButtonText = "Talk to our team",
    WorkWithUsButtonLink = "/work-with-us",
  } = joinData;
  return (
    <section className="py-16 ">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Join us Card */}
          <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-8 hover:scale-101 transform group">
            <div className="mb-6 max-w-[120px]">
              <TitleWithUnderline title={JoinUsTitle} />
            </div>

            <div className="mb-8 min-h-[100px]">
              <p className="text-gray-600 text-base leading-relaxed max-h-[120px] overflow-hidden">
                {JoinUsDescription}
              </p>
            </div>

            <Link
              href={JoinUsButtonLink}
              className="hover:underline   inline-flex items-center text-[#ff2424] hover:text-red-600 font-medium text-base transition-all duration-300 group"
            >
              {JoinUsButtonText}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:rotate-[-45deg] transition-transform duration-300" />
            </Link>
          </div>

          {/* Work with us Card */}
          <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-8 hover:scale-101 transform group">
            <div className="mb-6 max-w-[250px]">
              <TitleWithUnderline title={WorkWithUsTitle} />
            </div>

            <div className="mb-8 min-h-[100px]">
              <p className="text-gray-600 text-base leading-relaxed max-h-[120px] overflow-hidden">
               {WorkWithUsDescription}
              </p>
            </div>

            <Link
              href={WorkWithUsButtonLink}
              className="inline-flex items-center hover:underline text-[#ff2424] hover:text-red-600 font-medium text-base transition-all duration-300 group"
            >
              {WorkWithUsButtonText}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:rotate-[-45deg] transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
