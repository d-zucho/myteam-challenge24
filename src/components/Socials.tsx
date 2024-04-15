import { cn } from '@/lib/utils'
import Image from 'next/image'

type FooterSocialsProps = {
  classNames?: string
}

export const FooterSocials = ({ classNames }: FooterSocialsProps) => (
  <div className={cn(`flex gap-2 justify-center lg:ml-auto`, classNames)}>
    <Image
      src={'/assets/icon-facebook.svg'}
      height={24}
      width={24}
      alt='facebook'
    />
    <Image
      src={'/assets/icon-pinterest.svg'}
      height={24}
      width={24}
      alt='pinterest'
    />
    <Image
      src={'/assets/icon-twitter.svg'}
      height={24}
      width={24}
      alt='twitter'
    />
  </div>
)
