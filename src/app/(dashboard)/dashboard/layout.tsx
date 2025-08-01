"use client"

import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardShell } from "./_components/dashboard-shell"
import '../../../app/globals.css'
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <SidebarProvider className="overflow-hidden fixed">
      <DashboardShell>{children}</DashboardShell>
    </SidebarProvider>
  )
}
