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
              <Link href='/'>home</Link>
              <Link href='/'>about</Link>
            </div>
            <SheetClose>
              <Link
                href={'/contact'}
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'bg-transparent rounded-full font-semibold mx-auto px-8 border-2'
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