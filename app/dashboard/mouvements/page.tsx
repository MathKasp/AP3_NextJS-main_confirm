//#region TOUT LES IMPORTS 
"use client"
import { useRef, useState } from "react"
import stockList, { StockListRef } from "@/components/stocks/stockList"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { SidebarInset, SidebarProvider, SidebarTrigger, } from "@/components/ui/sidebar"
import { useAuth } from "@/context/AuthContext"
import { Import, Plus } from "lucide-react"
import { BookingForm, BookingFormSchema } from "@/components/bookings/bookingForm" //
import { cn } from "@/lib/utils"
import { z } from "zod"
import { useToast } from '@/hooks/use-toast';
import MouvementList from "@/components/mouvements/mouvementList"
import { MouvementListRef } from "@/components/mouvements/mouvementList"
import { CommandeForm, CommandeFormSchema } from "@/components/commande/commandeForm"

//#endregion

export default function Page() {
  const { user, loading } = useAuth()

  const MouvementListRef = useRef<MouvementListRef>(null);

  if (loading) return <p>Chargement...</p>

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>Mouvements</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Card className="border-none">
            <CardHeader>
              <CardTitle>
                <div className="flex justify-between">
                  <h2>Mouvement</h2>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <MouvementList ref={MouvementListRef} />
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}