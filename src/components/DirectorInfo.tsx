import Image from 'next/image'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

type DirectorInfoProps = {
  description: string
}

const DirectorInfo = ({ description }: DirectorInfoProps) => {
  return (
    <div className='mx-auto w-fit'>
      <Popover>
        <PopoverTrigger asChild>
          <div className='bg-lightCoral w-fit p-4 rounded-full inset-x-0 absolute m-auto -bottom-[22px] flex items-center hover:cursor-pointer'>
            <Image
              src={'/assets/icon-cross.svg'}
              width={15}
              height={15}
              alt='details'
              aria-hidden='true'
              className=''
            />
          </div>
        </PopoverTrigger>
        <PopoverContent
          side='top'
          className='data-[side=top]:slide-in-from-bottom-2 border-nonepp bg-midnightGreen text-white shadow-md'
        >
          {description}
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default DirectorInfo
