'use client'

import { useSidebar } from '@/store/use-sidebar'
import { useIsClient } from 'usehooks-ts'

import { cn } from '@/lib/utils'

export function Wrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  const isClient = useIsClient()
  const { collapsed } = useSidebar((state) => state)

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
