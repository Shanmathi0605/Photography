import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiHeart, FiUser, FiVideo, FiCamera, FiGlobe, FiPlay } from 'react-icons/fi'

const services = [
  { icon: <FiHeart size={24} strokeWidth={1} />, title: 'WEDDING\nPHOTOGRAPHY', desc: 'Timeless memories of your big day.' },
  { icon: <FiUser size={24} strokeWidth={1} />, title: 'PORTRAIT\nSESSIONS', desc: 'Expressing you in the most authentic way.' },
  { icon: <FiVideo size={24} strokeWidth={1} />, title: 'CINEMATIC\nFILMS', desc: 'Stories that move, moments that last.' },
  { icon: <FiCamera size={24} strokeWidth={1} />, title: 'PRODUCT\nPHOTOGRAPHY', desc: 'Elevating your brand with perfect visuals.' },
  { icon: <FiGlobe size={24} strokeWidth={1} />, title: 'TRAVEL & EVENT\nCOVERAGE', desc: 'Capturing adventures and special events.' }
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 bg-[#070707] relative overflow-hidden border-t border-white/5 min-h-[600px] flex items-center" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 relative z-10">
        
        {/* Left Side: Services Grid */}
        <div className="w-full lg:w-7/12 z-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-[#B39359] tracking-[0.2em] uppercase text-[10px] font-montserrat font-semibold">
              SERVICES
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-cormorant text-white uppercase tracking-wide mb-12"
          >
            EXPERIENCES TAILORED <span className="text-[#B39359]">FOR YOU</span>
          </motion.h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((svc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                className="border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-sm p-6 flex flex-col items-center text-center group hover:border-[#B39359]/50 transition-colors duration-500 cursor-pointer"
              >
                <div className="text-[#B39359] mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  {svc.icon}
                </div>
                <h3 className="text-white font-montserrat text-[10px] tracking-widest font-semibold uppercase mb-4 whitespace-pre-line leading-relaxed">
                  {svc.title}
                </h3>
                <p className="text-white/40 font-montserrat text-[9px] leading-relaxed">
                  {svc.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 flex justify-center lg:justify-start"
          >
            <button className="border border-white/20 px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-montserrat hover:border-[#B39359] hover:text-[#B39359] transition-colors duration-300">
              VIEW ALL SERVICES
            </button>
          </motion.div>
        </div>

      </div>

      {/* Right Side Background: Lens Graphic & Play Button */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-30 lg:opacity-100 pointer-events-none z-0">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          {/* Gradient mask for smooth blending into the background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707] z-10" />
          
          <img 
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop" 
            alt="Camera Lens" 
            className="absolute right-[-20%] top-1/2 -translate-y-1/2 w-[140%] h-[140%] object-cover filter grayscale opacity-60 mix-blend-screen" 
          />
          
          {/* Play Button Overlay - repositioned to be visible over the lens */}
          <div className="absolute top-1/2 right-[20%] -translate-y-1/2 z-20 flex flex-col items-center pointer-events-auto cursor-pointer group">
            <div className="w-20 h-20 rounded-full border border-[#B39359] flex items-center justify-center text-[#B39359] group-hover:bg-[#B39359] group-hover:text-[#070707] transition-all duration-500 backdrop-blur-sm mb-4">
              <FiPlay size={24} className="ml-1" />
            </div>
            <div className="text-center font-montserrat text-[9px] uppercase tracking-[0.2em] text-white">
              WATCH SHOWREEL<br />
              <span className="text-white/50">EXPERIENCE OUR WORLD</span>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  )
}
