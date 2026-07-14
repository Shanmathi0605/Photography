import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import clsx from 'clsx'

const categories = ['All', 'Wedding', 'Portrait', 'Fashion', 'Commercial']

const portfolioItems = [
  { id: 1, category: 'Wedding', size: 'large', image: '/images/photo.png', title: 'The Royal Union', desc: 'A cinematic capturing of timeless vows.' },
  { id: 2, category: 'Portrait', size: 'small', image: '/images/b0c1a9580e35d9da72850cbd828a0d53.jpg', title: 'Neon Shadows', desc: 'Urban street portraiture.' },
  { id: 3, category: 'Fashion', size: 'medium', image: '/images/photo.png', title: 'Vogue Essentials', desc: 'Spring collection editorial shoot.' },
  { id: 4, category: 'Commercial', size: 'medium', image: '/images/b0c1a9580e35d9da72850cbd828a0d53.jpg', title: 'Tech Rev', desc: 'Product launch campaign.' },
  { id: 5, category: 'Wedding', size: 'small', image: '/images/photo.png', title: 'Golden Hour', desc: 'Beachside sunset ceremony.' },
  { id: 6, category: 'Portrait', size: 'large', image: '/images/b0c1a9580e35d9da72850cbd828a0d53.jpg', title: 'Classic Mono', desc: 'Monochrome studio session.' },
]

export function Portfolio() {
  const [filter, setFilter] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredItems = portfolioItems.filter(item => filter === 'All' || item.category === filter)

  return (
    <section id="portfolio" className="py-32 relative bg-charcoal z-10" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-luxury-gold" />
              <span className="text-luxury-gold tracking-[0.2em] uppercase text-xs">Selected Works</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-playfair"
            >
              Our <span className="italic text-luxury-gold">Masterpieces</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={clsx(
                  "text-xs uppercase tracking-widest px-4 py-2 border transition-all duration-300 rounded-full",
                  filter === cat 
                    ? "border-luxury-gold bg-luxury-gold text-deep-black font-semibold"
                    : "border-white/20 text-white/70 hover:border-white hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry Layout Simulation */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={clsx(
                  "relative group overflow-hidden bg-deep-black cursor-pointer",
                  item.size === 'large' ? 'row-span-2' : 'row-span-1',
                  item.size === 'medium' ? 'md:col-span-2 lg:col-span-1 row-span-1' : ''
                )}
              >
                <div className="absolute inset-0 bg-charcoal/80 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
                </div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-deep-black/90 via-deep-black/20 to-transparent">
                  <div className="flex justify-end">
                    <span className="text-xs uppercase tracking-widest text-white backdrop-blur-md bg-white/10 px-4 py-2 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-playfair mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {item.title}
                    </h3>
                    <p className="text-white/70 font-light text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-20 text-center">
          <button className="px-8 py-4 border border-white/20 text-white font-semibold uppercase tracking-widest text-sm hover:border-luxury-gold hover:text-luxury-gold transition-colors duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}
