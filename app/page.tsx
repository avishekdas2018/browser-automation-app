import { auth } from "@clerk/nextjs/server"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"

export default async function Page() {
  await auth.protect()

  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <div className="flex flex-col gap-4">
        <UserButton />
        <OrganizationSwitcher />
      </div>
    </div>
  )
}
