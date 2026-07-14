import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { value: 500, label: "Projects", suffix: "+" },
    { value: 200, label: "Happy Clients", suffix: "+" },
    { value: 8, label: "Years Experience", suffix: "+" },
    { value: 25, label: "Awards", suffix: "+" },
  ]

  return (
    <section id="about" className="py-32 relative bg-deep-black z-10" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image / Visual */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[3/4] rounded-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-charcoal" id="about-image-target">
                {/* This image will be revealed when the parallax transition finishes */}
                <img 
                  src="/images/photo.png" 
                  className="w-full h-full object-contain opacity-0 transition-opacity duration-300"
                  id="about-final-image"
                  alt="Founder"
                />
              </div>
              
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-transparent to-transparent pointer-events-none" />
            </motion.div>
            
            {/* Decorative Gold Elements */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-8 -right-8 w-32 h-32 border border-luxury-gold/30 backdrop-blur-md -z-10"
            />
          </div>
          
          {/* Right: Content */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-luxury-gold" />
              <span className="text-luxury-gold tracking-[0.2em] uppercase text-xs">Our Story</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-8 leading-tight"
            >
              Crafting <span className="italic text-luxury-gold">Visual</span> Legacy
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/60 font-poppins font-light leading-relaxed mb-12 text-lg"
            >
              Founded on the belief that every moment holds an untold story, Lumina Studio elevates photography to high art. 
              We blend cinematic techniques with timeless elegance, ensuring each frame we capture is not just an image, but a piece of history.
            </motion.p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + (idx * 0.1) }}
                  className="flex flex-col border-l border-white/10 pl-6"
                >
                  <span className="text-4xl font-playfair text-luxury-gold mb-2">
                    {stat.value}
                    {stat.suffix}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-white/50">{stat.label}</span>
                </motion.div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
