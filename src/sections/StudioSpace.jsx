import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const amenities = [
  { title: 'Infinity Cove', desc: 'A massive 40ft x 40ft white cyclorama wall for limitless creativity.' },
  { title: 'Lighting Grid', desc: 'Pre-rigged with Arri Skypanels and Profoto strobes.' },
  { title: 'Client Lounge', desc: 'Comfortable seating, high-speed Wi-Fi, and espresso bar.' },
  { title: 'Dressing Room', desc: 'Private hair and makeup stations with daylight-balanced mirrors.' }
]

export function StudioSpace() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="studio" className="py-32 relative bg-charcoal z-10" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-luxury-gold" />
              <span className="text-luxury-gold tracking-[0.2em] uppercase text-xs font-montserrat">The Space</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-cormorant mb-8 leading-tight"
            >
              A Canvas for <br /><span className="italic text-luxury-gold">Imagination</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/70 font-montserrat font-light text-sm md:text-base leading-relaxed mb-12"
            >
              Our flagship studio located in the heart of the creative district is designed to accommodate productions of any scale. From intimate portraits to massive commercial sets, we provide the environment and the tools you need to bring your vision to life.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {amenities.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + (idx * 0.1) }}
                  className="border-l border-luxury-gold/30 pl-4"
                >
                  <h4 className="text-white font-cormorant text-xl mb-2">{item.title}</h4>
                  <p className="text-white/50 text-xs font-montserrat leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4 h-[600px]">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="col-span-1 row-span-2 overflow-hidden rounded-sm relative group"
              >
                <div className="absolute inset-0 bg-deep-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Studio Setup" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="col-span-1 row-span-1 overflow-hidden rounded-sm relative group"
              >
                <div className="absolute inset-0 bg-deep-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Camera Gear" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="col-span-1 row-span-1 overflow-hidden rounded-sm relative group"
              >
                <div className="absolute inset-0 bg-deep-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Lighting" />
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
