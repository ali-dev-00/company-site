"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TitleWithUnderline from "@/app/(userPages)/components/common/Title-with-underline";

interface InnovationCardProps {
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  maxWidth?: string; // optional, title width control (same as Our services)
}

function InnovationCard({
  imageSrc,
  title,
  description,
  linkText,
  linkHref,
  maxWidth = "100%",
}: InnovationCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group h-full flex flex-col">
      {/* Card Image/Logo Area */}
      <div className="relative h-28 w-full overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-bottom"   // logo exactly as provided
          priority={false}
          sizes="(min-width:1024px) 25vw, (min-width:768px) 50vw, 100vw"
        />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600" />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        {/* Title (same TitleWithUnderline) */}
        <div className="mb-4" style={{ maxWidth }}>
          <TitleWithUnderline title={title} small />
        </div>

        {/* Description (kept like your Our services version) */}
        <p className="text-gray-800 text-base leading-relaxed mb-6 line-clamp-5 min-h-[340px]">
          {description}
        </p>

        {/* Link pinned to bottom */}
        <Link
          href={linkHref}
          className="mt-auto inline-flex items-center text-red-600 hover:underline text-sm font-semibold"
        >
          {linkText} <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default function InnovationCardsSection() {
  const cardsData: InnovationCardProps[] = [
    {
      imageSrc: "/images/international/innovative-01.svg",
      title: "Marketing Manchester",
      description:
        "Marketing Manchester is the agency charged with promoting Greater Manchester nationally and internationally as a place to visit, invest, meet and study.",
      linkText: "Find Out More",
      linkHref: "#",
      maxWidth: "220px",
    },
    {
      imageSrc: "/images/international/innovative-02.svg",
      title: "MIDAS",
      description:
        "MIDAS is our award-winning inward investment agency, which seeks to secure significant levels of new investment and employment for Greater Manchester.",
      linkText: "Find Out More",
      linkHref: "#",
      maxWidth: "160px",
    },
    {
      imageSrc: "/images/international/innovative-03.svg",
      title: "Innovate UK Business Growth",
      description:
        "Innovate UK Business Growth empowers innovation-driven businesses to grow at pace and achieve their industry and society-transforming ambitions. Dedicated innovation and growth specialists will work closely and efficiently with leadership teams to help you to identify the most effective strategy to accelerate your business' growth and maximise its potential.",
      linkText: "Learn more",
      linkHref: "#",
      maxWidth: "260px",
    },
    {
      imageSrc: "/images/international/innovative-04.svg",
      title:
        "Global Business Innovation Programmes and Global Incubator Programmes",
      description:
        "Global Business Innovation Programmes (GBIPs) help innovative SMEs to collaborate and explore global markets and Global Incubator Programmes (GIPs) support SMEs to grow and scale through exploring the potential of global markets.",
      linkText: "Learn more",
      linkHref: "#",
      maxWidth: "260px",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {cardsData.map((card, index) => (
            <InnovationCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
