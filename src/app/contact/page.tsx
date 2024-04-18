import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { contactTopics } from '@/data/textData'
import Image from 'next/image'

const ContactPage = () => {
  return (
    <div className=''>
      <MaxWidthWrapper>
        {/* text container */}
        <div>
          <div className='text-center space-y-4 pb-5'>
            <h1 className='text-5xl font-bold md:text-6xl'>Contact</h1>
            <p className='text-lightCoral font-bold text-3xl'>Ask us about</p>
          </div>
          <div className='space-y-4 mx-auto w-fit'>
            {contactTopics.map((topic) => (
              <div key={topic.key}>
                <div className='flex items-center space-x-4'>
                  <div className='relative shrink-0'>
                    <Image
                      src={topic.image}
                      alt={topic.topic}
                      height={60}
                      width={60}
                      className='object-center object-contain'
                    />
                  </div>
                  <p className='text-lg font-bold'>{topic.topic}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default ContactPage
