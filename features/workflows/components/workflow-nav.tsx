"use client"

import * as React from "react"
import { PlusIcon, WorkflowIcon } from "lucide-react"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar"
import type { Workflow } from "@/lib/db/schema"

interface WorkflowNavProps {
  workflows: Workflow[]
}

export function WorkflowNav({ workflows }: WorkflowNavProps) {
  const { state } = useSidebar()

  if (state === "collapsed") {
    return (
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <Popover>
                <PopoverTrigger asChild>
                  <SidebarMenuButton isActive aria-label="Workflows">
                    <WorkflowIcon />
                    <span>Workflows</span>
                  </SidebarMenuButton>
                </PopoverTrigger>
                <PopoverContent side="right" align="start" className="p-1">
                  <SidebarMenu className="gap-y-1">
                    <SidebarMenuItem className="pb-2">
                      <SidebarMenuButton>
                        <PlusIcon />
                        <span>New workflow</span>
                      </SidebarMenuButton>
                      <SidebarSeparator className="mx-0" />
                    </SidebarMenuItem>
                    {workflows.map((workflow) => (
                      <SidebarMenuItem key={workflow.id}>
                        <SidebarMenuButton>
                          <span>{workflow.name}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </PopoverContent>
              </Popover>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    )
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Workflows</SidebarGroupLabel>
      <SidebarGroupAction title="New workflow">
        <PlusIcon />
        <span className="sr-only">New workflow</span>
      </SidebarGroupAction>
      <SidebarGroupContent>
        <SidebarMenu className="gap-y-1">
          {workflows.map((workflow) => (
            <SidebarMenuItem key={workflow.id}>
              <SidebarMenuButton>
                <span>{workflow.name}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
