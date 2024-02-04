import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 transition hover:opacity-75">
        <div className="mr-12 shrink-0 p-1 lg:mr-0 lg:shrink">
          <h1>Lives Stream</h1>
        </div>
      </div>
    </Link>
  )
}
