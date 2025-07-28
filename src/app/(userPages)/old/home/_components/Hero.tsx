import { Button } from "@/components/ui/button"

export default function Hero() {
    return (
        <section
            className="relative bg-cover bg-center bg-fixed  "
            style={{ backgroundImage: 'url("/home/hero.png")' }}
        >
            <div className="mx-auto max-w-[1366px]" >
                <div className="h-screen max-h-[600px] px-4 md:px-8 lg:px-16  w-full  flex items-center justify-start">
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="relative z-10 text-white max-w-xl py-20">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                            Empowering People Through Skills Training
                        </h1>
                        <p className="text-sm mb-8">
                            Accredited, practical training for individuals, businesses, and public institutions from workplace development
                            to public service excellence.
                        </p>
                        <Button className="bg-[#FF2424] cursor-pointer hover:opacity-90 text-white px-8 py-6 rounded-md text-lg shadow-md">
                            Explore Courses
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
