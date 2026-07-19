"use client"

import * as React from "react"
import { PlusIcon, WorkflowIcon, Loader2Icon } from "lucide-react"

import { generateSlug } from "@/features/workflows/lib/generate-slug"

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
  createWorkflowAction: (name: string) => Promise<void>
}

export function WorkflowNav({ workflows, createWorkflowAction }: WorkflowNavProps) {
  const { state } = useSidebar()
  const [isPending, startTransition] = React.useTransition()

  const handleCreate = () => {
    startTransition(async () => {
      const slug = generateSlug()
      await createWorkflowAction(slug)
    })
  }

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
                      <SidebarMenuButton onClick={handleCreate} disabled={isPending}>
                        {isPending ? <Loader2Icon className="animate-spin" /> : <PlusIcon />}
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
      <SidebarGroupAction title="New workflow" onClick={handleCreate} disabled={isPending}>
        {isPending ? <Loader2Icon className="animate-spin" /> : <PlusIcon />}
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
