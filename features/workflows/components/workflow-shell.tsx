import { WorkflowCanvas } from "./workflow-canvas"
import { RightSidebar } from "./right-sidebar"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

interface WorkflowShellProps {
  workflowId: string
}

export function WorkflowShell({ workflowId }: WorkflowShellProps) {
  return (
    <ResizablePanelGroup orientation="horizontal" className="size-full">
      <ResizablePanel minSize="30rem">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel minSize="18rem">
            <WorkflowCanvas />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize="8rem" minSize="6rem">
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold text-muted-foreground">Logs</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="16rem" minSize="14rem" maxSize="36rem">
        <RightSidebar />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
