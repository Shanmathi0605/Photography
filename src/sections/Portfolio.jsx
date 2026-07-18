import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const categories = [
  { id: 1, title: 'WEDDINGS', img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop' },
  { id: 2, title: 'PORTRAITS', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop' },
  { id: 3, title: 'CINEMATIC FILMS', img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop' },
  { id: 4, title: 'BABY & KIDS', img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop' },
  { id: 5, title: 'TRAVEL', img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop' }
]

export function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="portfolio" className="py-24 bg-[#070707] relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 mb-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#B39359] tracking-[0.2em] uppercase text-[10px] font-montserrat mb-4 font-semibold"
        >
          PORTFOLIO
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl font-cormorant text-white uppercase tracking-wide"
        >
          VISUAL STORIES THAT STAY FOREVER<span className="text-[#B39359]">*</span>
        </motion.h2>
      </div>

      <div className="w-full flex h-[500px] md:h-[600px] bg-[#070707] overflow-hidden -mx-4 md:-mx-8">
        <div className="flex w-[110%] h-full transform -skew-x-[15deg] ml-[5%]">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + (idx * 0.1) }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group overflow-hidden border-r border-[#1a1a1a] cursor-pointer transition-all duration-700 ease-out"
              style={{ flex: hoveredIndex === idx ? '1.5' : '1' }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors duration-500 z-10" />
              <img 
                src={cat.img} 
                alt={cat.title} 
                className="absolute inset-0 w-[150%] h-full object-cover transform skew-x-[15deg] scale-[1.2] -ml-[25%] group-hover:scale-[1.25] transition-transform duration-1000 origin-center"
              />
              <div className="absolute bottom-12 left-0 right-0 text-center z-20 transform skew-x-[15deg]">
                <h3 className="text-white font-montserrat text-[10px] md:text-xs tracking-[0.2em] font-semibold uppercase opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto mt-12 flex justify-center z-20 relative">
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="w-12 h-12 rounded-full bg-[#B39359] flex items-center justify-center text-[#070707] hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(179,147,89,0.3)] cursor-pointer"
        >
          <FiArrowRight size={20} />
        </motion.button>
      </div>
    </section>
  )
}
