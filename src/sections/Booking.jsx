import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function Booking() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-32 bg-[#070707] relative overflow-hidden" ref={ref}>
      
      {/* Background Studio Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/60 to-[#070707] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-transparent to-[#070707] z-10" />
        <img 
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop" 
          alt="Studio Setup" 
          className="w-full h-full object-cover filter grayscale opacity-40 mix-blend-screen"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col items-center text-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-cormorant text-white uppercase tracking-wider mb-10 leading-tight"
        >
          LET'S CREATE SOMETHING <br />
          <span className="text-[#B39359] italic">BEAUTIFUL TOGETHER</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button className="border border-white/20 px-10 py-4 text-[10px] uppercase tracking-[0.2em] font-montserrat hover:border-[#B39359] hover:text-[#B39359] hover:bg-[#B39359]/10 transition-all duration-300 backdrop-blur-sm">
            BOOK A SESSION
          </button>
        </motion.div>

      </div>
    </section>
  )
}
