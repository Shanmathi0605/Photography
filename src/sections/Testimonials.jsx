import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'

const testimonials = [
  {
    name: "Eleanor & James",
    role: "Wedding Couple",
    text: "Lumina Studio didn't just take photos; they captured the very soul of our wedding day. The cinematic quality and attention to detail left us speechless. It felt like watching a beautiful movie of our own lives.",
  },
  {
    name: "Sarah Jenkins",
    role: "Fashion Designer",
    text: "Working with this team is a dream. They understand lighting, mood, and storytelling better than anyone I've ever collaborated with. My editorial collection looked absolutely breathtaking.",
  },
  {
    name: "Michael Chen",
    role: "Corporate Director",
    text: "Professionalism meets unparalleled creativity. They transformed our corporate brand imagery into something truly premium and world-class. Highly recommended for any brand seeking luxury positioning.",
  }
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="py-32 relative bg-deep-black z-10 overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-luxury-gold" />
            <span className="text-luxury-gold tracking-[0.2em] uppercase text-xs">Testimonials</span>
            <div className="w-12 h-[1px] bg-luxury-gold" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-8"
          >
            Words of <span className="italic text-luxury-gold">Praise</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center text-center p-8 md:p-16 border border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-sm">
                  <div className="text-luxury-gold text-6xl font-playfair leading-none mb-8">"</div>
                  <p className="text-xl md:text-3xl font-playfair text-white/90 leading-relaxed mb-12">
                    {testimonial.text}
                  </p>
                  <div className="flex flex-col items-center">
                    <h4 className="text-white font-semibold text-lg uppercase tracking-wider mb-2">{testimonial.name}</h4>
                    <span className="text-luxury-gold text-xs uppercase tracking-widest">{testimonial.role}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
