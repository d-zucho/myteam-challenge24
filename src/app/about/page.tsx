import AboutHero from '@/components/AboutHero'
import Directors from '@/components/Directors'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

const page = () => {
  return (
    <div className=' overflow-hidden'>
      <MaxWidthWrapper>
        <AboutHero />
        <Directors />
      </MaxWidthWrapper>
    </div>
  )
}

export default page
