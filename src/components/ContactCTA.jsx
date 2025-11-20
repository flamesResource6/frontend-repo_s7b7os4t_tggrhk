import { motion } from 'framer-motion'

export default function ContactCTA() {
  return (
    <section id="contact" className="relative bg-[#0A0A0A] py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.18),transparent_60%)]" />
      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Ready to Build Something Amazing?
        </motion.h2>
        <p className="text-white/70 mt-4 max-w-2xl mx-auto">
          Start now or book a call — we’ll help you go from idea to live product fast.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing" className="px-8 py-3 rounded-xl bg-[#FF6A00] text-white shadow-[0_0_25px_rgba(255,106,0,0.5)] hover:brightness-110 transition">Start Now</a>
          <a href="#" className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:border-orange-500/40 transition">Book a Call</a>
        </div>
      </div>
    </section>
  )
}
