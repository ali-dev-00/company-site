"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FolderPlus, Book, MessageCircleMore, Briefcase, ShoppingBag, Users, ChevronDown, ChevronUp } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import { useState } from "react"

const menuItems = [
  { title: "Category Management", icon: FolderPlus, href: "/dashboard/category-management" },
  { title: "Course Management", icon: Book, href: "/dashboard/courses-management" },
  { title: "Job Management", icon: Briefcase, href: "/dashboard/job-management" },
  { title: "Blogs Management", icon: ShoppingBag, href: "/dashboard/blogs-management" },
  { title: "Messages", icon: MessageCircleMore, href: "/dashboard/messages" },
  { title: "Content Management", icon: ShoppingBag, href: "/dashboard/content-management/home" },
  {
    title: "User Management",
    icon: Users,
    href: "/dashboard/user-management",
    isDropdown: true,
    subItems: [
      { title: "Roles", href: "/dashboard/role-management/" },
      { title: "Users", href: "/dashboard/user-management/" },
    ]
  },
]

interface AppSidebarProps {
  className?: string
  [key: string]: unknown
}

export function AppSidebar({ ...props }: AppSidebarProps) {
  const pathname = usePathname()
  const [isUserManagementOpen, setIsUserManagementOpen] = useState(false)

  const toggleUserManagement = () => {
    setIsUserManagementOpen(prev => !prev)
  }

  return (
    <Sidebar className="bg-white border-gray-300 border-r-1 h-screen" {...props}>
      <SidebarHeader className="bg-white p-6 border-b border-white/10 shrink-0">
        <Link href="/home" className="flex items-center gap-1">
          <Image src="/logo.svg" height={100} width={120} alt="logo" />
          <span className="text-[#ff2424] text-md ml-2">DADKA</span>
        </Link>
      </SidebarHeader>

      <SidebarContent className="bg-white px-4 py-4 flex-1 text-gray-700">
        <SidebarMenu className="space-y-1">
          {menuItems.map((item) => (
            item.isDropdown ? (

              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname.startsWith(item.href) || isUserManagementOpen} // Ensures both parent and subdropdown are active
                  className="text-gray-700 group hover:bg-[#FF2424] mb-2 hover:text-white data-[active=true]:bg-[#FF2424] data-[active=true]:text-white rounded-md"
                  onClick={toggleUserManagement}
                >
                  <div className="flex items-center gap-3 px-3 py-3 text-gray-700">
                    <item.icon className="h-4 w-4 shrink-0" />
                    <span className="text-sm">{item.title}</span>
                    {isUserManagementOpen ? (
                      <ChevronUp
                        className={`h-4 w-4 ml-auto ${isUserManagementOpen ? 'text-white' : 'text-gray-700'} group-hover:text-white`} // Apply white color to ChevronUp when active
                      />
                    ) : (
                      <ChevronDown
                        className={`h-4 w-4 ml-auto ${isUserManagementOpen ? 'text-white' : 'text-gray-700'} group-hover:text-white`} // Apply white color to ChevronDown when active
                      />
                    )}
                  </div>
                </SidebarMenuButton>
                {isUserManagementOpen && (
                  <SidebarMenu className="pl-8">
                    {item.subItems.map((subItem) => (
                      <SidebarMenuItem key={subItem.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={pathname === subItem.href}
                          className="text-gray-700 text-center hover:bg-[#FF2424] hover:text-white data-[active=true]:bg-[#FF2424] data-[active=true]:text-white rounded-md"
                        >
                          <Link href={subItem.href} className="flex items-center gap-3 px-3 py-3 text-gray-700">
                            <span className="text-sm">{subItem.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                )}
              </SidebarMenuItem>
            ) : (

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
            )
          ))}
        </SidebarMenu>
        <div className="flex-1" />
      </SidebarContent>


    </Sidebar>
  )
}
