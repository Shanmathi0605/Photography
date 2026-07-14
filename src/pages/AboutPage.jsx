import { motion } from 'framer-motion'

export function AboutPage() {
  const teamMembers = [
    {
      name: 'Elena Rostova',
      role: 'Lead Photographer & Founder',
      image: '/images/photo.png',
      bio: 'With over a decade of experience in high-fashion and cinematic portraiture, Elena brings a visionary approach to every shoot.'
    },
    {
      name: 'Marcus Chen',
      role: 'Cinematographer',
      image: '/images/b0c1a9580e35d9da72850cbd828a0d53.jpg',
      bio: 'Specializing in movement and light, Marcus captures the emotion between the frames, delivering breathtaking video.'
    },
    {
      name: 'Sarah Jenkins',
      role: 'Creative Director',
      image: '/images/photo.png', // reusing images for now
      bio: 'Sarah ensures every set, wardrobe, and lighting setup aligns perfectly with the visual story we want to tell.'
    }
  ]

  return (
    <div className="pt-32 pb-20 min-h-screen bg-deep-black text-white">
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-luxury-gold" />
            <span className="text-luxury-gold tracking-[0.2em] uppercase text-xs">Who We Are</span>
            <div className="w-12 h-[1px] bg-luxury-gold" />
          </div>
          <h1 className="text-5xl md:text-7xl font-playfair mb-8">
            Behind the <span className="italic text-luxury-gold">Lens</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/60 text-lg font-poppins font-light leading-relaxed">
            Lumina Studio was founded in 2018 with a singular vision: to treat every subject like a masterpiece. 
            We are a collective of artists, technologists, and storytellers dedicated to preserving your most precious moments in timeless elegance.
          </p>
        </motion.div>
      </section>

      {/* Our Studio Section */}
      <section className="container mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-sm overflow-hidden border border-white/5"
          >
            <div className="absolute inset-0 bg-charcoal flex items-center justify-center">
              {/* Placeholder for studio image */}
              <span className="text-white/20 uppercase tracking-widest text-sm">Studio Interior</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair mb-6">Our Sanctuary of Light</h2>
            <p className="text-white/60 font-light leading-relaxed mb-6">
              Located in the heart of the creative district, our 3,000 sq ft studio is designed to be a blank canvas for imagination. 
              Equipped with state-of-the-art Profoto lighting and an array of custom backdrops, we control every photon to craft your perfect image.
            </p>
            <p className="text-white/60 font-light leading-relaxed">
              Whether you need natural daylight mimicking a Parisian morning or the dramatic, moody shadows of a classic film noir, our space adapts to the vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair mb-4">Meet the Team</h2>
          <p className="text-white/50 font-light">The artists behind the camera.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 flex flex-col items-center text-center group hover:border-luxury-gold/30 transition-colors"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-transparent group-hover:border-luxury-gold/50 transition-colors">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-playfair mb-1">{member.name}</h3>
              <p className="text-luxury-gold text-xs uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-white/50 text-sm font-light leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
