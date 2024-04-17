import Image from 'next/image'
import MaxWidthWrapper from './MaxWidthWrapper'
import { clients } from '@/data/textData'

const Clients = () => {
  return (
    <div className='bg-sacrementroGreen py-24 relative overflow-hidden'>
      <Image
        src={'/assets/bg-pattern-home-3.svg'}
        width={150}
        height={150}
        alt='pattern'
        aria-hidden='true'
        className='absolute -top-[100px] md:top-0 md:left-0 z-0'
      />
      <MaxWidthWrapper>
        <div className='z-50'>
          <h2 className=' text-3xl md:text-5xl font-bold text-center mb-10 z-10'>
            Some of our clients
          </h2>
          <div className='mx-auto flex flex-col gap-12 w-fit md:flex-row md:gap-8'>
            {clients.map((client) => (
              <div>
                <Image
                  src={client.image}
                  width={100}
                  height={100}
                  alt={client.name}
                  key={client.key}
                />
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default Clients
