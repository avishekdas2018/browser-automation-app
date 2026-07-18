// "use client"

// import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
// import { Building2, PanelLeft, Plus, Workflow } from "lucide-react"

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarGroupAction,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarRail,
//   SidebarTrigger,
// } from "@/components/ui/sidebar"

// const workflows = [
//   "dominant-wasp",
//   "honest-reindeer",
//   "expected-llama",
//   "essential-ocelot",
//   "creepy-echidna",
//   "eastern-silkworm",
//   "cultural-lion",
//   "proud-weasel",
//   "regional-bonobo",
// ]

// export function AppSidebar({ ...props }) {
//   return (
//     <Sidebar
//       collapsible="icon"
//       {...props}
//       className="border-r-0 bg-[#1a1a1a] text-white"
//     >
//       <SidebarHeader className="h-24 justify-center px-6 group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:px-0">
//         <div className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center">
//           <div className="flex min-w-0 flex-1 items-center group-data-[collapsible=icon]:hidden [&_.cl-organizationSwitcherTrigger]:h-12 [&_.cl-organizationSwitcherTrigger]:gap-3 [&_.cl-organizationSwitcherTrigger]:rounded-xl [&_.cl-organizationSwitcherTrigger]:px-0 [&_.cl-organizationSwitcherTrigger]:text-2xl [&_.cl-organizationSwitcherTrigger]:font-medium [&_.cl-organizationSwitcherTrigger]:text-[#a3a3a3] [&_.cl-organizationSwitcherTrigger]:shadow-none [&_.cl-organizationSwitcherTrigger]:hover:bg-transparent [&_.cl-organizationSwitcherTriggerIcon]:size-5 [&_.cl-organizationSwitcherTriggerIcon]:text-[#a3a3a3]">
//             <OrganizationSwitcher
//               hidePersonal
//               fallback={<Building2 className="size-5" />}
//               appearance={{
//                 elements: {
//                   organizationPreviewAvatarBox:
//                     "size-12 rounded-2xl bg-violet-600",
//                   organizationPreviewMainIdentifier: "text-[#a3a3a3]",
//                 },
//               }}
//             />
//           </div>
//           <SidebarTrigger className="size-10 shrink-0 text-white group-data-[collapsible=icon]:size-8 hover:bg-[#242424] hover:text-white">
//             <PanelLeft className="size-5" />
//           </SidebarTrigger>
//         </div>
//       </SidebarHeader>

//       <SidebarContent className="px-4 group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:px-0">
//         <SidebarGroup className="p-0">
//           <div className="flex items-center px-2 pt-5 pb-4 group-data-[collapsible=icon]:hidden">
//             <SidebarGroupLabel className="h-auto flex-1 p-0 text-base font-semibold text-[#a3a3a3]">
//               Workflows
//             </SidebarGroupLabel>
//             <SidebarGroupAction
//               aria-label="Create workflow"
//               className="static size-9 text-white hover:bg-[#242424] hover:text-white"
//             >
//               <Plus className="size-5" />
//             </SidebarGroupAction>
//           </div>

//           <SidebarGroupContent>
//             <SidebarMenu className="gap-2 group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:gap-3">
//               {workflows.map((workflow, index) => (
//                 <SidebarMenuItem key={workflow}>
//                   <SidebarMenuButton
//                     isActive={index === 0}
//                     tooltip={workflow}
//                     className="h-12 rounded-xl px-4 text-base font-normal text-white group-data-[collapsible=icon]:size-10! group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:rounded-lg! group-data-[collapsible=icon]:p-0! hover:bg-[#242424] hover:text-white data-active:bg-[#242424] data-active:font-normal data-active:text-white group-data-[collapsible=icon]:data-active:bg-[#242424]"
//                   >
//                     <Workflow className="size-5 stroke-[2.5] group-data-[collapsible=icon]:size-5" />
//                     <span>{workflow}</span>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>

//       <SidebarFooter className="mt-auto px-6 py-7 group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:px-0 [&_.cl-userButtonAvatarBox]:size-12 group-data-[collapsible=icon]:[&_.cl-userButtonAvatarBox]:size-10">
//         <UserButton />
//       </SidebarFooter>
//       <SidebarRail />
//     </Sidebar>
//   )
// }

"use client"

import * as React from "react"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import { PlusIcon, WorkflowIcon } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const workflows = [
  "dominant-wasp",
  "honest-reindeer",
  "expected-llama",
  "essential-ocelot",
  "creepy-echidna",
  "eastern-silkworm",
  "cultural-lion",
  "proud-weasel",
  "regional-bonobo",
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeWorkflow, setActiveWorkflow] = React.useState(workflows[0])

  return (
    <Sidebar variant="inset" collapsible="icon" {...props}>
      <SidebarHeader className="flex-row items-center justify-between gap-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:gap-0">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: "min-w-0 group-data-[collapsible=icon]:!hidden",
              organizationSwitcherTrigger: "w-full justify-between",
            },
          }}
        />
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workflows</SidebarGroupLabel>
          <SidebarGroupAction title="New workflow">
            <PlusIcon />
            <span className="sr-only">New workflow</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu className="gap-y-0.5">
              {workflows.map((workflow) => (
                <SidebarMenuItem key={workflow}>
                  <SidebarMenuButton
                    isActive={workflow === activeWorkflow}
                    onClick={() => setActiveWorkflow(workflow)}
                    tooltip={workflow}
                  >
                    <WorkflowIcon />
                    <span>{workflow}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="group-data-[collapsible=icon]:items-center">
        <UserButton
          appearance={{
            elements: {
              rootBox: "w-full",
              userButtonTrigger:
                "w-full justify-start group-data-[collapsible=icon]:justify-center",
              userButtonOuterIdentifier: "group-data-[collapsible=icon]:hidden",
            },
          }}
        />
      </SidebarFooter>
    </Sidebar>
  )
}
