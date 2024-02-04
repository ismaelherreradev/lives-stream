'use client'

import { useSidebar } from '@/store/use-sidebar'
import { useIsClient } from 'usehooks-ts'

import { cn } from '@/lib/utils'

import { FollowingSkeleton } from './following'
import { RecommendedSkeleton } from './recommended'
import { ToggleSkeleton } from './toggle'

export function Wrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  const isClient = useIsClient()
  const { collapsed } = useSidebar((state) => state)

  if (!isClient) {
    return (
      <aside className="fixed left-0 z-50 flex h-full w-[70px] flex-col border-r border-[#2D2E35] bg-background lg:w-60">
        <ToggleSkeleton />
        <FollowingSkeleton />
        <RecommendedSkeleton />
      </aside>
    )
  }

  return (
    <aside
      className={cn(
        'fixed left-0 z-50 flex h-full w-60 flex-col border-r border-[#2D2E35] bg-background',
        collapsed && 'w-[70px]'
      )}
    >
      {children}
    </aside>
  )
}
