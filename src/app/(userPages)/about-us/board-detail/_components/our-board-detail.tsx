import Image from "next/image"
import { Facebook, Twitter, Linkedin } from 'lucide-react'

export default function OurBoardSection() {
  return (
    <section className=" bg-white">
      <div className="max-w-[1366px]  px-4 md:px-8 lg:px-16 py-16 mx-auto flex flex-col md:flex-row items-start md:items-center gap-8 lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 md:w-1/3 min-h-[400px]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative pb-2">
              ALI OLAD
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-v0-red rounded-full" />
            </h2>
            <div className="flex space-x-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <h3 className="text-xl font-medium text-gray-800 mb-4">Early career and motivation</h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            I studied Law initially at university, before going on to study Creative Writing. Following university, I
            worked in bars and in retail roles, eventually becoming Assistant Manager and then Store Manager for
            Barnardo&apos;s. I found working for a charity extremely rewarding but I needed to move on for career progression
            and financial reasons, and so became Store Manager for Toolstation – setting up a brand-new store in
            Bredbury.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 w-full md:w-1/4 relative">
          <div className="relative w-full h-0 pb-[100%] md:pb-[75%] lg:pb-[60%] overflow-hidden min-h-[450px]">
            {" "}
            {/* Aspect ratio container */}  
            <Image
              src="/our-board/our-board-01.svg"
              alt="Ali Olad"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 min-h-[400px]"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600" />
          </div>
        </div>
      </div>
    </section>
  )
}
