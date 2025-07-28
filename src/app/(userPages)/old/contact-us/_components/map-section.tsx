export default function MapSection() {
  return (
    <section className=" bg-[#E8E8E8]">
      <div className="py-16 px-4 md:px-8 lg:px-16 bg-[#E8E8E8] [max-w-1366px] mx-auto mb-5">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Find Us In <span className="text-[#FF2424]">Map</span>
          </h2>
        </div>

        {/* Map Container */}
        <div className="w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg  mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54449.67648822283!2d74.2581888!3d31.4697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sJohar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1703123456789!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Find Us Location Map"
          />
        </div>
      </div>

    </section>
  )
}
