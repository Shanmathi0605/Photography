import { FiInstagram, FiFacebook, FiYoutube, FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { FaPinterestP } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-white/5 pt-20 pb-10 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Logo & Bio */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-cormorant font-semibold tracking-wider text-white mb-2 uppercase">
              ETERNA<br />
              <span className="text-[9px] tracking-[0.3em] font-montserrat text-white/50 font-normal">STUDIOS</span>
            </h3>
            <p className="text-white/40 text-[10px] font-montserrat leading-relaxed mt-4 max-w-[200px]">
              Photography & Cinematic Storytelling for the dreamers and the deeply in love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-montserrat font-semibold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'About Us', 'Portfolio', 'Experience', 'Services', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/40 text-[10px] font-montserrat hover:text-[#B39359] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-montserrat font-semibold mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              {['Wedding Photography', 'Portrait Sessions', 'Cinematic Films', 'Product Photography', 'Event Coverage'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/40 text-[10px] font-montserrat hover:text-[#B39359] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-1">
            <h4 className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-montserrat font-semibold mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-white/40 text-[10px] font-montserrat">
                <FiPhone size={14} className="mt-0.5 text-[#B39359]" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3 text-white/40 text-[10px] font-montserrat">
                <FiMail size={14} className="mt-0.5 text-[#B39359]" />
                <span>hello@eternastudios.com</span>
              </li>
              <li className="flex items-start gap-3 text-white/40 text-[10px] font-montserrat">
                <FiMapPin size={14} className="mt-0.5 text-[#B39359]" />
                <span className="leading-relaxed">123, Studio Street,<br />Chennai, India.</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-montserrat font-semibold mb-6">Follow Us</h4>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/40 hover:text-[#B39359] transition-colors"><FiInstagram size={14} /></a>
              <a href="#" className="text-white/40 hover:text-[#B39359] transition-colors"><FiFacebook size={14} /></a>
              <a href="#" className="text-white/40 hover:text-[#B39359] transition-colors"><FaPinterestP size={14} /></a>
              <a href="#" className="text-white/40 hover:text-[#B39359] transition-colors"><FiYoutube size={14} /></a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-[9px] font-montserrat">
            © 2024 Eterna Studios. All Rights Reserved.
          </p>
          <p className="text-white/30 text-[9px] font-montserrat flex items-center gap-2">
            Designed with passion <span className="text-[#B39359]">♥</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
