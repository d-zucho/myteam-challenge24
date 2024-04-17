import AboutHero from '@/components/AboutHero'
import Clients from '@/components/Clients'
import Directors from '@/components/Directors'
import HomeCTA from '@/components/HomeCTA'

const page = () => {
  return (
    <div className=' overflow-hidden'>
      <AboutHero />
      <Directors />
      <Clients />
      <HomeCTA />
    </div>
  )
}

export default page
