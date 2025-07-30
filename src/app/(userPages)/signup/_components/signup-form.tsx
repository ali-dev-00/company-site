"use client"

import { useState } from "react"
import Image from "next/image"
import { EyeOff, Eye } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export function SignUpForm() {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="max-h-[700px] my-10 flex items-center justify-center bg-white overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto rounded-lg overflow-hidden">
                {/* Left Column: Sign-up Form */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-2">Welcome to Design Community</h1>
                    <p className="text-sm text-gray-600 mb-8">
                        Already have an account?{" "}
                        <a href="#" className="text-v0-red hover:underline">
                            Log in
                        </a>
                    </p>

                    <div className="space-y-6 text-[#666666]">
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500" />
                        </div>
                        <div>
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" type="text" placeholder="" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500" />
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
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                            />
                        </div>

                        <div className="text-xs text-gray-500 grid grid-cols-2 gap-y-2">
                            <div className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2" />
                                Use 8 or more characters
                            </div>
                            <div className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2" />
                                One Uppercase character
                            </div>
                            <div className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2" />
                                One special character
                            </div>
                            <div className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2" />
                                One lowercase character
                            </div>
                            <div className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2" />
                                One number
                            </div>
                        </div>

                        <div className="flex items-start space-x-2">
                            <Checkbox
                                id="marketing-emails"
                                className="border-gray-400 mt-0.5 data-[state=checked]:bg-black data-[state=checked]:text-white"
                            />
                            <Label htmlFor="marketing-emails" className="text-sm font-normal text-gray-800">
                                I want to receive emails about the product, feature updates, events, and marketing promotions.
                            </Label>
                        </div>

                        <p className="text-xs text-gray-600">
                            By creating an account, you agree to the{" "}
                            <a href="#" className="text-v0-red hover:underline">
                                Terms of use
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-v0-red hover:underline">
                                Privacy Policy
                            </a>
                            .
                        </p>

                        <Button className="px-6 py-5 bg-[#ff2424]  hover:opacity-90 text-white cursor-pointer rounded-md text-md">
                            Create an account
                        </Button>

                        <p className="text-sm text-gray-600 text-center mt-4">
                            Already have an account?{" "}
                            <a href="#" className="text-v0-red hover:underline hover:text-gray-900">
                                Log in
                            </a>
                        </p>
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
