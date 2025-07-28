import { Mail, Clock, MapPin, Phone, Linkedin, Facebook, Twitter } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="relative py-16 overflow-hidden mx-auto bg-transeparent"
    >
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "45%", 
          backgroundImage: 'url("/contact-us/contact-background.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1, // Ensure it's behind the content
          backgroundColor: 'transparent', // Ensures it's not being overwritten by a solid background
        }}
      />
      <div className=" max-w-[1366px] mx-auto px-4 md:px-8 lg:px-0">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let&apos;s Build Better
            <br />
            Futures <span className="text-[#FF2424]">Together</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you&apos;re an individual looking to enroll in a course, an organization seeking training solutions, or
            just have a question we&apos;re here to help.
          </p>
        </div>


        <div className="mt-30 grid lg:grid-cols-2 w-full gap-12 lg:gap-16 items-start lg:bg-white lg:shadow-sm rounded-lg lg:ml-10 ">
          {/* Left Column - Contact Form */}
          <div className="space-y-6 p-4 bg-white lg:bg-transparent shawow-lg lg:shadow-none">
            <div>
              <h3 className="text-2xl font-bold mb-2 mt-4">
                Send us a <span className="text-[#FF2424]">message</span>
              </h3>
              <p className="text-gray-600 text-sm">
                Do you have a question? A complaint? Or need any help. Feel free to contact us
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF2424] focus:border-transparent"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF2424] focus:border-transparent"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Your number"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF2424] focus:border-transparent"
                />
              </div>

              <div>
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF2424] focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-[#FF2424] text-white py-3 px-15 float-end  rounded-lg font-medium hover:bg-red-600 transition-colors duration-200"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info Card */}
          <div className="lg:max-w-md mx-auto w-full mr-20 lg:-mt-6">
            <div className="bg-[#1A1A1A] rounded-3xl p-6 text-white">
              <div className="mb-8">
                <h4 className="text-lg font-medium">Hi! We are always here to help you.</h4>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4 p-4 bg-[#2c2c2c] rounded-lg">
                  <div className="flex-shrink-0">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email:</p>
                    <p className="text-sm">info@example.com</p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-center space-x-4 p-4 bg-[#2c2c2c] rounded-lg">
                  <div className="flex-shrink-0">
                    <Clock className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Opening</p>
                    <p className="text-sm">Mon - Sat 08:00 - 20:00</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4 p-4 bg-[#2c2c2c] rounded-lg">
                  <div className="flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Our Location</p>
                    <p className="text-sm">Hampton, Somaliland</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4 p-4 bg-[#2c2c2c] rounded-lg">
                  <div className="flex-shrink-0">
                    <Phone className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <p className="text-sm">+252 63597642</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-4 text-center">Connect with us</p>
                <div className="flex justify-center space-x-4">
                  <button className="p-2  rounded-full border-gray-700 border hover:bg-gray-700 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="p-2  rounded-full border-gray-700 border hover:bg-gray-700 transition-colors">
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button className="p-2  rounded-full border-gray-700 border hover:bg-gray-700 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
