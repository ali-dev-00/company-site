import Link from "next/link"

export default function ContactForm() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[800px] mx-auto px-4 md:px-8 lg:px-16">
        <form className="space-y-6">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ff2424] focus:border-[#ff2424] sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ff2424] focus:border-[#ff2424] sm:text-sm"
              />
            </div>
          </div>

          {/* Email Address and Contact Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ff2424] focus:border-[#ff2424] sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Contact number
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ff2424] focus:border-[#ff2424] sm:text-sm"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ff2424] focus:border-[#ff2424] sm:text-sm"
            ></textarea>
          </div>

          {/* Checkboxes */}
          <div className="space-y-4">
            <div className="flex items-start">
              <input
                id="communications"
                name="communications"
                type="checkbox"
                className="h-4 w-4 text-[#ff2424] focus:ring-[#ff2424] border-gray-300 rounded mt-1"
              />
              <label htmlFor="communications" className="ml-2 block text-sm text-gray-900">
                Yes, I wish to receive relevant communications from The Growth Company group.
              </label>
            </div>
            <div className="flex items-start">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-[#ff2424] focus:ring-[#ff2424] border-gray-300 rounded mt-1"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                By contacting us, you agree to{" "}
                <Link href="/privacy-policy" className="text-[#ff2424] hover:underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/terms-conditions" className="text-[#ff2424] hover:underline">
                  Terms & our Conditions
                </Link>
                .
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-6 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff2424] transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
