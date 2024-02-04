import { getRecommended } from '@/lib/recommended-service'

import { Recommended, RecommendedSkeleton } from './recommended'
import { Toggle, ToggleSkeleton } from './toggle'
import { Wrapper } from './wrapper'

export async function Sidebar() {
  const recommended = await getRecommended()

  return (
    <Wrapper>
      <Toggle />
      <Recommended data={recommended} />
    </Wrapper>
  )
}

export function SidebarSkeleton() {
  return (
    <aside className="fixed left-0 z-50 flex h-full w-[70px] flex-col border-r border-[#2D2E35] bg-background lg:w-60">
      <ToggleSkeleton />
      {/* <FollowingSkeleton /> */}
      <RecommendedSkeleton />
    </aside>
  )
}
