import Image from "next/image"

export default function BussinessHero() {
    return (
        <section className="relative bg-[#F4F2F2] mx-auto h-screen max-h-[600px] w-full mb-40 lg:mb-48 xl:mb-50">
            <div className="absolute inset-0">
                <Image
                    src="/images/bussiness/bussiness-hero.svg"
                    alt="Team collaboration in office environment"
                    fill
                    className="object-cover object-center r"
                    priority
                />
            </div>
            <div className="max-w-[1366px]  bottom-0 mx-auto ">
                <div className="absolute z-10 -bottom-43 px-4 md:px-8 lg:px-16 inset-0 flex items-end mx-auto ">
                    <div className="w-full relative overflow-hidden border-t-4  bg-red-600/80 bg-opacity-95 px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-14 lg:px-24 lg:py-16 xl:px-28 xl:py-16">
                        <div className="relative max-w-full sm:max-w-4xl lg:max-w-5xl">

                            <h1 className="text-2xl font-bold z-50 text-white mb-4 sm:text-3xl sm:mb-5 md:text-4xl md:mb-6  lg:mb-6">
                                Business
                            </h1>
                            <div className="relative w-full max-w-52 h-1 mb-6 sm:mb-7 md:mb-8">
                                <div className="absolute inset-0 h-[2px] bg-gray-200/80"></div>
                                <div className="absolute left-0 top-0 h-1 w-10 sm:w-12 md:w-14 lg:w-16 bg-black"></div>
                            </div>
                            <p className="text-sm text-white mb-4 font-medium sm:text-base sm:mb-5 md:mb-6 ">
                                We provide end-to-end business support and financial services for public, private and third sector commissioners, designed to create jobs, enable growth and improve lives.
                            </p>
                        </div>
                        <div className="bg-black/6 top-[-150px] -left-[-94.7px] bottom-[-350px] rotate-45 w-[180px] h-[600px] absolute " />
                    </div>
                </div>
            </div>
        </section>
    )
}
