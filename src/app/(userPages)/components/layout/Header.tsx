"use client"
import { useEffect, useState } from "react"
import type React from "react"
import Link from "next/link"
import { AlignRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { usePathname } from "next/navigation"

const LINKS = [
  { href: "/about-us", label: "About Us" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/work-with-us", label: "Work With Us" },
  { href: "/careers", label: "Careers" },
  { href: "/news", label: "News" },
  { href: "/contact-us", label: "Contact Us" },
]

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname()
  const isHashLink = href.startsWith("#")
  const currentHash = typeof window !== "undefined" ? window.location.hash : ""
  const isActive = isHashLink ? currentHash === href : pathname === href

  return (
    <Link
      href={href}
      className={`relative text-sm font-medium transition-colors duration-300 
        ${isActive ? "text-[#ff2424]" : "text-white hover:text-[#ff2424]"}
        after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
        after:w-0 after:h-[2px] after:bg-[#FF2424] after:transition-all after:duration-300 
        ${isActive ? "border-b-2" : "hover:after:w-full hover:after:left-0 hover:after:translate-x-0"}`}
    >
      {children}
    </Link>
  )
}

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname()
  const isHashLink = href.startsWith("#")
  const currentHash = typeof window !== "undefined" ? window.location.hash : ""
  const isActive = isHashLink ? currentHash === href : pathname === href

  return (
    <Link
      href={href}
      className={`relative flex w-full items-center py-2 text-lg transition-colors duration-300 
        ${isActive ? "text-[#ff2424]" : "text-white hover:text-[#ff2424]"}
        after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
        after:w-0 after:h-[2px] after:bg-[#FF2424] after:transition-all after:duration-300 
         ${isActive ? "border-b-2" : "hover:after:w-full hover:after:left-0 hover:after:translate-x-0"}`}
    >
      {children}
    </Link>
  )
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentHash, setCurrentHash] = useState("")
  console.log(currentHash)

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)

  // Track hash changes for in-page navigation
  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash)
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMobileMenuOpen])

  return (
    <header className="bg-[#1E1E1E] w-full">
      <div className="max-w-[1366px] mx-auto flex h-20 w-full items-center px-4 md:px-8 lg:px-16 border-b border-black">
        <Link href="/home" className="flex items-center gap-1">
          <Image src="/logo.svg" height={100} width={120} alt="logo" />
          <span className="text-[#ff2424] text-md ml-2">DADKA</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 mx-auto">
          {LINKS.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Button */}
        <Link href="/careers" className="hidden lg:inline-flex bg-[#FF2424] cursor-pointer hover:opacity-90 text-white px-6 py-2 rounded-md shadow-md">
          Let&apos;s Get Started
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden ml-auto">
          <Button variant="outline" className="border-gray-200 cursor-pointer bg-gray-100 hover:opacity-90" size="icon" onClick={toggleMobileMenu}>
            <AlignRight />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </div>

        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-[#1E1E1E] bg-opacity-50 transition-opacity duration-500 ease-in-out ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={toggleMobileMenu}
        />

        {/* Mobile Menu */}
        <div
          className={`absolute h-screen z-50 overflow-y-auto top-0 left-0 w-[80%] bg-[#1E1E1E] shadow-md p-4 md:hidden transition-all duration-500 ease-in-out transform ${isMobileMenuOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "-translate-x-full opacity-0 pointer-events-none"}`}
        >
          <div className="flex items-center gap-2 mb-6 w-full justify-between">
            <Link href="/home" className="flex items-center gap-1">
              <Image src="/logo.svg" height={100} width={120} alt="logo" />
              <span className="text-[#ff2424] text-md ml-2">DADKA</span>
            </Link>
            <Button variant="ghost" size="icon" className="h-8 w-8 border border-gray-200 bg-gray-100 hover:opacity-90 cursor-pointer" onClick={toggleMobileMenu}>
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
            <Link href="/careers" className="w-full bg-[#FF2424] hover:opacity-90 cursor-pointer text-white px-6 py-2 rounded-md mt-4 shadow-md">
              Let&apos;s Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
