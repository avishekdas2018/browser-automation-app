"use client"

import { useUser } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function TestPage() {
  const { user } = useUser()

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Test (Protected)</h1>
          <p>If you can see this, you are authenticated.</p>
          <p className="text-muted-foreground">
            Signed in as: {user?.emailAddresses?.[0]?.emailAddress ?? "unknown"}
          </p>
          <Button className="mt-2" onClick={() => toast("You are authenticated!")}>
            Button
          </Button>
        </div>
      </div>
    </div>
  )
}
