import Link from "next/link"
import { Phone, Mail, Facebook, Linkedin, Youtube, Instagram } from "lucide-react"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-black text-white mx-auto max-w-[1366px] py-8 px-20">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Left Section - Logo and Contact */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Link href="#" className="flex items-center gap-1">
                                <Image src="/footer-logo.svg" height={100} width={120} alt="logo" />
                                <span className="text-red-500 text-md ml-2">DADKA</span>
                            </Link>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <div className="bg-[#FF2424] p-2 rounded-full">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-300">Contact Us</p>
                                    <p className="text-sm">+252 638972482</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="bg-[#FF2424] p-2 rounded-full">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-sm">info@horumarkadacka.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Center Section - Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/what-we-do" className="text-sm text-gray-300 hover:text-white transition-colors">
                                    What We Do
                                </Link>
                            </li>
                            <li>
                                <Link href="/work-with-us" className="text-sm text-gray-300 hover:text-white transition-colors">
                                    Work With Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-sm text-gray-300 hover:text-white transition-colors">
                                    CC Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/news" className="text-sm text-gray-300 hover:text-white transition-colors">
                                    News
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section - Social Media */}
                    <div className="flex flex-col items-start md:items-end">
                        <div className="flex flex-col space-y-3">
                            <Link
                                href="#"
                                className="bg-[#FF2424] hover:opacity-90 p-3 rounded-full transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="bg-[#FF2424] hover:opacity-90 p-3 rounded-full transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="bg-[#FF2424] hover:opacity-90 p-3 rounded-full transition-colors"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="bg-[#FF2424] hover:opacity-90 p-3 rounded-full transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Copyright */}
                <div className="border-t border-[#FF2424] pt-6">
                    <p className="text-xs text-gray-400 text-center">
                        © 2025 All Data Foundation. All rights reserved. Under Construction for better ADA compliance.
                    </p>
                </div>
            </div>
        </footer>
    )
}
