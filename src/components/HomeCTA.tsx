import Image from 'next/image'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Button } from './ui/button'

const HomeCTA = () => {
  return (
    <div id='cta' className=' bg-lightCoral text-center relative'>
      <MaxWidthWrapper className='py-20 md:py-24'>
        <h2 className='text-3xl md:text-4xl text-sacrementroGreen font-bold'>
          Ready to get started?
        </h2>
        <Button
          variant={'outline'}
          className='rounded-full py-5 px-6 bg-transparent border-sacrementroGreen border-2 text-lg text-sacrementroGreen font-semibold mx-auto hover:bg-sacrementroGreen hover:text-white transition-all hover:border-transparent mt-6 active:scale-105'
        >
          contact us
        </Button>
      </MaxWidthWrapper>
      <Image
        src={'/assets/bg-pattern-home-6-about-5.svg'}
        width={150}
        height={100}
        alt='pattern'
        aria-hidden='true'
        className='absolute bottom-0 inset-x-0'
      />
    </div>
  )
}

export default HomeCTA
