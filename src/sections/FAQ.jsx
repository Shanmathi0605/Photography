import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const faqs = [
  { question: "How far in advance should we book?", answer: "For weddings, we recommend booking 9-12 months in advance. For portrait or commercial sessions, 3-4 weeks is typically sufficient." },
  { question: "Do you travel for destination shoots?", answer: "Absolutely. We regularly travel worldwide for destination weddings and commercial campaigns. Travel fees are calculated based on the location." },
  { question: "What is your turnaround time?", answer: "Portrait galleries are delivered within 2 weeks. Wedding highlights are sent within 48 hours, and the complete gallery takes 6-8 weeks." },
  { question: "Do we get raw, unedited files?", answer: "We do not provide raw files. Our editing process is a crucial part of our signature style, and we want to ensure every delivered image represents our highest standard of work." }
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="faq" className="py-32 relative bg-charcoal z-10" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-luxury-gold" />
            <span className="text-luxury-gold tracking-[0.2em] uppercase text-xs font-montserrat">Information</span>
            <div className="w-12 h-[1px] bg-luxury-gold" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-cormorant"
          >
            Common <span className="italic text-luxury-gold">Questions</span>
          </motion.h2>
        </div>

        <div className="flex flex-col border-t border-white/10">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
              className="border-b border-white/10"
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <span className={`text-xl md:text-2xl font-cormorant transition-colors duration-300 ${activeIndex === idx ? 'text-luxury-gold' : 'text-white group-hover:text-luxury-gold/80'}`}>
                  {faq.question}
                </span>
                <span className="text-luxury-gold text-2xl font-light">
                  {activeIndex === idx ? '−' : '+'}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-white/60 font-light font-montserrat leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
