export default function ContactSection() {
    return (
      <section  style={{ backgroundColor: "#1a1a1a" }}>
       <div className="min-h-screen flex items-center justify-center p-8 max-w-[1366px] px-4 md:px-8 lg:px-16 mx-auto">
       <div className="bg-white rounded-3xl p-12 w-full  shadow-2xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-black mb-3">
              Contact <span style={{ color: "#FF2424" }}>Us</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
  
          <form className="space-y-5 w-full">
            <div>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-0 focus:border-gray-400 text-base placeholder-gray-400 bg-white"
              />
            </div>
  
            <div>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-0 focus:border-gray-400 text-base placeholder-gray-400 bg-white"
              />
            </div>
  
            <div>
              <textarea
                placeholder="Your message"
                rows={8}
                className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-0 focus:border-gray-400 text-base placeholder-gray-400 bg-white resize-none"
              />
            </div>
  
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="px-10 py-3 text-white font-semibold rounded-xl text-base hover:opacity-95 transition-opacity shadow-lg"
                style={{ backgroundColor: "#FF2424" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
       </div>
      </section>
    )
  }
  