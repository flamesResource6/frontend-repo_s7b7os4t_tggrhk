import { motion } from 'framer-motion'

export default function Studio() {
  return (
    <section className="relative bg-[#0A0A0A] py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">The Studio</h2>
          <p className="text-white/70 mt-6 text-lg">
            Byte Builder Studios blends creativity, AI, and engineering to bring ideas to life with unprecedented speed.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#contact" className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:border-orange-500/40 transition-colors">Book a Call</a>
            <a href="#pricing" className="px-6 py-3 rounded-xl bg-[#FF6A00] text-white shadow-[0_0_25px_rgba(255,106,0,0.5)] hover:brightness-110 transition">Start Now</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative aspect-video rounded-3xl bg-gradient-to-br from-white/10 to-white/0 border border-white/10 backdrop-blur overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,106,0,0.25),transparent_50%)]" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="w-40 h-40 rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_0_30px_rgba(255,106,0,0.15)]" />
              <div className="absolute -right-6 top-10 w-28 h-28 rounded-full bg-[#FF6A00]/20 blur-2xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
