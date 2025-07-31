import { cn } from "@/lib/utils"

interface StatusBadgeProps {
  status: "active" | "not-active"
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const isActive = status === "active"
  return (
    <div className="flex items-center gap-1">
      <span className={cn("h-2 w-2 rounded-full", isActive ? "bg-green-500" : "bg-redType")} />
      <span className={cn("text-sm", isActive ? "text-green-600" : "text-redType")}>
        {isActive ? "Active" : "Not Active"}
      </span>
    </div>
  )
}
