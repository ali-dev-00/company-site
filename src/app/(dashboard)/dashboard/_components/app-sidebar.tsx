"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Settings, Book, MessageCircleMore, Briefcase, ShoppingBag } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"

const menuItems = [
  { title: "Course Management", icon: Book , href: "/dashboard/courses-management" },
  { title: "Job Management", icon: Briefcase , href: "/dashboard/job-management" },
  { title: "Blogs Management", icon: ShoppingBag , href: "/dashboard/blogs-management" },
  { title: "Messages", icon: MessageCircleMore , href: "/dashboard/messages" },

]


interface AppSidebarProps {
  className?: string
  [key: string]: unknown
}

export function AppSidebar({ ...props }: AppSidebarProps) {
  const pathname = usePathname()

  return (
    <Sidebar className="bg-white border-gray-300  border-r-1 h-screen" {...props}>
      <SidebarHeader className="bg-white p-6 border-b border-white/10 shrink-0">
      <Link href="/home" className="flex items-center gap-1">
          <Image src="/logo.svg" height={100} width={120} alt="logo" />
          <span className="text-[#ff2424] text-md ml-2">DADKA</span>
        </Link>

      </SidebarHeader>

      <SidebarContent className="bg-white px-4 py-4 flex-1  text-gray-700">
        <SidebarMenu className="space-y-1">
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                className="text-gray-700 hover:bg-[#FF2424] hover:text-white data-[active=true]:bg-[#FF2424] data-[active=true]:text-white rounded-md"
              >
                <Link href={item.href} className="flex items-center gap-3 px-3 py-3 text-gray-700">
                  <item.icon className="h-4 w-4 shrink-0" />
                  <span className="text-sm">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        <div className="flex-1" />

        
      </SidebarContent>

      <SidebarFooter className="bg-white p-4 border-t border-white/10 shrink-0">
      <SidebarMenu className="bg-whitespace-y-1 mt-4">
         
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="text-gray-700 hover:bg-[#FF2424] hover:text-white rounded-md">
                <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2.5">
                  <Settings className="h-5 w-5 shrink-0" />
                  <span className="text-sm">Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
         
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
