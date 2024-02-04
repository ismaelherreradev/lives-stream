'use client'

import { useSidebar } from '@/store/use-sidebar'
import { User } from '@prisma/client'

import { UserItem, UserItemSkeleton } from './user-item'

// import { UserItem, UserItemSkeleton } from './user-item'

type RecommendedProps = {
  // data: (User & {
  //   stream: { isLive: boolean } | null
  // })[]
  data: User[]
}

export function Recommended({ data }: RecommendedProps) {
  const { collapsed } = useSidebar((state) => state)

  const showLabel = !collapsed && data.length > 0

  return (
    <div>
      {showLabel && (
        <div className="mb-4 pl-6">
          <p className="text-sm text-muted-foreground">Recommended</p>
        </div>
      )}
      <ul className="space-y-2 px-2">
        {data.map((user) => (
          <UserItem key={user.id} username={user.username} imageUrl={user.imageUrl} isLive={true} />
        ))}
      </ul>
    </div>
  )
}

export function RecommendedSkeleton() {
  return (
    <ul className="px-2">
      {[...Array(3)].map((_, i) => (
        <UserItemSkeleton key={i} />
      ))}
    </ul>
  )
}
