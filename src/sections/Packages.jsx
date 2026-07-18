import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const packages = [
  {
    title: 'Portrait Session',
    price: '$500',
    desc: 'Perfect for headshots, personal branding, or creative portraits.',
    features: ['2 Hour Studio Session', '3 Outfit Changes', '10 Retouched Images', 'Online Gallery'],
    popular: false
  },
  {
    title: 'Editorial Wedding',
    price: '$3,500',
    desc: 'Comprehensive coverage of your special day with a cinematic touch.',
    features: ['8 Hours Coverage', '2 Photographers', '500+ Edited Images', 'Heirloom Album'],
    popular: true
  },
  {
    title: 'Commercial Campaign',
    price: 'Custom',
    desc: 'Full-scale production for brands, lookbooks, and advertising.',
    features: ['Art Direction & Concept', 'Full Studio Access', 'Prop Styling', 'Commercial Licensing'],
    popular: false
  }
]

export function Packages() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="packages" className="py-32 relative bg-deep-black z-10" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-luxury-gold" />
            <span className="text-luxury-gold tracking-[0.2em] uppercase text-xs font-montserrat">Investment</span>
            <div className="w-12 h-[1px] bg-luxury-gold" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-cormorant mb-8"
          >
            Curated <span className="italic text-luxury-gold">Packages</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + (idx * 0.1) }}
              className={`relative p-10 flex flex-col h-full rounded-sm border ${
                pkg.popular 
                  ? 'border-luxury-gold bg-luxury-gold/5 py-14 shadow-2xl shadow-luxury-gold/10' 
                  : 'border-white/10 bg-white/[0.02]'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-luxury-gold text-deep-black px-4 py-1 text-[10px] uppercase tracking-widest font-bold">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-3xl font-cormorant text-white mb-2">{pkg.title}</h3>
              <div className="text-luxury-gold font-montserrat text-2xl font-medium mb-4">{pkg.price}</div>
              <p className="text-white/60 text-sm font-light leading-relaxed mb-8 border-b border-white/10 pb-8">
                {pkg.desc}
              </p>
              
              <ul className="flex flex-col gap-4 mb-10 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-montserrat text-white/80">
                    <span className="text-luxury-gold">◆</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                pkg.popular 
                  ? 'bg-luxury-gold text-deep-black hover:bg-white' 
                  : 'border border-white/20 text-white hover:border-luxury-gold hover:text-luxury-gold'
              }`}>
                Inquire Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
