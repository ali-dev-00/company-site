"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation"
import { hasAnyPermissions, isAuthenticated, loginUser } from "@/services/auth.service"
import Toast from "@/components/ui/toast" 

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !password) {
      setError("Email and password are required.")
      return
    }

    setLoading(true)
    const loginData = { email, password }

    try {
      const response = await loginUser(loginData)

      if (response.status) {
        setSuccess("Login successful!")  
        const token = await isAuthenticated();
        const hasPerms = await hasAnyPermissions();
  
        if (token && hasPerms) {
          console.log('user is admin')
          router.push("/dashboard");
        }else{
          console.log('user is normal user')
          router.push("/home")
        }
      } else {

        setError(response.message || 'Login failed')  
      }
    } catch (err) {
      setError('An error occurred while logging in.')  
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-cover bg-center p-4">
      <div className="relative w-full max-w-md rounded-lg bg-white p-8 shadow-lg text-[#666666]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Log in</h2>
          <p className="mt-2 text-sm text-gray-600">
            {"Don't have an account? "}
            <Link href="/signup" className="font-medium text-[#ff2424] hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        {/* Show Toasts */}
        {error && <Toast message={"Login Failed"} type="error" />}
        {success && <Toast message={success} type="success" />}

        <div className="space-y-6">
          <div className="mt-4">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Your Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" pr-10 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              required
           />
          </div>

          {/* Error message below the password input */}
          {error && <p className="text-red-500 font-medium text-sm mt-1">{error}</p>}

          <Button
            className="w-full rounded-md bg-[#ff2424] py-2 text-md cursor-pointer text-white shadow-sm hover:opacity-90"
            type="submit"
            onClick={handleSubmit}
            disabled={loading}  // Disable button during loading
          >
            {loading ? "Logging in..." : "Log in"}
          </Button>
        </div>
      </div>
    </div>
  )
}
