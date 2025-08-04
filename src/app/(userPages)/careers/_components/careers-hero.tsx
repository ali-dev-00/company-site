import Image from "next/image";

export default function CareerHero() {
  return (
    <section className="bg-[#FF2424]/100 overflow-hidden" >
      <div className="relative flex max-w-[1366px] mx-auto  gap-10 sm:gap-0   flex-col lg:flex-row min-h-[400px] ">
      <div className="relative w-full lg:w-1/2 bg-[#FF2424]  text-white  py-12 px-4 md:px-8 lg:px-16 flex items-center ">
        <div className="absolute inset-0 opacity-20"></div>
        <div className="relative z-10 max-w-md text-left">

          <h1 className="text-2xl font-bold z-50 text-white mb-4 sm:text-3xl sm:mb-5 md:text-4xl md:mb-6  lg:mb-6">
            Why work for us?
          </h1>
          <div className="relative w-full max-w-72 h-1 mb-6 sm:mb-7 md:mb-8">
            <div className="absolute inset-0 h-[2px] bg-gray-200/80"></div>
            <div className="absolute left-0 top-0 h-1 w-10 sm:w-12 md:w-14 lg:w-16 bg-black"></div>
          </div>
          <p className="text-md">
          If you want a rewarding career where you’ll have the opportunity to make a real difference, you’ve come to the right place.
          </p>
        </div>
        <div className="bg-black/6 top-[-350px] -left-[-20.7px] bottom-[-350px] rotate-45 w-[180px] h-[950px] absolute " />
      </div>
      <div className=" relative  z-1 w-full lg:w-1/2 flex items-center justify-center overflow-hidden">
       <div className="absolute bg-[#FF2424]  h-[150px] w-[120px] rotate-45 -top-16 -left-15" >
       </div>
        <Image
          src="/careers/careers-hero.svg"
          alt="Smiling boy in a classroom"
          width={600}
          height={400}
          className="object-cover w-full h-full"
        />
       <div className="absolute bg-white  h-[150px] w-[120px] rotate-45 -bottom-16 -right-15" ></div>
      </div>
      </div>
    </section>
  );
}
