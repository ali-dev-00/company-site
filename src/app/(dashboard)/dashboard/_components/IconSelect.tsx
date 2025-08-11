import React from "react"
import { Label } from "@/components/ui/label"

interface IconSelectProps {
  id: string
  value: string
  onChange: (value: string) => void
  options: string[]
}

const IconSelect: React.FC<IconSelectProps> = ({ id, value, onChange, options }) => {
  return (
    <div>
      <Label htmlFor={id} className="text-base font-medium text-gray-800 mb-2 block">
        Icon
      </Label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-12 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default IconSelect
