'use client'
import Image from 'next/image'
import MaxWidthWrapper from './MaxWidthWrapper'
import { useMediaQuery } from 'usehooks-ts'

const Hero = () => {
  const isDekstop = useMediaQuery('(min-width: 1024px)')

  return (
    <section id='hero' className='h-[400px] relative'>
      <MaxWidthWrapper>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 text-center'>
          <div>
            <h1 className='text-[40px] md:text-[64px] lg:text-[80px] xl:text-[100px] font-bold 10 md:leading-[56px] lg:text-left lg:leading-[100px]'>
              Find the <br /> best{' '}
              <span className=' text-lightCoral'>talent</span>
            </h1>
          </div>
          <div className='flex flex-col justify-between pl-10 max-h-[190px]'>
            <div className='hidden lg:block lg:border-t-2 w-[50px] lg:border-raptureBlue' />
            <p className='font-semi-bold max-w-md text-center leading-7 mx-auto lg:mx-0 lg:text-left'>
              Finding the right people and building high performing teams can be
              hard. Most companies aren’t tapping into the abundance of global
              talent. We’re about to change that.
            </p>
          </div>
        </div>
        <div>
          <Image
            src='/assets/bg-pattern-home-1.svg'
            alt='pattern'
            height={200}
            width={200}
            aria-hidden={true}
            className='top-0 -left-32 hidden lg:block absolute'
          />
        </div>
        <div>
          {isDekstop ? (
            <Image
              src='/assets/bg-pattern-home-2.svg'
              alt='pattern'
              height={200}
              width={200}
              aria-hidden={true}
              className='absolute bottom-0 right-32'
            />
          ) : (
            <Image
              src={'/assets/bg-pattern-home-2.svg'}
              alt='pattern'
              height={400}
              width={400}
              aria-hidden={true}
              className='absolute bottom-0 mx-auto right-[25%]w-[400px]'
            />
          )}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero
