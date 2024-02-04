'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { SearchIcon, X } from 'lucide-react'
import qs from 'query-string'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Search() {
  const router = useRouter()
  const [value, setValue] = useState('')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!value) return

    const url = qs.stringifyUrl(
      {
        url: '/search',
        query: { term: value },
      },
      { skipEmptyString: true }
    )

    router.push(url)
  }

  const onClear = () => {
    setValue('')
  }

  return (
    <form onSubmit={onSubmit} className="relative flex w-full items-center lg:w-[400px]">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
        className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
      />
      {value && (
        <X
          className="absolute right-14 top-2.5 size-5 cursor-pointer text-muted-foreground transition hover:opacity-75"
          onClick={onClear}
        />
      )}
      <Button type="submit" size="sm" variant="secondary" className="rounded-l-none">
        <SearchIcon className="size-5 text-muted-foreground" />
      </Button>
    </form>
  )
}
