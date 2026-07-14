import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export function Booking() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formState)
  }

  return (
    <section id="contact" className="py-32 relative bg-charcoal z-10 border-t border-white/5" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-luxury-gold" />
              <span className="text-luxury-gold tracking-[0.2em] uppercase text-xs">Let's Connect</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-8 leading-tight"
            >
              Ready to <br />
              <span className="italic text-luxury-gold">Capture</span> <br />
              Your Story?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/60 font-poppins font-light leading-relaxed mb-12 text-lg max-w-md"
            >
              Fill out the form to discuss your vision, check our availability, and book a premium cinematic session.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h4 className="text-white uppercase tracking-widest text-xs mb-2">Email</h4>
                <a href="mailto:hello@luminastudio.com" className="text-luxury-gold text-lg hover:text-white transition-colors">hello@luminastudio.com</a>
              </div>
              <div>
                <h4 className="text-white uppercase tracking-widest text-xs mb-2">Phone</h4>
                <a href="tel:+1234567890" className="text-luxury-gold text-lg hover:text-white transition-colors">+1 (234) 567-890</a>
              </div>
            </motion.div>
          </div>
          
          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="p-8 md:p-12 bg-white/5 border border-white/10 backdrop-blur-md flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-white/50">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b border-white/20 focus:border-luxury-gold outline-none py-2 text-white transition-colors"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-white/50">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b border-white/20 focus:border-luxury-gold outline-none py-2 text-white transition-colors"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-white/50">Service</label>
                  <select 
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="bg-deep-black border-b border-white/20 focus:border-luxury-gold outline-none py-2 text-white/80 transition-colors"
                  >
                    <option value="">Select...</option>
                    <option value="wedding">Wedding</option>
                    <option value="portrait">Portrait</option>
                    <option value="fashion">Fashion</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-white/50">Date</label>
                  <input 
                    type="date" 
                    name="date"
                    value={formState.date}
                    onChange={handleChange}
                    className="bg-transparent border-b border-white/20 focus:border-luxury-gold outline-none py-2 text-white transition-colors [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-white/50">Message</label>
                <textarea 
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows="4"
                  className="bg-transparent border-b border-white/20 focus:border-luxury-gold outline-none py-2 text-white transition-colors resize-none"
                />
              </div>
              
              <button 
                type="submit"
                className="mt-6 w-full py-4 bg-luxury-gold text-deep-black uppercase tracking-widest text-sm font-semibold hover:bg-white transition-colors duration-300"
              >
                Send Request
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
