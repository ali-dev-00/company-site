"use client"

import * as React from "react"
import { Check, ChevronDown, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export interface Option {
  label: string
  value: string
}

interface MultiSelectProps {
  options: Option[]
  value: string[]
  onChange: (value: string[]) => void
  placeholder?: string
  className?: string
  disabled?: boolean
}

export function SimpleMultiSelect({
  options,
  value,
  onChange,
  placeholder = "Select options...",
  className,
  disabled = false,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false)

  const handleSelect = (optionValue: string) => {
    if (value.includes(optionValue)) {
      onChange(value.filter((item) => item !== optionValue))
    } else {
      onChange([...value, optionValue])
    }
  }

  const getDisplayText = () => {
    if (value.length === 0) return placeholder
    if (value.length === 1) {
      return options.find((option) => option.value === value[0])?.label
    }
    return `${value.length} selected`
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between border-gray-300", className)}
          disabled={disabled}
        >
          <span className="truncate text-left">{getDisplayText()}</span>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full border-gray-300 min-w-[var(--radix-dropdown-menu-trigger-width)]" align="start">
        {options.map((option) => (
          <DropdownMenuItem key={option.value} onSelect={() => handleSelect(option.value)} className="cursor-pointer">
            <Check className={cn("mr-2 h-4 w-4", value.includes(option.value) ? "opacity-100" : "opacity-0")} />
            {option.label}
          </DropdownMenuItem>
        ))}
        {value.length > 0 && (
          <>
            <div className="border-t my-1" />
            <DropdownMenuItem onSelect={() => onChange([])} className="cursor-pointer text-destructive">
              <X className="mr-2 h-4 w-4" />
              Clear all
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
