// import { AppSidebar } from "@/components/app-sidebar"
// import {
//   SidebarInset,
//   SidebarProvider,
//   SidebarTrigger,
// } from "@/components/ui/sidebar"
// import { TooltipProvider } from "@/components/ui/tooltip"

// export default function DashboardLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <SidebarProvider
//       style={
//         {
//           "--sidebar-width": "23.5rem",
//         } as React.CSSProperties
//       }
//     >
//       <AppSidebar />
//       <SidebarInset className="min-h-svh bg-[#1a1a1a]">
//         <div className="absolute top-4 left-4 z-10 md:hidden">
//           <SidebarTrigger className="text-white hover:bg-[#242424] hover:text-white" />
//         </div>
//         {children}
//       </SidebarInset>
//     </SidebarProvider>
//   )
// }

import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider className="h-svh">
      <AppSidebar />
      <SidebarInset className="min-h-0 overflow-hidden border shadow-none!">
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
