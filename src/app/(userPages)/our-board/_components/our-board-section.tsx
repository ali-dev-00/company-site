import Image from "next/image"
import { ArrowRight } from "lucide-react"
import TitleWithUnderline from "../../components/common/Title-with-underline"
import Link from "next/link"

export default function OurBoardSection() {
    const boardMembers = [
        {
            imageSrc: "/our-board/our-board-01.svg",
            name: "ALI OLAD",
            title: "CEO & Founder",
            linkHref: "#",
        },
        {
            imageSrc: "/our-board/our-board-02.svg",
            name: "Tehseen Ali",
            title: "Board Member",
            linkHref: "#",
        },
        {
            imageSrc: "/our-board/our-board-03.svg",
            name: "Jane Boardman",
            title: "Board Member",
            linkHref: "#",
        },
        {
            imageSrc: "/our-board/our-board-04.svg",
            name: "Councillor Bev Craig",
            title: "Leader, Manchester City Council",
            linkHref: "#",
        },
        {
            imageSrc: "/our-board/our-board-05.svg",
            name: "Chris Gray",
            title: "Board Member",
            linkHref: "#",
        },
        {
            imageSrc: "/our-board/our-board-06.svg",
            name: "Mandy Parkinson",
            title: "Board Member",
            linkHref: "#",
        },
        {
            imageSrc: "/our-board/our-board-07.svg",
            name: "Councillor Liz Patel",
            title: "Councillor in Sale Moor, Trafford Council",
            linkHref: "#",
        },
        {
            imageSrc: "/our-board/our-board-08.svg",
            name: "Councillor Nazia Rahman",
            title: "Councillor in Tyldesley, Wigan Council",
            linkHref: "#",
        },
    ]

    return (
        <>
            <section className=" bg-white">
                <div className="w-full  bg-[#F5F5F5]" >
                    <div className="max-w-[1366px] py-6 px-4 md:px-8 lg:px-16 mx-auto" >
                        <div className="mb-3 max-w-[180px]">
                            <TitleWithUnderline title="Our Board" />
                        </div>
                    </div>
                </div>
                <div className="max-w-[1366px] py-12 px-4 md:px-8 lg:px-16 mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {boardMembers.map((member, index) => (
                            <Link
                                href={member.linkHref}
                                key={index}
                                className="w-full group cursor-pointer overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
                            >
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src={member.imageSrc || "/placeholder.svg"}
                                        alt={member.name}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ff2424]"></div>
                                </div>
                                <div className="h-1 bg-v0-red w-full" />
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                                    <p className="text-sm text-gray-600 mb-4">{member.title}</p>
                                    <span
                                        className="inline-flex text-[#ff2424] items-center text-v0-red group-hover:underline text-sm font-semibold"
                                    >
                                        Find out more <ArrowRight className="ml-2 h-4 w-4  group-hover:rotate-[-45deg] transition-transform duration-300" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>

    )
}
