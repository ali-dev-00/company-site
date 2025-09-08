"use client"

import * as React from "react"
import Image from "next/image"
import type { CarouselApi } from "@/components/ui/carousel"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import TitleWithUnderline from "../../components/common/Title-with-underline"

export function CareerAwards() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    const images = [
        {
            src: "/images/award-01.svg",
            alt: "Employer Recognition Scheme Silver Award Badge",
        },
        {
            src: "/images/award-02.svg",
            alt: "Race to Zero Logo",
        },
        {
            src: "/images/award-03.svg",
            alt: "Race Equality Matters Badge Valid Until Feb 2025",
        },
        {
            src: "/images/award-04.svg",
            alt: "Social Recruitment Covenant Star Logo",
        },
        {
            src: "/images/award-01.svg",
            alt: "Dummy Award Image 1",
        },
        {
            src: "/images/award-02.svg",
            alt: "Dummy Award Image 2",
        },
    ]

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <section className="w-full py-12  bg-white">
            <div className="max-w-[1336px] mx-auto px-4 md:px-8 lg:px-16 text-center">
                {/* Section Header */}
                <div className="mb-12">
                    <div className=" max-w-[580px] mb-5">
                        <TitleWithUnderline title="Employer awards and accreditations" />
                    </div>
                    <p className="text-gray-600 text-lg text-left">
                       Our goal is to remain a great employer and an excellent training provider, always striving to deliver on our commitments of quality and ethics.
                    </p>
                </div>
                <div className="relative mt-12 flex items-center justify-center">
                    <Carousel showButtons={false} setApi={setApi} className="w-full max-w-6xl">
                        <CarouselContent className="-ml-4">
                            {images.map((image, index) => (
                                <CarouselItem
                                    key={index}
                                    className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 flex justify-center items-center"
                                >
                                    <div className="p-1">
                                        <Image
                                            src={image.src || "/placeholder.svg"}
                                            alt={image.alt}
                                            width={200}
                                            height={100}
                                            className=" max-h-[150px] w-auto"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
                        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
                    </Carousel>
                </div>
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: count }).map((_, index) => (
                        <button
                            key={index}
                            className={cn(
                                "h-3 cursor-pointer w-3 rounded-full transition-colors",
                                current === index + 1 ? "bg-blue-500" : "bg-gray-300 hover:bg-gray-400",
                            )}
                            onClick={() => api?.scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
