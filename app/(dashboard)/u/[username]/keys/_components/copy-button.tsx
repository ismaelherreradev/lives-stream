'use client'

import { useState } from 'react'
import { CheckCheck, Copy } from 'lucide-react'

import { Button } from '@/components/ui/button'

type CopyButtonProps = {
  value?: string
}

export function CopyButton({ value }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false)

  function onCopy() {
    if (!value) return

    setIsCopied(true)
    navigator.clipboard.writeText(value)
    setTimeout(() => {
      setIsCopied(false)
    }, 1000)
  }

  const Icon = isCopied ? CheckCheck : Copy

  return (
    <Button onClick={onCopy} disabled={!value || isCopied} variant="ghost" size="sm">
      <Icon className="size-4" />
    </Button>
  )
}
