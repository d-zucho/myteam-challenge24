import { directors } from '@/data/textData'
import DirectorCard from './DirectorCard'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'

const Directors = () => {
  return (
    <section className='relative overflow-hidden bg-jungleGreen py-36'>
      <Image
        src='/assets/bg-pattern-about-2-contact-1.svg'
        alt='sdfsdf'
        width={200}
        height={200}
        className='absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 sm:translate-y-0'
      />
      <MaxWidthWrapper>
        <h2 className='text-center text-3xl font-bold pb-10'>
          Meet the directors
        </h2>
        <div className='grid gap-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-20'>
          {directors.map((director) => (
            <DirectorCard
              key={director.key}
              name={director.name}
              image={director.image}
              position={director.position}
              description={director.description}
            />
          ))}
        </div>
      </MaxWidthWrapper>
      <Image
        src={'/assets/bg-pattern-home-4-about-3.svg'}
        alt='pattern'
        width={150}
        height={150}
        aria-hidden={true}
        className='absolute bottom-0 right-0'
      />
    </section>
  )
}

export default Directors
