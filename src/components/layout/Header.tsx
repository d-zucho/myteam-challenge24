import Image from 'next/image'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Link from 'next/link'
import { Button, buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'
import MobileMenu from '../MobileMenu'

const Header = () => {
  return (
    <header>
      <MaxWidthWrapper>
        <div className='flex items-center justify-between py-12'>
          <div className='flex justify-between items-center w-full'>
            {/* <div className='flex items-center'> */}
            <div className='flex items-center gap-12 w-full'>
              <Link href='/'>
                <Image
                  src={'/assets/logo.svg'}
                  alt='logo'
                  width={160}
                  height={40}
                />
              </Link>
              <div className='hidden md:flex justify-between w-full'>
                <div className=' space-x-6 font-semibold'>
                  <Link href='/'>home</Link>
                  <Link href='/'>about</Link>
                </div>
              </div>
              {/* </div> */}
              <Link
                href={'/'}
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'bg-transparent rounded-full hidden md:block font-semibold'
                )}
              >
                Contact Us
              </Link>
            </div>
          </div>
          <MobileMenu />
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

export default Header
