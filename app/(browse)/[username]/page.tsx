import { notFound } from 'next/navigation'

import { isBlockedByUser } from '@/lib/block-service'
import { isFollowingUser } from '@/lib/follow-service'
import { getUserByUsername } from '@/lib/user-service'

// import { StreamPlayer } from "@/components/stream-player";

interface UserPageProps {
  params: {
    username: string
  }
}

const UserPage = async ({ params }: UserPageProps) => {
  const user = await getUserByUsername(params.username)

  if (!user ) {
    notFound()
  }

  const isFollowing = await isFollowingUser(user.id)
  const isBlocked = await isBlockedByUser(user.id)

  // if (isBlocked) {
  //   notFound()
  // }

  return (
    <div>
      <h1>{user.username}</h1>
      <p>{user.bio}</p>
    </div>
  )
}

export default UserPage
