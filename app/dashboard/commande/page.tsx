"use client"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger,} from "@/components/ui/sidebar"


export default function commande() {
    return (
        <>
            <SidebarProvider>
            <AppSidebar />  
            <div>
                Binjour
            </div>
            </SidebarProvider>
        </>
    )
}