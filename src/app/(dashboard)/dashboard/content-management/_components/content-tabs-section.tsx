"use client"

import React, { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react"
import { usePathname } from "next/navigation"
interface TabItem {
    id: string
    label: string
    link: string
}

const tabs: TabItem[] = [
    { id: "home", label: "Home", link: "/dashboard/content-management/home" },
    { id: "about-us", label: "About Us", link: "/dashboard/content-management/about-us" },
    { id: "what-we-do", label: "What We Do", link: "/dashboard/content-management/what-we-do" },
   
]

export default function ContentTabsSection() {
    const pathname = usePathname()
    const [activeTab, setActiveTab] = useState<string>("home")
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    // Determine active tab from pathname and hash
    useEffect(() => {
        const getHash = () => (typeof window !== "undefined" ? window.location.hash : "")

        const computeActiveTab = () => {
            const currentHash = getHash()
            const match = tabs.find((tab) => {
                if (tab.link.startsWith("#")) {
                    return currentHash === tab.link
                }
                return pathname?.startsWith(tab.link)
            })
            if (match) setActiveTab(match.id)
        }

        computeActiveTab()

        const handleHashChange = () => computeActiveTab()
        window.addEventListener("hashchange", handleHashChange)
        return () => window.removeEventListener("hashchange", handleHashChange)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -200, // Scroll amount
                behavior: "smooth",
            })
        }
    }

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 200, // Scroll amount
                behavior: "smooth",
            })
        }
    }

    // Scroll to active tab on initial load or activeTab change
    useEffect(() => {
        if (scrollContainerRef.current) {
            const activeElement = scrollContainerRef.current.querySelector(
                `[data-tab-id="${activeTab}"]`
            ) as HTMLElement
            if (activeElement) {
                activeElement.scrollIntoView({ behavior: "smooth", inline: "center" })
            }
        }
    }, [activeTab])

    return (
        <section className="px-6 py-2 bg-white">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">All Content</h2>

            <div className="flex items-center space-x-4" role="tablist" aria-label="Content sections">
                {/* Left Navigation Button */}
                <button
                    type="button"
                    onClick={scrollLeft}
                    className="flex-shrink-0 cursor-pointer w-10 h-10 rounded-full  flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                    aria-label="Scroll left"
                >
                    <ArrowLeftCircle className="w-6 h-6" />
                </button>

                {/* Tabs Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex-1 flex overflow-x-hidden py-2 scrollbar-hide"
                >
                    {tabs.map((tab) => (
                        <Link
                            key={tab.id}
                            href={tab.link}
                            data-tab-id={tab.id}
                            aria-selected={activeTab === tab.id}
                            role="tab"
                            className={`flex-shrink-0 px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-300
                  ${activeTab === tab.id
                                    ? "bg-red-600 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            {tab.label}
                        </Link>
                    ))}
                </div>

                {/* Right Navigation Button */}
                <button
                    type="button"
                    onClick={scrollRight}
                    className="flex-shrink-0 w-10 h-10 rounded-full cursor-pointer flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                    aria-label="Scroll right"
                >
                    <ArrowRightCircle className="w-6 h-6" />
                </button>
            </div>
        </section>
    )
}
