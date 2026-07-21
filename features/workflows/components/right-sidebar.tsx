"use client"

import * as React from "react"
import { PlayIcon, Loader2Icon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { runWorkflowAction } from "@/features/workflows/actions"
import { useRealtimeRun } from "@trigger.dev/react-hooks"
import type { helloWorldTask } from "@/trigger/example"

export function RightSidebar() {
  const [isPending, startTransition] = React.useTransition()
  const [runInfo, setRunInfo] = React.useState<{
    runId: string
    publicAccessToken: string
  } | null>(null)

  const handleRun = () => {
    startTransition(async () => {
      const result = await runWorkflowAction()
      setRunInfo({
        runId: result.runId,
        publicAccessToken: result.publicAccessToken,
      })
    })
  }

  return (
    <div className="flex h-full flex-col p-4">
      <div className="flex w-full items-center justify-end">
        <Button onClick={handleRun} disabled={isPending}>
          {isPending ? <Loader2Icon className="animate-spin" /> : <PlayIcon />}
          Run
        </Button>
      </div>
      {runInfo && (
        <div className="mt-4 rounded-md border p-4">
          <RunStatus
            runId={runInfo.runId}
            publicAccessToken={runInfo.publicAccessToken}
          />
        </div>
      )}
    </div>
  )
}

function RunStatus({
  runId,
  publicAccessToken,
}: {
  runId: string
  publicAccessToken: string
}) {
  const { run, error } = useRealtimeRun(runId, {
    accessToken: publicAccessToken,
  })

  if (error)
    return (
      <div className="text-sm text-destructive">Error: {error.message}</div>
    )
  if (!run)
    return (
      <div className="text-sm text-muted-foreground">Loading run status...</div>
    )

  return (
    <div className="flex flex-col gap-2 text-sm">
      <div className="font-semibold">
        Status: <span className="text-primary">{run.status}</span>
      </div>
      {run.status === "COMPLETED" && run.output ? (
        <div className="mt-2 rounded bg-muted p-2 text-xs">
          {JSON.stringify(run.output, null, 2)}
        </div>
      ) : null}
    </div>
  )
}
