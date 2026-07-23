"use client"

import { ReactNode } from "react"
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense"
import { Loader2 } from "lucide-react"

import { useAuth } from "@clerk/nextjs"
import { Spinner } from "@/components/ui/spinner"

export function Room({
  children,
  roomId,
}: {
  children: ReactNode
  roomId: string
}) {
  return (
    <LiveblocksProvider throttle={16} authEndpoint="/api/liveblocks/auth">
      <RoomProvider id={roomId}>
        <ClientSideSuspense
          fallback={
            <div className="flex min-h-svh items-center justify-center">
              <Spinner className="size-6 text-muted-foreground" />
            </div>
          }
        >
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  )
}
