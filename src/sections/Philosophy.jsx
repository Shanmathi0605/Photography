import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function Philosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 relative bg-deep-black z-10 border-t border-white/5" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-luxury-gold" />
              <span className="text-luxury-gold tracking-[0.2em] uppercase text-xs">Our Philosophy</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant mb-8 leading-tight">
              We Don't Just Take Photos. <br />
              <span className="italic text-luxury-gold">We Freeze Time.</span>
            </h2>
            
            <p className="text-white/60 font-light leading-relaxed mb-6 text-lg">
              Photography is more than pointing a lens. It is the delicate art of seeing what others miss—the split-second glances, the hidden smiles, the quiet moments of chaos.
            </p>
            
            <p className="text-white/60 font-light leading-relaxed mb-12 text-lg">
              At Lumina, we blend high-end cinematic techniques with raw photojournalism. We want you to look back at your images twenty years from now and not just see how you looked, but remember exactly how you felt.
            </p>

            <a href="#portfolio">
              <button className="relative px-8 py-4 bg-transparent border border-luxury-gold text-luxury-gold uppercase text-xs tracking-widest overflow-hidden group transition-colors duration-300 hover:text-deep-black">
                <span className="relative z-10">Discover Our Work</span>
                <div className="absolute inset-0 bg-luxury-gold translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out" />
              </button>
            </a>
          </motion.div>

          {/* Right: Unique Image Composition */}
          <div className="relative h-[600px] w-full hidden md:block">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute top-0 right-0 w-[60%] aspect-[3/4] z-20"
            >
              <img src="/images/photo.png" alt="Philosophy 1" className="w-full h-full object-cover rounded-sm shadow-2xl" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: -50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute bottom-10 left-0 w-[50%] aspect-square z-10"
            >
              <img src="/images/b0c1a9580e35d9da72850cbd828a0d53.jpg" alt="Philosophy 2" className="w-full h-full object-cover rounded-sm opacity-80" />
            </motion.div>

            {/* Decorative Element */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-luxury-gold rounded-full z-0 opacity-20"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
