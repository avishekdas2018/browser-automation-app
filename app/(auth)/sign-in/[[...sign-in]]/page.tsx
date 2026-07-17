import { SignIn } from "@clerk/nextjs"
import { shadcn } from "@clerk/ui/themes"
import { auth } from "@clerk/nextjs/server"

export default async function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn appearance={{ theme: shadcn }} />
    </div>
  )
}
