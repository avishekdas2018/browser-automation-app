// import { auth } from "@clerk/nextjs/server"
// import { Plus, Workflow } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import {
//   Empty,
//   EmptyContent,
//   EmptyDescription,
//   EmptyHeader,
//   EmptyMedia,
//   EmptyTitle,
// } from "@/components/ui/empty"

// export default async function Page() {
//   await auth.protect()

//   return (
//     <Empty className="min-h-svh gap-6 border-none">
//       <EmptyHeader className="gap-4">
//         <EmptyMedia
//           variant="icon"
//           className="size-12 rounded-xl bg-[#242424] text-white [&_svg:not([class*='size-'])]:size-6"
//         >
//           <Workflow />
//         </EmptyMedia>
//       </EmptyHeader>

//       <EmptyContent className="max-w-md gap-4">
//         <EmptyTitle className="text-2xl leading-none font-medium tracking-normal text-white">
//           No workflow selected
//         </EmptyTitle>
//         <div className="flex flex-col items-center gap-4">
//           <EmptyDescription className="max-w-md text-base leading-7 font-normal tracking-normal text-[#a3a3a3]">
//             Select a workflow from the sidebar
//             <br />
//             or create a new one to get started.
//           </EmptyDescription>
//         </div>

//         <Button className="mt-2 h-10 rounded-lg bg-[#e7e7e7] px-4 text-base leading-none font-medium tracking-normal text-[#1a1a1a] hover:bg-white">
//           <Plus className="size-5 stroke-[2.25]" />
//           New workflow
//         </Button>
//       </EmptyContent>
//     </Empty>
//   )
// }

import { PlusIcon, WorkflowIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { auth } from "@clerk/nextjs/server"

export default async function Page() {
  await auth.protect()
  return (
    <Empty className="min-h-svh border-none">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <WorkflowIcon />
        </EmptyMedia>
        <EmptyTitle>No workflow selected </EmptyTitle>
        <EmptyDescription>
          Select a workflow from the sidebar or create a new one to get started.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>
          <PlusIcon />
          New workflow
        </Button>
      </EmptyContent>
    </Empty>
  )
}
