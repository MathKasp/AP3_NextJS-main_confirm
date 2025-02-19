"use client"

import * as React from "react"
import { BookOpen, Bot, Building2, CircleHelp, Command, Frame, GraduationCap, LifeBuoy, Map, NotebookPen, PieChart, Send, Settings2, SquareTerminal, Eye, Package, Boxes, Archive} from "lucide-react"
import { NavMain } from "@/components/sidebar/nav-main"
import { NavProjects } from "@/components/sidebar/nav-projects"
import { NavSecondary } from "@/components/sidebar/nav-secondary"
import { NavUser } from "@/components/sidebar/nav-user"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem,} from "@/components/ui/sidebar"
import { useAuth } from "@/context/AuthContext"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Espace du Stock",
      url: "/dashboard/stocks",
      icon: Eye,
      isActive: true
    },
    {
      title: "Espace des Commandes",
      url: "/dashboard/commande",
      icon: Package,
      isActive: true
    },
    {
      title: "Commandes en Attente",
      url: "/dashboard/commandeAttente",
      icon: Boxes,
      isActive: true
    },
    {
      title: "Mouvements",
      url: "/dashboard/mouvements",
      icon: Archive,
      isActive: true
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "FAQ",
      url: "#",
      icon: CircleHelp,
    },
  ],
  projects: [
    
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const { user, loading } = useAuth();

  if (loading) return <p>Chargement...</p>;
  
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-sidebar-primary-foreground">
                  <GraduationCap className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">AP3</span>
                  <span className="truncate text-xs">Isitech</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
