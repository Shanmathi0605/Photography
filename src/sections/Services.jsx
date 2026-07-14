import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    id: '01',
    title: 'Wedding Cinematography',
    desc: 'Comprehensive coverage of your special day, combining candid moments with directed editorial shots. Includes a dedicated cinematographer, drone footage, and a cinematic feature film.',
    features: ['10 Hours Coverage', '2 Cinematographers', '4K Drone Footage', 'Feature Film & Highlights']
  },
  {
    id: '02',
    title: 'High-Fashion Editorial',
    desc: 'Studio or location-based fashion shoots tailored for magazines, lookbooks, or personal portfolios. Complete with creative direction and advanced lighting setups.',
    features: ['Concept Development', 'Professional Retouching', 'Multiple Setups', 'Studio Included']
  },
  {
    id: '03',
    title: 'Commercial Product',
    desc: 'Elevate your brand with crisp, engaging product photography and short-form video content designed to convert viewers into loyal customers.',
    features: ['Art Direction', 'Prop Styling', 'Social Media Formatting', 'Licensing Rights']
  }
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-32 relative bg-deep-black z-10" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-luxury-gold" />
            <span className="text-luxury-gold tracking-[0.2em] uppercase text-xs">Expertise</span>
            <div className="w-12 h-[1px] bg-luxury-gold" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-8"
          >
            Our <span className="italic text-luxury-gold">Premium</span> Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + (idx * 0.1) }}
              className="group relative p-8 border border-white/5 bg-white/5 backdrop-blur-sm overflow-hidden transition-colors hover:border-luxury-gold/50 cursor-pointer"
            >
              {/* Hover Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <span className="text-luxury-gold text-sm font-poppins font-light mb-4 block">0{idx + 1}</span>
                <h3 className="text-2xl font-playfair text-white mb-4 group-hover:text-luxury-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/50 font-light text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <ul className="mb-8 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-white/70">
                      <span className="w-1 h-1 bg-luxury-gold rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white group-hover:text-luxury-gold transition-colors duration-300">
                  <span>Explore</span>
                  <div className="w-6 h-[1px] bg-current transform origin-left group-hover:scale-x-150 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
