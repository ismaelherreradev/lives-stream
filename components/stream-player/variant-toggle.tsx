'use client'

import { ChatVariant, useChatSidebar } from '@/store/use-chat-sidebar'
import { MessageSquare, Users } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Hint } from '@/components/hint'

export const VariantToggle = () => {
  const { variant, onChangeVariant } = useChatSidebar((state) => state)

  const isChat = variant === ChatVariant.CHAT

  const Icon = isChat ? Users : MessageSquare

  const onToggle = () => {
    const newVariant = isChat ? ChatVariant.COMMUNITY : ChatVariant.CHAT
    onChangeVariant(newVariant)
  }

  const label = isChat ? 'Community' : 'Go back to chat'

  return (
    <Hint label={label} side="left" asChild>
      <Button
        onClick={onToggle}
        variant="ghost"
        className="h-auto bg-transparent p-2 hover:bg-white/10 hover:text-primary"
      >
        <Icon className="size-4" />
      </Button>
    </Hint>
  )
}
