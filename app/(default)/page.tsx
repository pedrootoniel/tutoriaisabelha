export const metadata = {
  title: 'Tutoriais Abelha Rainha',
  description: 'Portal de tutoriais criado para os nossos distribuidores',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Testimonials from '@/components/testimonials'
import Hero1 from '@/components/hero1'
import Hero2 from '@/components/hero2'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Hero1 />
      <Hero2 />
      <Testimonials />
      <Newsletter />
    </>
  )
}
