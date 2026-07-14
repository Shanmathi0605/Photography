import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const contentBlocks = [
  {
    id: 1,
    startFrame: 0,
    endFrame: 70,
    title: "Precision Engineering",
    subtitle: "The Foundation",
    description: "Crafted with aerospace-grade materials for ultimate durability and lightweight performance in any environment.",
    position: "left"
  },
  {
    id: 2,
    startFrame: 80,
    endFrame: 150,
    title: "Flawless Optics",
    subtitle: "The Vision",
    description: "Capture the world in unprecedented detail with our newly designed multi-element glass lens system.",
    position: "right"
  },
  {
    id: 3,
    startFrame: 160,
    endFrame: 239,
    title: "Ready to Shoot",
    subtitle: "The Masterpiece",
    description: "A perfect symphony of mechanics and electronics, assembled to capture your timeless moments.",
    position: "center"
  }
]

export function Hero() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const transitionImageRef = useRef(null)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadProgress, setLoadProgress] = useState(0)

  const frameCount = 240
  const imagesRef = useRef([])

  // Preload images
  useEffect(() => {
    let loadedCount = 0
    const images = []

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image()
      const paddedIndex = i.toString().padStart(4, '0')
      img.src = `/images/camera-sequence/frame_${paddedIndex}.webp`
      img.onload = () => {
        loadedCount++
        setLoadProgress(Math.floor((loadedCount / frameCount) * 100))
        if (loadedCount === frameCount) {
          imagesRef.current = images
          setImagesLoaded(true)
        }
      }
      images.push(img)
    }
  }, [frameCount])

  // Canvas render and scroll animation
  useEffect(() => {
    if (!imagesLoaded) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const images = imagesRef.current
    const transitionImage = transitionImageRef.current

    // GSAP Scroll animation state
    const currentFrame = { frame: 0 }

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      renderFrame(currentFrame.frame)
    }

    const renderFrame = (index) => {
      if (images[index]) {
        // clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        // draw image with object-fit: cover logic
        const img = images[index]
        const imgRatio = img.width / img.height
        const canvasRatio = canvas.width / canvas.height
        
        let drawWidth, drawHeight, offsetX = 0, offsetY = 0

        if (canvasRatio > imgRatio) {
          drawWidth = canvas.width
          drawHeight = canvas.width / imgRatio
          offsetY = (canvas.height - drawHeight) / 2
        } else {
          drawHeight = canvas.height
          drawWidth = canvas.height * imgRatio
          offsetX = (canvas.width - drawWidth) / 2
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
      }
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initial state for transition image (starts centered and tiny)
    gsap.set(transitionImage, { 
      opacity: 0, 
      scale: 0, 
      top: '50%',
      left: '50%',
      xPercent: -50,
      yPercent: -50,
      width: '10vw',
      height: '13.33vw', // 3:4 aspect ratio matching the about box
      transformOrigin: "center center",
    })

    // GSAP Timeline 1: The Pinned Sequence
    const totalScrollDuration = 4; 
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${totalScrollDuration * 100}%`,
        scrub: 0.5,
        pin: true,
      }
    })

    const sequenceDuration = 0.9; // 90% of pinned timeline for frame sequence
    const popDuration = 0.1; // 10% for the lens pop

    // 1. Animate frame sequence
    tl.to(currentFrame, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      duration: sequenceDuration,
      onUpdate: () => {
        renderFrame(currentFrame.frame)
      }
    }, 0)

    // 2. Animate content blocks
    contentBlocks.forEach((block) => {
      const el = document.getElementById(`content-block-${block.id}`);
      if (!el) return;
      
      const startProgress = (block.startFrame / frameCount) * sequenceDuration;
      const endProgress = (block.endFrame / frameCount) * sequenceDuration;
      const fadeDuration = 0.1 * sequenceDuration; 

      gsap.set(el, { opacity: 0, y: 40 })

      tl.to(el, {
        opacity: 1,
        y: 0,
        ease: 'power2.out',
        duration: fadeDuration,
      }, startProgress)
      
      tl.to(el, {
        opacity: 0,
        y: -40,
        ease: 'power2.in',
        duration: fadeDuration,
      }, endProgress - fadeDuration)
    })

    // 3. Camera Flash Effect
    tl.to('#camera-flash', {
      opacity: 1,
      duration: 0.01,
      ease: 'power4.in',
    }, sequenceDuration - 0.03)
    
    tl.to('#camera-flash', {
      opacity: 0,
      duration: popDuration * 1.5,
      ease: 'power4.out',
    }, sequenceDuration - 0.02)

    // 4. The Lens Pop-Out (happens exactly after flash peaks)
    tl.to(transitionImage, {
      opacity: 1,
      scale: 1,
      ease: 'back.out(1.7)',
      duration: popDuration,
    }, sequenceDuration - 0.02)
    
    // Fade out canvas slightly
    tl.to(canvasRef.current, {
      opacity: 0,
      duration: popDuration
    }, sequenceDuration)

    // GSAP Timeline 2: The Cross-Section Travel
    // This triggers after Hero unpins and travels to About
    const travelTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'bottom bottom', // Right as Hero starts moving up
        endTrigger: '#about',
        end: 'center center', // Finish when About section is in center of screen
        scrub: true,
        invalidateOnRefresh: true, // Recalculate coordinates on resize
        onUpdate: (self) => {
          const finalImg = document.getElementById('about-final-image');
          if (finalImg) {
            // Swap visibility at the very end of travel
            if (self.progress > 0.99) {
              gsap.set(transitionImage, { opacity: 0 });
              finalImg.classList.remove('opacity-0');
            } else {
              gsap.set(transitionImage, { opacity: 1 });
              finalImg.classList.add('opacity-0');
            }
          }
        }
      }
    })

    travelTl.to(transitionImage, {
      top: () => {
        const target = document.getElementById('about-image-target');
        const home = containerRef.current;
        return target && home ? target.getBoundingClientRect().top - home.getBoundingClientRect().top : '50%';
      },
      left: () => {
        const target = document.getElementById('about-image-target');
        const home = containerRef.current;
        return target && home ? target.getBoundingClientRect().left - home.getBoundingClientRect().left : '50%';
      },
      width: () => {
        const target = document.getElementById('about-image-target');
        return target ? target.getBoundingClientRect().width : '10vw';
      },
      height: () => {
        const target = document.getElementById('about-image-target');
        return target ? target.getBoundingClientRect().height : '13.33vw';
      },
      xPercent: 0, // Remove centering offset to match top/left exactly
      yPercent: 0,
      ease: 'power1.inOut'
    })


    return () => {
      window.removeEventListener('resize', resizeCanvas)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [imagesLoaded])

  return (
    <section id="home" ref={containerRef} className="relative h-screen w-full flex items-center justify-center z-20 bg-deep-black">
      
      {/* Camera Flash Overlay */}
      <div 
        id="camera-flash"
        className="fixed inset-0 bg-white z-[60] pointer-events-none opacity-0" 
      />

      {/* Loading Overlay */}
      {!imagesLoaded && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-deep-black text-white">
          <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden mb-4">
            <div 
              className="h-full bg-luxury-gold transition-all duration-300"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
          <span className="text-sm tracking-widest uppercase text-white/60">Loading Experience... {loadProgress}%</span>
        </div>
      )}

      {/* Canvas for Scroll Image Sequence */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* Cross-Section Transition Image */}
      <img 
        ref={transitionImageRef}
        src="/images/photo.png"
        className="absolute z-[10] object-contain rounded-sm pointer-events-none shadow-2xl"
        alt="Transition"
      />
      
      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-deep-black/30 pointer-events-none z-[3]" />
      
      {/* Dynamic Content Blocks */}
      <div className="container mx-auto px-6 md:px-12 relative z-[4] pointer-events-none h-full w-full">
        {contentBlocks.map((block) => (
          <div 
            key={block.id}
            id={`content-block-${block.id}`}
            className={`absolute inset-0 flex flex-col justify-center pointer-events-auto ${
              block.position === 'left' ? 'items-start md:pr-1/2' :
              block.position === 'right' ? 'items-end md:pl-1/2 text-right' :
              'items-center text-center'
            }`}
          >
            <div className={`max-w-xl ${block.position === 'center' ? 'pt-64' : ''}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                <span className="text-luxury-gold">📸</span>
                <span className="text-xs tracking-widest uppercase text-white/80">{block.subtitle}</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-playfair leading-[1.1] text-white mb-6 drop-shadow-lg">
                {block.title.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 !== 0 ? "text-luxury-gold italic" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </h2>
              
              <p className="text-white/80 text-lg md:text-xl font-poppins font-light drop-shadow-md">
                {block.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  )
}


