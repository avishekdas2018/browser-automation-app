import { liveblocks } from "@/lib/liveblocks"
import { auth, currentUser } from "@clerk/nextjs/server"
import { NextRequest } from "next/server"



export async function POST() {
  const { userId, orgId } = await auth()
  const user = await currentUser()


  if (!user) {
    return new Response("Unauthorized", { status: 401 })
  }
  if (!userId || !orgId) {
    return new Response("Unauthorized", { status: 401 })
  }

  // Identify the user and return the result
  const { status, body } = await liveblocks.identifyUser(
    {
      userId,
      // Group the user into their current organization
      groupIds: [orgId],
      organizationId: orgId
    },
    {
      userInfo: {
        name: user.fullName ?? user.firstName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous",
        avatar: user.imageUrl,
      },
    }
  )

  return new Response(body, { status })
}
