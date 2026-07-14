export function Footer() {
  return (
    <footer className="bg-deep-black border-t border-white/5 py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center">
        <a href="#home" className="text-3xl font-playfair font-semibold tracking-wider text-white mb-8">
          LUMINA<span className="text-luxury-gold">.</span>
        </a>
        
        <div className="flex gap-6 mb-12">
          {['Instagram', 'Twitter', 'Behance', 'Vimeo'].map((social) => (
            <a key={social} href="#" className="text-white/50 text-xs uppercase tracking-widest hover:text-luxury-gold transition-colors">
              {social}
            </a>
          ))}
        </div>
        
        <div className="w-full h-[1px] bg-white/5 mb-8" />
        
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-white/30 text-xs tracking-widest font-light">
          <p>&copy; {new Date().getFullYear()} Lumina Studio. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0 uppercase">Designed for Excellence</p>
        </div>
      </div>
    </footer>
  )
}
