import Link from "next/link"
import { Phone, Clock } from "lucide-react" // Changed Mail to Clock
import Image from "next/image"

const links = [
    {
        id: "about-us",
        label: "About Us",
        href: "/about-us",
    },
    {
        id: "what-we-do",
        label: "What We do",
        href: "/what-we-do",
    },
    {
        id: "courses",
        label: "Courses",
        href: "/courses",
    },
    {
        id: "join-us",
        label: "Join Us",
        href: "/join-us",
    },
    {
        id: "terms-conditions",
        label: "Terms and Conditions",
        href: "/terms-and-conditions",
    },
    {
        id: "privacy",
        label: "Privacy Policy",
        href: "/privacy-policy",
    },
    {
        id: "contact-us",
        label: "Contact Us",
        href: "/contact-us",
    },
];

const socialMediaLinks = [
    {
        id: "tiktok",
        icon: "/socials/footer-tiktok.svg", // Add your actual path to the TikTok image
        link: "#",
        label: "TikTok",
    },
    {
        id: "facebook",
        icon: "/socials/footer-facebook.svg", // Add your actual path to the Facebook image
        link: "#",
        label: "Facebook",
    },
    {
        id: "instagram",
        icon: "/socials/footer-youtube.svg", // Add your actual path to the Instagram image
        link: "#",
        label: "Instagram",
    },
    {
        id: "youtube",
        icon: "/socials/footer-instagram.svg", // Add your actual path to the YouTube image
        link: "#",
        label: "YouTube",
    },
    {
        id: "twitter",
        icon: "/socials/footer-twitter.svg", // Add your actual path to the Twitter image
        link: "#",
        label: "Twitter",
    },
];

export default function Footer() {
    return (
        <>
            <footer className="bg-[#141414] text-white">
                <div className="max-w-[1366px] mx-auto py-12 px-4 md:px-8 lg:px-16 ">
                    <div className="grid grid-cols-1 lg:grid-cols-3  gap-8 mb-8">
                        {/* Left Section - Logo and Description */}
                        <div className="space-y-4 float-end">
                            <div className="flex items-center gap-2">
                                <Link href="/home" className="flex items-center">
                                    <Image
                                        src="/footer-logo.svg"
                                        height={40}
                                        width={120}
                                        alt="Horumarka Dadka logo"
                                        className="object-contain"
                                    />
                                    <span className="text-[#FF2424] text-lg  ml-2">DADKA</span>
                                </Link>
                            </div>
                            <p className="text-sm text-white leading-relaxed max-w-xs">
                                Horumarka Dadka is a leading training provider dedicated to uplifting individuals, businesses and
                                government institutions.
                            </p>

                            {/* Email Subscription */}
                            <div className="flex flex-wrap gap-2 mt-6">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-4 bg-transparent border border-[#DFDFDF] rounded text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#FF2424]"
                                />
                                <button className="px-6  py-4 bg-[#FF2424] text-white text-sm font-medium rounded hover:bg-red-600 transition-colors">
                                    Subscribe Now
                                </button>
                            </div>
                        </div>

                        {/* Center Section - Useful Information */}
                        <div className="float-end flex lg:justify-center w-full" >
                            <div>
                                <h3 className="text-lg mb-4 text-[#FF2424]">Useful Information</h3>
                                <ul className="space-y-2">
                                    {links.map((link) => (
                                        <li key={link.id}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-gray-300 hover:text-white transition-colors flex items-center"
                                            >
                                                <span className="text-[#FF2424] mr-2">{">"}</span>
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Section - Contact Info and Social */}
                        <div className=" float-end flex lg:justify-center w-full">
                            <div className="space-y-6">
                                {/* Contact Information */}
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-[#FF2424] p-2 rounded-full">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-300">Contact Us</p>
                                            <p className="text-sm font-medium">+252 638972482</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <div className="bg-[#FF2424] p-2 rounded-full">
                                            <Clock className="w-5 h-5" /> {/* Changed to Clock icon */}
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-300">Email Us</p>
                                            <p className="text-sm">info@horumarkadadka.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex space-x-3">
                                    {socialMediaLinks.map((social) => (
                                        <Link
                                            key={social.id}
                                            href={social.link}
                                            className="text-[#FF2424] hover:text-red-600 transition-colors duration-300"
                                            aria-label={social.label}
                                        >
                                            <div className="w-5 h-5 flex items-center justify-center">
                                                <Image
                                                    src={social.icon}
                                                    alt={social.label}
                                                    width={20}
                                                    height={20}
                                                />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Bottom Section - Copyright */}
            <div className=" py-6 bg-black">
                <p className="text-sm text-gray-400 text-center">© 2026 The Growth Company</p>
            </div>
        </>

    )
}
