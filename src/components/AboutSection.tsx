import { aboutFacts } from '../data/textData'
import Image from 'next/image'
import MaxWidthWrapper from './MaxWidthWrapper'

const AboutSection = () => {
  return (
    <section
      id='about'
      className=' bg-sacrementroGreen py-32 lg:py-40 relative overflow-hidden'
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
        <div className='grid lg:grid-cols-2 relative items-start'>
          <div id='title-container'>
            <div className='lock border-t-4 w-[50px] border-lightCoral absolute left-0 -top-6' />
            <h2 className='text-4xl font-bold  mt-6 w-3/4 lg:text-5xl'>
              Build & manage distributed teams like no one else.
            </h2>
          </div>

          {/* grid container */}
          <div className='grid grid-cols-1 mt-14 lg:mt-0 gap-16 lg:gap-6'>
            {aboutFacts.map((fact) => (
              // grid item
              <div
                key={fact.key}
                className='text-center space-y-4 md:flex md:text-left md:items-center md:gap-12'
              >
                {/* image container */}
                <div className='flex-shrink-0'>
                  <Image
                    src={fact.image}
                    height={75}
                    width={75}
                    alt='icon'
                    className='mx-auto'
                  />
                </div>
                {/* text container */}
                <div>
                  <h3 className='text-lightCoral text-lg font-semibold'>
                    {fact.title}
                  </h3>
                  <p className='max-w-sm mx-auto pt-2 md:pt-4 md:max-w-lg '>
                    {fact.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default AboutSection
