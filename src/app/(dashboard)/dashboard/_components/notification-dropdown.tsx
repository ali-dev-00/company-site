"use client"

import { Bell, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

const notifications = [
  {
    id: 1,
    title: "New volunteer registered",
    message: "John Doe has joined the Education Program",
    time: "2 minutes ago",
    isRead: false,
  },
  {
    id: 2,
    title: "Donation received",
    message: "$500 donation from Sarah Wilson",
    time: "1 hour ago",
    isRead: false,
  },
  {
    id: 3,
    title: "Program milestone reached",
    message: "Healthcare Support program reached 80% completion",
    time: "3 hours ago",
    isRead: true,
  },
  {
    id: 4,
    title: "Monthly report ready",
    message: "October volunteer engagement report is available",
    time: "1 day ago",
    isRead: true,
  },
]

export function NotificationDropdown() {
  const unreadCount = notifications.filter((n) => !n.isRead).length

  return (
    <DropdownMenu >
      <DropdownMenuTrigger  asChild>
        <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900 relative cursor-pointer">
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center p-0">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent  align="end" className="w-80 bg-white border-gray-200">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          <Button variant="ghost" size="sm" className="text-xs text-blue-600 hover:text-blue-700">
            Mark all as read
          </Button>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="max-h-96 overflow-y-auto">
          {notifications.map((notification) => (
            <DropdownMenuItem key={notification.id} className="flex flex-col items-start p-3 cursor-pointer">
              <div className="flex items-start justify-between w-full">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className={`text-sm font-medium ${notification.isRead ? "text-gray-700" : "text-gray-900"}`}>
                      {notification.title}
                    </p>
                    {!notification.isRead && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{notification.message}</p>
                  <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                </div>
                <Button variant="ghost" size="sm" className="ml-2 h-6 w-6 p-0">
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </DropdownMenuItem>
          ))}
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-center text-blue-600 hover:text-blue-700 cursor-pointer">
          View all notifications
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
