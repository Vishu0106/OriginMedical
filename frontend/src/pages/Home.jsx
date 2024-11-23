import Header from '../components/Header'
import Hero from '../components/Hero'
import FeatureCards from '../components/FeatureCards'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <FeatureCards />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </main>
  )
}

