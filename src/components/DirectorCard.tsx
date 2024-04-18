import { director } from '@/data/types'
import Image from 'next/image'
import DirectorInfo from './DirectorInfo'

const DirectorCard = ({ name, image, position, description }: director) => {
  return (
    <article className='bg-sacrementroGreen rounded-sm text-center w-[300px] pt-6 pb-12 mx-auto space-y-4 relative shadow-md'>
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className='rounded-full border-white border-2 mx-auto'
      />
      <div>
        <h3 className='text-raptureBlue font-semibold text-lg'>{name}</h3>
        <span className='italic'>{position}</span>
      </div>
      <div className=''>
        {/* <Image
          src={'/assets/icon-cross.svg'}
          width={15}
          height={15}
          alt='details'
          aria-hidden='true'
          className=''
        /> */}
        <DirectorInfo description={description} />
      </div>
    </article>
  )
}

export default DirectorCard
