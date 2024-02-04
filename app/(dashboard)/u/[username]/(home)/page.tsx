import { currentUser } from '@clerk/nextjs'

import { getUserByUsername } from '@/lib/user-service'

// import { StreamPlayer } from "@/components/stream-player";

interface CreatorPageProps {
  params: {
    username: string
  }
}

export default async function CreatorPage({ params }: CreatorPageProps) {
  const externalUser = await currentUser()
  const user = await getUserByUsername(params.username)

  if (!user) {
    throw new Error('Unauthorized')
  }

  return <div className="h-full">{user.id}</div>
}
