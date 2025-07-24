"use client"
import { useEffect, useState } from "react"
import type React from "react"
import Link from "next/link"
import { AlignRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const LINKS = [
  { href: "#about", label: "About Us" },
  { href: "#whattodo", label: "What We Do" },
  { href: "#workwithus", label: "Work With Us" },
  { href: "#gc", label: "GC Careers" },
  { href: "#news", label: "News" },
  { href: "#contact", label: "Contact Us" },
]


const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="relative text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-red-500
               after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
               after:w-0 after:h-[2px] after:bg-[#FF2424] after:transition-all after:duration-300
               hover:after:w-full hover:after:left-0 hover:after:translate-x-0"
  >
    {children}
  </Link>
)

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="relative flex w-full items-center py-2 text-lg text-gray-800 transition-colors duration-300 hover:text-red-500
               after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
               after:w-0 after:h-[2px] after:bg-[#FF2424] after:transition-all after:duration-300
               hover:after:w-full hover:after:left-0 hover:after:translate-x-0"
  >
    {children}
  </Link>
)

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)

  useEffect(() => {

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);
  return (
    <header className="flex h-20 w-full items-center max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16 border-b border-gray-200">
   
      <Link href="#" className="flex items-center gap-1">
        <Image src="/logo.svg" height={100} width={120} alt="logo" />
        <span className="text-red-500 text-md ml-2">DADKA</span>
      </Link>

      <nav className="hidden lg:flex gap-6 mx-auto">
        {LINKS.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ))}
      </nav>


      <Button className="hidden lg:inline-flex bg-[#FF2424] cursor-pointer hover:opacity-90 text-white px-6 py-2 rounded-md shadow-md">
        Let's Get Started
      </Button>

      <div className="lg:hidden ml-auto">
        <Button variant="outline" className="border-gray-200 cursor-pointer hover:bg-gray-100" size="icon" onClick={toggleMobileMenu}>
          <AlignRight />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      />

      <div
        className={`absolute h-screen z-50 overflow-y-auto  top-0 left-0 w-[80%] bg-white shadow-md p-4 md:hidden transition-all duration-500 ease-in-out transform ${
          isMobileMenuOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "-translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-2 mb-6 w-full justify-between">
          <Link href="#" className="flex items-center gap-1">
            <Image src="/logo.svg" height={100} width={120} alt="logo" />
            <span className="text-red-500 text-md ml-2">DADKA</span>
          </Link>
          <Button variant="ghost" size="icon" className="h-8 w-8 border border-gray-200 hover:bg-gray-100 cursor-pointer" onClick={toggleMobileMenu}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>

        <div className="grid gap-4 py-6">
          {LINKS.map((link) => (
            <MobileNavLink key={link.href} href={link.href}>
              {link.label}
            </MobileNavLink>
          ))}
          <Button className="w-full bg-[#FF2424] hover:opacity-90 cursor-pointer text-white px-6 py-2 rounded-md mt-4 shadow-md">
            Let's Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}