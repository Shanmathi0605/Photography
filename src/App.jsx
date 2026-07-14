import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { CustomCursor } from './components/layout/CustomCursor'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Services } from './sections/Services'
import { Portfolio } from './sections/Portfolio'
import { Testimonials } from './sections/Testimonials'
import { Booking } from './sections/Booking'
import { Footer } from './components/layout/Footer'
import { Philosophy } from './sections/Philosophy'
import { FeaturedWork } from './sections/FeaturedWork'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const handleRaf = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(handleRaf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(handleRaf)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-deep-black selection:bg-luxury-gold selection:text-deep-black">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Philosophy />
        <FeaturedWork />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </div>
  )
}

export default App
