import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'

type Props = {}

export default function MobileMenu({}: Props) {
  return (
    <div className='md:hidden'>
      <Sheet>
        <SheetTrigger>
          <Menu size={32} />
        </SheetTrigger>
        <SheetContent className='bg-policeBlue w-[350px] text-center pt-20'>
          <div className='space-y-10'>
            <div className='font-semibold flex flex-col space-y-6'>
              <SheetClose asChild>
                <Link
                  href='/'
                  className='hover:scale-105 transition-all hover:text-lightCoral'
                >
                  home
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href='/about'
                  className='hover:scale-105 transition-all hover:text-lightCoral'
                >
                  about
                </Link>
              </SheetClose>
            </div>
            <SheetClose asChild>
              <Link
                href={'/contact'}
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'bg-transparent rounded-full font-semibold mx-auto px-8 border-2 hover:bg-lightCoral hover:border-lightCoral hover:text-white transition-all hover:scale-105'
                )}
              >
                Contact Us
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
