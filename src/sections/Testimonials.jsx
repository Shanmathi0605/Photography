import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

const testimonials = [
  {
    quote: "They didn't just capture our day, they captured our hearts. The team is incredibly talented, professional, and creative.",
    author: "ANITA & KISHORE",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop"
  },
  {
    quote: "The final cinematic film brought tears to our eyes. It felt like watching a movie of our own love story.",
    author: "SARAH & MICHAEL",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
  },
  {
    quote: "Professionalism meets pure artistry. We couldn't have asked for a better team to document our destination wedding.",
    author: "ELENA & MARCUS",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
  }
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-24 bg-[#070707] relative overflow-hidden border-t border-white/5" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
          
          {/* Left: Text & Quote */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center relative">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="text-[#B39359] tracking-[0.2em] uppercase text-[10px] font-montserrat font-semibold">
                CLIENT LOVE
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-5xl font-cormorant text-white uppercase tracking-wide mb-16"
            >
              KIND WORDS FROM <br /><span className="text-white">AMAZING PEOPLE</span>
            </motion.h2>

            <div className="relative min-h-[200px] flex items-center">
              <span className="text-[#B39359] font-cormorant text-8xl absolute top-0 -left-6 leading-none opacity-50">"</span>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                  className="pl-8 pt-4"
                >
                  <p className="text-white/80 font-montserrat font-light text-sm md:text-base leading-relaxed mb-6 max-w-md">
                    {testimonials[current].quote}
                  </p>
                  <p className="text-[#B39359] uppercase tracking-[0.2em] text-[10px] font-montserrat font-semibold">
                    — {testimonials[current].author}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-6 mt-12"
            >
              <button 
                onClick={prev}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all duration-300"
              >
                <FiArrowLeft size={16} />
              </button>
              <button 
                onClick={next}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all duration-300"
              >
                <FiArrowRight size={16} />
              </button>
            </motion.div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/50 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-l from-[#070707]/30 to-transparent z-10 pointer-events-none" />
                
                <img 
                  src={testimonials[current].image}
                  alt={testimonials[current].author}
                  className="w-full h-full object-cover filter grayscale contrast-125 rounded-l-3xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
