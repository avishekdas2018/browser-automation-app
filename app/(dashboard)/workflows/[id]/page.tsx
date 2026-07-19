import { notFound } from "next/navigation"

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  if (!id) {
    notFound()
  }
  return (
    <div className="flex h-full items-center justify-center">
      <h1 className="text-xl font-medium">Workflow: {id}</h1>
    </div>
  )
}
