import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  
  // Use MotionValues instead of React state to avoid re-renders on every mouse move
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Apply spring physics for smooth trailing effect
  const springConfig = { damping: 28, stiffness: 500, mass: 0.5 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)
  
  const trailSpringConfig = { damping: 20, stiffness: 150, mass: 1 }
  const trailX = useSpring(mouseX, trailSpringConfig)
  const trailY = useSpring(mouseY, trailSpringConfig)

  useEffect(() => {
    const updateMousePosition = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseOver = (e) => {
      const target = e.target
      if (!target || !target.tagName) return

      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        (target.closest && target.closest('a')) ||
        (target.closest && target.closest('button'))
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mouseX, mouseY])

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 pointer-events-none z-[100] mix-blend-difference flex items-center justify-center origin-center"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
          borderColor: isHovering ? 'rgba(212, 175, 55, 0.5)' : 'rgba(255, 255, 255, 0.3)',
        }}
        transition={{ duration: 0.15 }}
      >
        <div className="w-1 h-1 bg-white rounded-full" />
      </motion.div>
      
      {/* Golden Glow Trail */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 rounded-full bg-luxury-gold/5 blur-3xl pointer-events-none z-[90] origin-center"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />
    </>
  )
}
