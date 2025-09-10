"use client"
import { useEffect, useState, useRef } from "react"
import type React from "react"
import Link from "next/link"
import { AlignRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { usePathname } from "next/navigation"

const LINKS = [
  {
    href: "/about-us",
    label: "About Us",
    submenu: [
      { href: "/about-us/our-story", label: "Our Story" },
      { href: "/about-us/our-board", label: "Our Board" },
      { href: "/about-us/our-credientials", label: "Our Credentials" },
    ],
  },
  {
    href: "/what-we-do",
    label: "What We Do",
    submenu: [
      { href: "/what-we-do/business", label: "Business" },
      { href: "/what-we-do/people", label: "People" },
      { href: "/what-we-do/international", label: "International" },
      { href: "/what-we-do/consulting", label: "Consulting" },
      { href: "/what-we-do/net-zero", label: "Net Zero" },
      { href: "/what-we-do/business-survey", label: "Business Survey" },
    ],
  },
  {
    href: "/work-with-us",
    label: "Work With Us",
    submenu: [
      { href: "/work-with-us/become-a-supplier", label: "Become a Supplier" },
    ],
  },
  {
    href: "/careers",
    label: "Careers",
    submenu: [
      { href: "/careers/life-at-horumarka-dadka", label: "Life at Horumarka Dadka" },
      { href: "/careers/our-values", label: "Our Values" },
      { href: "/careers/join-us", label: "Join Us" },
      { href: "/careers/career-stories", label: "Career Stories" },
    ],
  },
  { href: "/courses", label: "Courses" },
  { href: "/news", label: "News" },
  { href: "/contact-us", label: "Contact Us" },
]

const NavLink = ({ href, children, submenu }: { href: string; children: React.ReactNode; submenu?: { href: string; label: string }[] }) => {
  const pathname = usePathname()
  const isHashLink = href.startsWith("#")
  const currentHash = typeof window !== "undefined" ? window.location.hash : ""
  const isActive = isHashLink ? currentHash === href : pathname === href
  const [isHovered, setIsHovered] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const linkRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsHovered(true)
  }

  const handleMouseLeave = (e: React.MouseEvent) => {
    const linkElement = linkRef.current
    const relatedTarget = e.relatedTarget as HTMLElement

    // Check if we're moving to the submenu
    if (linkElement && relatedTarget && linkElement.contains(relatedTarget)) {
      return
    }

    timeoutRef.current = setTimeout(() => {
      setIsHovered(false)
    }, 100) // Small delay before closing
  }

  return (
    <div 
      ref={linkRef}
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative py-2 px-1 cursor-pointer">
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
      </div>
      
      {submenu && submenu.length > 0 && (
        <div 
          className={`absolute left-0 top-[130%] w-64 bg-[#1E1E1E] border border-gray-700 rounded-md shadow-lg py-2 z-50
            transition-all duration-300 transform
            ${isHovered 
              ? "opacity-100 translate-y-0 visible" 
              : "opacity-0 translate-y-1 invisible pointer-events-none"}
          `}
        >
          <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" /> {/* Gap bridge */}
          {submenu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-[#ff2424] transition-colors duration-150"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

const MobileNavLink = ({ href, children, submenu }: { href: string; children: React.ReactNode; submenu?: { href: string; label: string }[] }) => {
  const pathname = usePathname()
  const isHashLink = href.startsWith("#")
  const currentHash = typeof window !== "undefined" ? window.location.hash : ""
  const isActive = isHashLink ? currentHash === href : pathname === href
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <Link
          href={href}
          className={`relative flex items-center py-2 text-lg transition-colors duration-300 
            ${isActive ? "text-[#ff2424]" : "text-white hover:text-[#ff2424]"}`}
        >
          {children}
        </Link>
        {submenu && submenu.length > 0 && (
          <button
            onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
            className="p-2 text-white hover:text-[#ff2424]"
          >
            {isSubmenuOpen ? "-" : "+"}
          </button>
        )}
      </div>
      
      {submenu && submenu.length > 0 && isSubmenuOpen && (
        <div className="ml-4 mt-2 border-l border-gray-700">
          {submenu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 pl-4 text-sm text-white hover:text-[#ff2424]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
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
            <NavLink key={link.href} href={link.href} submenu={link.submenu}>
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
              <MobileNavLink key={link.href} href={link.href} submenu={link.submenu}>
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
