import Link from "next/link";
import { Phone, Mail, Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-black text-white mx-auto max-w-[1366px] py-6 px-4 md:px-10">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 max-w-4xl mx-auto">
                    {/* Left Section - Logo and Contact */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Link href="#" className="flex items-center">
                                <Image src="/footer-logo.svg" height={40} width={120} alt="logo" className="object-contain" />
                                <span className="text-red-500 text-sm md:text-md ml-1">DADKA</span>
                            </Link>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                                <div className="bg-[#FF2424] p-1.5 rounded-full">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs md:text-sm text-gray-300">Contact Us</p>
                                    <p className="text-xs md:text-sm">+252 638972482</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <div className="bg-[#FF2424] p-1.5 rounded-full">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs md:text-sm">info@horumarkadacka.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Center Section - Quick Links */}
                    <div className="flex justify-start md:justify-end">
                        <div>
                            <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-4">Quick Links</h3>
                            <ul className="space-y-1 md:space-y-2">
                                <li>
                                    <Link href="/about" className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/what-we-do" className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors">
                                        What We Do
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/work-with-us" className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors">
                                        Work With Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/careers" className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors">
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/news" className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors">
                                        News
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Section - Social Icons */}
                    <div className="flex justify-start md:justify-end">
                        <div className="flex flex-col space-y-3">
                            <Link
                                href="#"
                                className="relative bg-white p-1.5 md:p-2 rounded-full overflow-hidden group transition-colors duration-300"
                                aria-label="Facebook"
                            >
                                <span className="absolute inset-0 bg-[#FF2424] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                                <Facebook className="relative w-4 h-4 text-black group-hover:text-white transition-colors duration-300 z-10" />
                            </Link>
                            <Link
                                href="#"
                                className="relative bg-white p-1.5 md:p-2 rounded-full overflow-hidden group transition-colors duration-300"
                                aria-label="LinkedIn"
                            >
                                <span className="absolute inset-0 bg-[#FF2424] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                                <Linkedin className="relative w-4 h-4 text-black group-hover:text-white transition-colors duration-300 z-10" />
                            </Link>
                            <Link
                                href="#"
                                className="relative bg-white p-1.5 md:p-2 rounded-full overflow-hidden group transition-colors duration-300"
                                aria-label="YouTube"
                            >
                                <span className="absolute inset-0 bg-[#FF2424] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                                <Youtube className="relative w-4 h-4 text-black group-hover:text-white transition-colors duration-300 z-10" />
                            </Link>
                            <Link
                                href="#"
                                className="relative bg-white p-1.5 md:p-2 rounded-full overflow-hidden group transition-colors duration-300"
                                aria-label="Instagram"
                            >
                                <span className="absolute inset-0 bg-[#FF2424] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                                <Instagram className="relative w-4 h-4 text-black group-hover:text-white transition-colors duration-300 z-10" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Copyright */}
                <div className="border-t border-[#FF2424] pt-4">
                    <p className="text-xs md:text-sm text-gray-400 text-center">
                        © 2025 AI Old Foundation. All rights reserved. Under Construction for better ADA compliance.
                    </p>
                </div>
            </div>
        </footer>
    );
}