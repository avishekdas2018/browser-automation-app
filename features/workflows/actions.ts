"use server"

import { auth as clerkAuth } from "@clerk/nextjs/server"
import { auth, tasks } from "@trigger.dev/sdk"
import type { helloWorldTask } from "@/trigger/example"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { createWorkflow } from "@/features/workflows/data"


export async function createWorkflowAction(name: string) {
  const { orgId } = await clerkAuth()

  if (!orgId) {
    throw new Error("No active organization")
  }

  const workflow = await createWorkflow(orgId, name)

  revalidatePath("/workflows", "layout")
  redirect(`/workflows/${workflow.id}`)
}

export async function runWorkflowAction() {
  const handle = await tasks.trigger<typeof helloWorldTask>("hello-world", {
    message: "Triggered from the UI!",
  })

  const publicAccessToken = await auth.createPublicToken({
    scopes: { read: { runs: [handle.id] } },
  })

  return { runId: handle.id, publicAccessToken }
}
