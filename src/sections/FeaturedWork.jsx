import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const images = [
  '/images/photo.png',
  '/images/b0c1a9580e35d9da72850cbd828a0d53.jpg',
  '/images/photo.png',
  '/images/b0c1a9580e35d9da72850cbd828a0d53.jpg',
  '/images/photo.png',
]

export function FeaturedWork() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 relative bg-charcoal z-10 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-luxury-gold" />
            <span className="text-luxury-gold tracking-[0.2em] uppercase text-xs">Curated Selection</span>
            <div className="w-12 h-[1px] bg-luxury-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-cormorant mb-6">Featured Masterpieces</h2>
        </motion.div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative w-full flex overflow-x-hidden group">
        <div className="animate-marquee flex whitespace-nowrap gap-8 px-4">
          {images.map((src, idx) => (
            <div key={idx} className="w-[300px] md:w-[400px] aspect-[4/5] relative overflow-hidden rounded-sm flex-shrink-0 group-hover:opacity-50 hover:!opacity-100 transition-opacity duration-300">
              <img src={src} alt="Featured" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
            </div>
          ))}
          {/* Duplicate for seamless looping */}
          {images.map((src, idx) => (
            <div key={`dup-${idx}`} className="w-[300px] md:w-[400px] aspect-[4/5] relative overflow-hidden rounded-sm flex-shrink-0 group-hover:opacity-50 hover:!opacity-100 transition-opacity duration-300">
              <img src={src} alt="Featured" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-20">
        <a href="#portfolio">
          <span className="text-white hover:text-luxury-gold uppercase tracking-widest text-xs transition-colors border-b border-luxury-gold pb-1 cursor-pointer">
            View Full Portfolio
          </span>
        </a>
      </div>
    </section>
  )
}
