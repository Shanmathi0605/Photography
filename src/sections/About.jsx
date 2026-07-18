import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 bg-[#070707] relative overflow-hidden text-white border-t border-white/5" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 relative">
        
        {/* Left: Moody Image */}
        <div className="w-full lg:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/3] md:aspect-[3/2] w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#070707]/80 via-transparent to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/90 via-[#070707]/20 to-transparent z-10 pointer-events-none" />
            <img 
              src="https://images.unsplash.com/photo-1554046920-90dcac824afb?q=80&w=2069&auto=format&fit=crop" 
              alt="Photographer" 
              className="w-full h-full object-cover filter grayscale contrast-125"
            />
            {/* Signature style overlay */}
            <div className="absolute bottom-6 left-6 z-20">
              <span className="font-cormorant italic text-3xl text-white/20">Eterna Studios</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-[#B39359] tracking-[0.2em] uppercase text-[10px] font-montserrat font-semibold">
              ABOUT US
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-cormorant leading-tight mb-8 uppercase"
          >
            WE TURN MOMENTS <br />INTO <span className="text-[#B39359]">MASTERPIECES</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/60 font-montserrat text-xs md:text-sm leading-relaxed mb-10 max-w-md"
          >
            At Eterna Studios, we believe in capturing raw emotions, timeless moments, and unforgettable stories. Every frame we create is crafted with passion, creativity, and perfection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="border border-white/20 px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-montserrat hover:border-[#B39359] hover:text-[#B39359] transition-colors duration-300">
              DISCOVER OUR STORY
            </button>
          </motion.div>
        </div>

        {/* Far Right: Section Tracker */}
        <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-8">
          <div className="text-center">
            <span className="block font-cormorant text-2xl text-white">02</span>
            <span className="block font-montserrat text-[10px] text-white/40 tracking-widest mt-1">/ 06</span>
          </div>
          <div className="w-[1px] h-24 bg-white/20 relative">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="absolute top-2/4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#B39359]" />
          </div>
        </div>

      </div>
    </section>
  )
}
