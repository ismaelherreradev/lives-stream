import Image from 'next/image'
import LogoImage from '@/public/logo.webp'

export function Logo() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="overflow-hidden rounded-full">
        <Image src={LogoImage} alt="Lives Stream" priority height="200" width="200" />
      </div>
    </div>
  )
}
