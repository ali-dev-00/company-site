"use client"

import React from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Flag, Star, Heart, Bell } from "lucide-react"

const iconOptions = [
  { value: "Flag", icon: <Flag className="w-6 h-6" /> },
  { value: "Star", icon: <Star className="w-6 h-6" /> },
  { value: "Heart", icon: <Heart className="w-6 h-6" /> },
  { value: "Bell", icon: <Bell className="w-6 h-6" /> },
]

interface IconSelectProps {
  id: string
  defaultValue: string
  onChange: (value: string) => void
}

const IconSelect: React.FC<IconSelectProps> = ({ id, defaultValue, onChange }) => {
  return (
    <div>
      <Select defaultValue={defaultValue} onValueChange={onChange}>
        <SelectTrigger id={id} className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600">
          <SelectValue placeholder="Select an icon" />
        </SelectTrigger>
        <SelectContent className="bg-white border-gray-300">
          {iconOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              <div className="flex items-center space-x-2">
                {option.icon}
                <span>{option.value}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default IconSelect
