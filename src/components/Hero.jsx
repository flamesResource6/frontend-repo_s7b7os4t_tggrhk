import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function GlowButton({ children }) {
  return (
    <motion.a
      href="#pricing"
      whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(255,106,0,0.6)' }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#FF6A00] to-orange-500 shadow-[0_0_20px_rgba(255,106,0,0.5)] relative overflow-hidden"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-10 transition-opacity" />
    </motion.a>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-[#0A0A0A] overflow-hidden">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xXD1hOqciVNtJX50/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient glow overlay - make sure it doesn't block Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,106,0,0.25),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-16 pt-28 md:pt-36 flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur text-white/70 text-xs mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-[#FF6A00] shadow-[0_0_10px_2px_rgba(255,106,0,0.8)]" />
            AI-Powered No-Code Studio
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            Build Apps at the Speed of Thought.
          </h1>
          <p className="mt-5 text-white/70 text-lg md:text-xl max-w-2xl">
            Byte Builder Studios turns your ideas into real apps — instantly, with AI.
          </p>
          <div className="mt-8">
            <GlowButton>Start Building Now</GlowButton>
          </div>
        </motion.div>
      </div>

      {/* Floating subtle shapes */}
      <motion.div
        className="pointer-events-none absolute -left-10 bottom-10 w-72 h-72 rounded-full bg-[#FF6A00]/10 blur-3xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute right-[-40px] top-24 w-80 h-80 rounded-full bg-orange-500/10 blur-3xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  )
}
