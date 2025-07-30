import Link from "next/link"
import {  Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function JobDetailContent() {
    return (
        <section className="py-16 bg-white min-h-screen">
            <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16">
                {/* Job Title */}
                <h1 className="text-4xl font-bold text-gray-900 mb-12">PRODUCT DESIGNER</h1>
                <div className="relative grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:items-start">
                    {/* Left Column - Job Description */}
                    <div className="space-y-10 text-[#001833] pb-20">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Who Are We Looking For</h2>
                            <ul className="list-disc font-medium text-base list-inside  space-y-2">
                                <li className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li className="text-sm">Nullam dictum ligula a gravida porta.</li>
                                <li className="text-sm">Nam pellentesque orci ut odio blandit, sit amet elementum</li>
                                <li className="text-sm">Vivamus semper magna suscipit leo malesuada, eu dictum</li>
                                <li className="text-sm">Nulla non enim eu quam rutrum dictum in non urna.</li>
                                <li className="text-sm">Integer et felis a purus convallis condimentum nec vel eros.</li>
                                <li className="text-sm">Vestibulum porta libero nec aliquet blandit.</li>
                                <li className="text-sm">Duis pretium sapien vitae felis tincidunt lobortis vel et urna</li>
                                <li className="text-sm">Cras ut erat eu ante suscipit rutrum.</li>
                                <li className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li className="text-sm">Nullam dictum ligula a gravida porta.</li>
                                <li className="text-sm">Nam pellentesque orci ut odio blandit, sit amet elementum</li>
                                <li className="text-sm">Vivamus semper magna suscipit leo malesuada, eu dictum</li>
                                <li className="text-sm">Nulla non enim eu quam rutrum dictum in non urna.</li>
                                <li className="text-sm">Integer et felis a purus convallis condimentum nec vel eros.</li>
                                <li className="text-sm">Vestibulum porta libero nec aliquet blandit.</li>
                                <li className="text-sm">Duis pretium sapien vitae felis tincidunt lobortis vel et urna</li>
                                <li className="text-sm">Cras ut erat eu ante suscipit rutrum.</li>
                            </ul>
                        </div>
                        {/* What You Will Be Doing */}
                        <div>
                            <h2 className="text-2xl font-bold  mb-4">What You Will Be Doing</h2>
                            <ul className="list-disc font-medium text-base list-inside space-y-2">
                                <li className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li className="text-sm">Nullam dictum ligula a gravida porta.</li>
                                <li className="text-sm">Nam pellentesque orci ut odio blandit, sit amet elementum</li>
                                <li className="text-sm">Vivamus semper magna suscipit leo malesuada, eu dictum</li>
                                <li className="text-sm">Nulla non enim eu quam rutrum dictum in non urna.</li>
                                <li className="text-sm">Integer et felis a purus convallis condimentum nec vel eros.</li>
                                <li className="text-sm">Vestibulum porta libero nec aliquet blandit.</li>
                                <li className="text-sm">Duis pretium sapien vitae felis tincidunt lobortis vel et urna</li>
                                <li className="text-sm">Cras ut erat eu ante suscipit rutrum.</li>
                                <li className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li className="text-sm">Nullam dictum ligula a gravida porta.</li>
                                <li className="text-sm">Nam pellentesque orci ut odio blandit, sit amet elementum</li>
                                <li className="text-sm">Vivamus semper magna suscipit leo malesuada, eu dictum</li>
                                <li className="text-sm">Nulla non enim eu quam rutrum dictum in non urna.</li>
                                <li className="text-sm">Integer et felis a purus convallis condimentum nec vel eros.</li>
                                <li className="text-sm">Vestibulum porta libero nec aliquet blandit.</li>
                                <li className="text-sm">Duis pretium sapien vitae felis tincidunt lobortis vel et urna</li>
                                <li className="text-sm">Cras ut erat eu ante suscipit rutrum.</li>
                            </ul>
                        </div>
                        {/* Bonus Points for Familiarity with */}
                        <div>
                            <h2 className="text-2xl font-bold  mb-4">Bonus Points for Familiarity with</h2>
                            <ul className="list-disc font-medium text-base list-inside space-y-2">
                                <li className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li className="text-sm">Nullam dictum ligula a gravida porta.</li>
                                <li className="text-sm">Nam pellentesque orci ut odio blandit, sit amet elementum</li>
                                <li className="text-sm">Vivamus semper magna suscipit leo malesuada, eu dictum</li>
                                <li className="text-sm">Nulla non enim eu quam rutrum dictum in non urna.</li>
                            </ul>
                        </div>
                        {/* Educational Requirement */}
                        <div>
                            <h2 className="text-2xl font-bold  mb-4">Educational Requirement</h2>
                            <p className="leading-relaxed font-medium text-sm">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                                Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
                                Lorem Ipsum passage, and going
                            </p>
                        </div>
                        {/* Salary */}
                        <div>
                            <h2 className="text-2xl font-bold  mb-4">Salary</h2>
                            <ul className="list-disc list-inside space-y-2 font-medium text-base">
                                <li className="text-sm">Salary: 18,000 to 35,000 BDT (Depends on Skill and Experience)</li>
                                <li className="text-sm">Salary Review: Yearly</li>
                            </ul>
                        </div>
                        {/* Working Hours */}
                        <div>
                            <h2 className="text-2xl font-bold  mb-4">Working Hours</h2>
                            <ul className="list-disc list-inside space-y-2 font-medium text-base">
                                <li className="text-sm">Weekly: 5 days.</li>
                                <li className="text-sm">Weekend: Friday.Saturday</li>
                            </ul>
                        </div>
                        {/* Perks & Benefits */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Perks & Benefits You’ll Get</h2>
                            <ul className="list-disc list-inside space-y-2 font-medium text-base">
                                <li className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li className="text-sm">Nullam dictum ligula a gravida porta.</li>
                                <li className="text-sm">Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                                <li className="text-sm">Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
                                <li className="text-sm">Nulla non enim eu quam rutrum dictum in non urna.</li>
                                <li className="text-sm">Integer et felis a purus convallis condimentum nec vel eros.</li>
                                <li className="text-sm">Vestibulum porta libero nec aliquet blandit.</li>
                                <li className="text-sm">Duis pretium sapien vitae felis tincidunt lobortis vel et urna.</li>
                                <li className="text-sm">Cras ut erat eu ante suscipit rutrum.</li>
                            </ul>
                        </div>
                        <hr className="w-full text-black " />
                        <div>
                            <h2 className="text-2xl font-bold mb-4">The Application Process</h2>
                            <ul className="list-disc list-inside space-y-2 font-medium text-base">
                                <li className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li className="text-sm">Nullam dictum ligula a gravida porta.</li>
                                <li className="text-sm">Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                                <li className="text-sm">Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
                                <li className="text-sm">Nulla non enim eu quam rutrum dictum in non urna.</li>
                                <li className="text-sm">Integer et felis a purus convallis condimentum nec vel eros.</li>
                                <li className="text-sm">Vestibulum porta libero nec aliquet blandit.</li>
                                <li className="text-sm">Duis pretium sapien vitae felis tincidunt lobortis vel et urna.</li>
                                <li className="text-sm">Cras ut erat eu ante suscipit rutrum.</li>
                            </ul>
                        </div>
                        {/* our statement */}
                        <div>
                            <h2 className="text-2xl font-bold  mb-4">Our Statement</h2>
                            <p className="leading-relaxed font-medium text-sm">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                                Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
                                Lorem Ipsum passage, and going
                            </p>
                        </div>
                        <div className="flex justify-start">
                            <Button className="px-5 py-5 mb-10 bg-[#ff2424] text-white  rounded-md  text-md hover:bg-red-600 transition-colors">
                                Apply Now
                            </Button>
                        </div>
                    </div>
                    {/* Right Column - Job Summary Sidebar */}
                    <div className="lg:sticky lg:top-0 space-y-8">
                         {/* Job Summary Details */}
                         <div className="bg-gray-50 p-6 rounded-lg shadow-sm space-y-6">
                            <div className="flex justify-center">
                                <Button className="px-5 py-5 mb-10 bg-[#ff2424] text-white  rounded-md text-md hover:bg-red-600 transition-colors">
                                    Apply Now
                                </Button>
                            </div>


                            <h3 className="text-xl font-bold text-gray-900 mb-4">Job Summary</h3>
                            <div className="space-y-7">
                                <div className="flex items-center space-x-3">
                                    <Image src="/images/job-detail-location.svg" alt="job detail location" width={20} height={20} />
                                    <div>
                                        <p className="text-sm text-gray-500">Location</p>
                                        <p className="text-sm font-semibold text-gray-800">Hargeisa, Somaliland</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Image src="/images/job-detail-bag.svg" alt="job detail bag" width={20} height={20} />
                                    <div>
                                        <p className="text-sm text-gray-500">Job Type</p>
                                        <p className="text-sm font-semibold text-gray-800">Full Time</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Image src="/images/job-detail-date.svg" alt="job detail date" width={20} height={20} />
                                    <div>
                                        <p className="text-sm text-gray-500">Date posted</p>
                                        <p className="text-sm font-semibold text-gray-800">posted 1 month ago</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Image src="/images/job-detail-book.svg" alt="job detail book" width={20} height={20} />
                                    <div>
                                        <p className="text-sm text-gray-500">Experience</p>
                                        <p className="text-sm font-semibold text-gray-800">Experience: 1-3 year</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Image src="/images/job-detail-clock.svg" alt="job detail clock" width={20} height={20} />
                                    <div>
                                        <p className="text-sm text-gray-500">Working Hours</p>
                                        <p className="text-sm font-semibold text-gray-800">9 AM - 6 PM</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Image src="/images/job-detail-calender.svg" alt="job detail calender" width={20} height={20} />
                                    <div>
                                        <p className="text-sm text-gray-500">Working Days</p>
                                        <p className="text-sm font-semibold text-gray-800">Weekly:5days</p>
                                        <p className="text-sm font-semibold text-gray-800">Weekend: Saturday,Sunday</p>
                                    </div>
                                </div>
                            </div>
                            {/* View All Jobs Link */}
                            <div className="py-5">
                                <Link href="/careers" className="text-gray-800 hover:text-gray-900 text-sm underline  transition-colors">
                                    View all job
                                </Link>
                            </div>



                        </div>

                        {/* Share This Section */}
                        <div className="text-left space-y-4 pl-4">
                            <p className="text-black font-semibold">Share this</p>
                            <div className="flex justify-start space-x-4">
                                <Link
                                    href="#"
                                    className="text-white bg-[#3b5998] p-2 rounded-full hover:opacity-80 transition-opacity"
                                    aria-label="Share on Facebook"
                                >
                                    <Facebook className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="#"
                                    className="text-white bg-[#00acee] p-2 rounded-full hover:opacity-80 transition-opacity"
                                    aria-label="Share on Twitter"
                                >
                                    <Twitter className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="#"
                                    className="text-white bg-[#0077b5] p-2 rounded-full hover:opacity-80 transition-opacity"
                                    aria-label="Share on LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="#"
                                    className="text-white bg-[#C13584] p-2 rounded-full hover:opacity-80 transition-opacity"
                                    aria-label="Share on Instagram"
                                >
                                    <Instagram className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
