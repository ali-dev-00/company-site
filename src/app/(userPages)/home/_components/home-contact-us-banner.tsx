"use client";

import Image from "next/image";
import Link from "next/link";
import { getSiteContent } from "@/services/site-content.service";
import type { HomeContactUsBanner } from "@/types/content";

export default function HomeContactUsBanner() {
  const section: Partial<HomeContactUsBanner> = getSiteContent().HomeContactUsBanner ?? {};
  const title = section.title ?? "Contact us";
  const description =
    section.description ??
    "Feel free to reach out if you'd like more details about any of our services.";
  const buttonText = section.buttonText ?? "Contact Us";
  const buttonLink = section.buttonLink ?? "/contact-us";
  const rightImage = section.rightImage ?? "/images/mask-group.svg";

  return (
    <section
      className="relative overflow-hidden bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/home/latest-news-bg.png')" }}
    >
      {/* Right Image (desktop) placed outside the max-width container so it can hug the viewport edge */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2">
        <div className="relative w-full h-full">
          <Image
            src={rightImage}
            alt="People smiling"
            fill
            priority
            className="object-cover object-right"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="relative py-12 z-10 max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section - Text and Button */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-lg lg:max-w-none mx-auto lg:mx-0">
            {description}
          </p>
          <Link
            href={buttonLink}
            className="z-12 inline-block px-8 py-3 border-gray-700 border-2 text-gray-800 font-medium rounded hover:bg-gray-100 transition-colors duration-300"
          >
            {buttonText}
          </Link>
        </div>
      </div>

    
    </section>
  );
}
