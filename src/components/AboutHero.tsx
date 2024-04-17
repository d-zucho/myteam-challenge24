import Image from 'next/image'

const AboutHero = () => {
  return (
    <div className='h-[300px] relative overflow-hidden'>
      <div className=''>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 text-center'>
          <div>
            <h1 className='text-[40px] md:text-[64px] lg:text-[80px] xl:text-[100px] font-bold 10 md:leading-[56px] lg:text-left lg:leading-[100px]'>
              About
            </h1>
          </div>
          <div className='flex flex-col justify-between pl-10 max-h-[190px]'>
            <div className='hidden lg:block lg:border-t-2 w-[50px] lg:border-lightCoral pb-4' />
            <p className='font-semi-bold text-center leading-7 mx-auto py-4 lg:mx-0 lg:text-left max-w-md'>
              We help companies build dynamic teams made up of top global
              talent. Using our network of passionate professionals, we drive
              innovation and deliver incredible outcomes. Talented and diverse
              teams sgaoe the best products and experiences. We'll bring those
              teams to you.
            </p>
            <div className=''>
              <Image
                src='/assets/bg-pattern-about-1-mobile-nav-1.svg'
                alt='pattern'
                height={150}
                width={150}
                aria-hidden={true}
                className='absolute bottom-60 -right-[75px] md:-bottom-20 md:-right-[75px]'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHero
