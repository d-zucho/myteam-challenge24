import Image from 'next/image'
import MaxWidthWrapper from './MaxWidthWrapper'
import { testimonials } from '@/data/textData'

const Testimonials = () => {
  return (
    <section className=''>
      <Image
        src={'/assets/bg-pattern-home-4-about-3.svg'}
        width={100}
        height={100}
        alt='pattern'
        aria-hidden='true'
      />
      <MaxWidthWrapper className='py-10'>
        <h2 className='text-3xl font-bold text-center mb-10'>
          Delivering real results for top companies. Some of our{' '}
          <span className=' text-raptureBlue'>success stories.</span>
        </h2>
        {/* grid container */}
        <div className='py-10 grid  lg:grid-cols-3 gap-24'>
          {testimonials.map((testimonial) => (
            <div key={testimonial.key} className='relative z-0 text-center'>
              <Image
                src={'/assets/icon-quotes.svg'}
                width={100}
                height={100}
                alt='quote'
                className='absolute inset-x-0 m-auto -z-10 -top-12'
              />

              <p>{testimonial.quote}</p>
              <div className='flex flex-col gap-2 py-4'>
                <span className='font-bold text-lg'>{testimonial.name}</span>
                <span className='italic text-sm'>{testimonial.position}</span>
              </div>
              <Image
                src={testimonial.image}
                width={65}
                height={65}
                alt={testimonial.name}
                className='rounded-full border-[#C4FFFE] border-4 mx-auto'
              />
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Testimonials
