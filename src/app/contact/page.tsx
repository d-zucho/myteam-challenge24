import ContactForm from '@/components/ContactForm'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { contactTopics } from '@/data/textData'
import Image from 'next/image'

const ContactPage = () => {
  return (
    <div className=''>
      <MaxWidthWrapper>
        {/* text container */}
        <div className='grid lg:grid-cols-2'>
          <div className='text-center space-y-4 pb-5 lg:text-left'>
            <h1 className='text-5xl lg:text-6xl font-bold md:text-6xl'>
              Contact
            </h1>
            <p className='text-lightCoral font-bold text-3xl'>Ask us about</p>

            <div className='space-y-4 mx-auto w-fit lg:mx-0'>
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
          <ContactForm />
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default ContactPage
