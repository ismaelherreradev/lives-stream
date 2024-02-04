import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'
import { LiveBadge } from '@/components/live-badge'

const avatarSizes = cva('', {
  variants: {
    size: {
      default: 'size-8',
      lg: 'size-14',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

type UserAvatarProps = VariantProps<typeof avatarSizes> & {
  username: string
  imageUrl: string
  isLive?: boolean
  showBadge?: boolean
}

export function UserAvatar({ username, imageUrl, isLive, showBadge, size }: UserAvatarProps) {
  const canShowBadge = showBadge && isLive

  return (
    <div className="relative">
      <Avatar className={cn(isLive && 'border border-background ring-2 ring-rose-500', avatarSizes({ size }))}>
        <AvatarImage src={imageUrl} className="object-cover" />
        <AvatarFallback>
          {username[0]}
          {username[username.length - 1]}
        </AvatarFallback>
      </Avatar>
      {canShowBadge && (
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
          <LiveBadge />
        </div>
      )}
    </div>
  )
}

type UserAvatarSkeletonProps = VariantProps<typeof avatarSizes> & {}

export function UserAvatarSkeleton({ size }: UserAvatarSkeletonProps) {
  return <Skeleton className={cn('rounded-full', avatarSizes({ size }))} />
}
