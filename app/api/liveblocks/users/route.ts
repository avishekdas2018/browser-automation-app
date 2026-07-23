import { auth, clerkClient } from "@clerk/nextjs/server"
import { NextRequest } from "next/server"

type UserInfo = Liveblocks["UserMeta"]["info"]
export async function POST(request: NextRequest) {
  const { userId, orgId } = await auth()

  if (!userId || !orgId) {
    return new Response("Unauthorized", { status: 401 })
  }

  let userIds: unknown

  try {
    ; ({ userIds } = await request.json())
  } catch {
    return new Response("Invalid JSON body", { status: 400 })
  }

  if (!Array.isArray(userIds) || userIds.some((id) => typeof id !== "string")) {
    return new Response("Expected {userIds: string[] }", { status: 400 })
  }

  const ids = userIds as string[]

  if (ids.length === 0) {
    return Response.json([])
  }

  const client = typeof clerkClient === "function" ? await clerkClient() : clerkClient

  const { data: users } = await client.users.getUserList({
    userId: ids,
    organizationId: [orgId],
    limit: ids.length
  })

  const usersByIds = new Map(users.map((user) => [user.id, user]))

  const resolved: (UserInfo | null)[] = ids.map((id) => {
    const user = usersByIds.get(id)

    if (!user) {

    }

    return {
      name: user?.fullName ?? user?.username ?? user?.primaryEmailAddress?.emailAddress ?? "Anonymous",
      avatar: user?.imageUrl
    }

  })

  return Response.json(resolved)
}
