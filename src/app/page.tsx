import AboutSection from '@/components/AboutSection'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      {/* from other computer */}
      <Testimonials />
    </main>
  )
}
