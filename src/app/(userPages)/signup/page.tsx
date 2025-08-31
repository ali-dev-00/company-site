"use client"

import { useState } from "react"
import Image from "next/image"
import { EyeOff, Eye } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { registerUser } from "@/services/auth.service"
import { useRouter } from "next/navigation"  
import Toast from "@/components/ui/toast"  

export default function SignUpForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [marketingEmails, setMarketingEmails] = useState(false) // Checkbox state
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Form validation checks
    if (!email || !password || !name) {
      setError("All fields are required.")
      return
    }

    // Check if the marketing emails checkbox is checked
    if (!marketingEmails) {
      setError("Please agree to receive marketing emails.")
      return
    }

    setLoading(true)
    const registerData = { email, name, password, marketingEmails }

    try {
      const response = await registerUser(registerData)

      if (response.data) {
        setSuccess("Account created successfully. Please log in.")
        setTimeout(() => router.push('/signin'), 2000)  // Redirect after success
      } else {
        setError(response.message || "Registration failed.")
      }
    } catch{
      setError('An error occurred while registering.')
    }
  }

  return (
    <div className="max-h-[800px] sm:max-h-[700px] my-10 flex items-center justify-center bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto rounded-lg overflow-hidden">
        {/* Left Column: Sign-up Form */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2">Welcome to Design Community</h1>
          <p className="text-sm text-gray-600 mb-8">
            Already have an account?{" "}
            <a href="/signin" className="text-v0-red hover:underline">
              Log in
            </a>
          </p>

          {/* Show Toasts */}
          {error && <Toast message={error} type="error" />}
          {success && <Toast message={success} type="success" />}

          <div className="space-y-6 text-[#666666]">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                required
              />
            </div>

            <div className="relative">
              <div className="flex w-full justify-between items-center">
                <Label htmlFor="password" className="mr-2">Password</Label>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2 py-1 hover:bg-transparent"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <>
                      <Eye className="h-4 w-4 " />
                      <span className="text-sm">Show</span>
                    </>
                  ) : (
                    <>
                      <EyeOff className="h-4 w-4 " />
                      <span className="text-sm">Hide</span>
                    </>
                  )}
                  <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                </Button>
              </div>

              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}  // Toggle between password and text input
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                required
              />
            </div>

            {/* Marketing Email Checkbox (HTML Checkbox) */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="marketing-emails"
                checked={marketingEmails}
                onChange={(e) => setMarketingEmails(e.target.checked)}
                className="border-gray-400 mt-0.5"
              />
              <Label htmlFor="marketing-emails" className="text-sm font-normal text-gray-800">
                I want to receive emails about the product, feature updates, events, and marketing promotions.
              </Label>
            </div>

            {/* Error Message Below Fields */}
            {error && <p className="text-red-500 font-medium text-sm mt-1">{error}</p>}

            <Button
              className="w-full rounded-md bg-[#ff2424] py-2 text-md cursor-pointer text-white shadow-sm hover:opacity-90"
              onClick={handleSubmit}
              disabled={loading}  // Disable button during loading
            >
              {loading ? "Creating..." : "Create an account"}
            </Button>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="hidden overflow-hidden lg:block">
          <Image
            src="/images/signup.png"
            alt="Smiling children"
            width={600}
            height={800}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}
