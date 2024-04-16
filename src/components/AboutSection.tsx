import Image from 'next/image'
import MaxWidthWrapper from './MaxWidthWrapper'

const AboutSection = () => {
  return (
    <section
      id='about'
      className=' bg-sacrementroGreen py-32 relative overflow-hidden'
    >
      <Image
        src={'/assets/bg-pattern-home-3.svg'}
        height={200}
        width={200}
        alt='pattern'
        aria-hidden='true'
        className='absolute top-0 -right-24'
      />
      <MaxWidthWrapper>
        <div className='lock border-t-4 w-[50px] border-lightCoral' />
        <div>
          <h2 className='text-4xl font-bold w-1/2 mt-6'>
            Build & manage distributed teams like no one else.
          </h2>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default AboutSection
