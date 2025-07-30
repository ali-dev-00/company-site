"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div
            className="relative flex min-h-screen items-center justify-center bg-cover bg-center p-4"
            style={{ backgroundImage: `url(/images/signin-form.png)` }}
        >
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

                <div className="space-y-6">
                    <div className="mt-4">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Your Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                        />
                    </div>
                    <div className="relative">
                        {/* Label and Password Visibility Button */}
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

                        {/* Password Input */}
                        <Input
                            id="password"
                            type={showPassword ? 'text' : 'password'} // Toggle between password and text input
                            placeholder="Enter your password"
                            className=" pr-10 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                        />
                    </div>
                    <Button className="w-full rounded-md bg-[#ff2424] py-2 text-md cursor-pointer text-white shadow-sm hover:opacity-90">
                        Log in
                    </Button>
                </div>
            </div>
        </div>
    )
}
