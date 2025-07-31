"use client"

import type React from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./app-sidebar"
import { NotificationDropdown } from "./notification-dropdown"
import { ProfileDropdown } from "./profile-dropdown"
interface DashboardShellProps {
  children: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex w-[100%]  h-screen bg-gray-50 dashboard-content">
      {/* Desktop Sidebar - Fixed height, no scroll */}
      <div className="hidden  lg:block w-64 shrink-0 h-screen">
        <AppSidebar collapsible="none" />
      </div>

      {/* Mobile Sidebar - Overlay */}
      <div className="lg:hidden ">
        <AppSidebar collapsible="offcanvas" />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col  h-screen overflow-hidden ">
        {/* Fixed Header */}
        <header className="shrink-0 bg-white border-b border-gray-200 ">
          <div className="flex h-16 items-center justify-between px-4 lg:px-6">
            <div className="flex items-center text-gray-500 gap-4">
              <SidebarTrigger className="lg:hidden" />
            </div>
            <div className="flex items-center gap-4">
              
              <NotificationDropdown />
              <ProfileDropdown />
            </div>
          </div>

        </header>

        {/* Scrollable Content Only */}
        <main className="flex-1 bg-white">{children}</main>
      </div>
    </div>
  )
}
