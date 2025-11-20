import { motion } from 'framer-motion'
import { Cpu, MousePointerClick, Code2, Palette, CreditCard, BarChart3 } from 'lucide-react'

const features = [
  { title: 'AI App Builder', icon: Cpu },
  { title: 'No-Code Interface', icon: MousePointerClick },
  { title: 'Exportable Code', icon: Code2 },
  { title: 'Custom UI Themes', icon: Palette },
  { title: 'Payments & Monetization', icon: CreditCard },
  { title: 'Analytics Dashboard', icon: BarChart3 },
]

export default function Features() {
  return (
    <section className="relative bg-[#0A0A0A] py-24 md:py-32">
      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-14"
        >
          Everything you need
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, icon: Icon }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-2xl p-6 bg-white/5 backdrop-blur border border-white/10 hover:border-orange-500/40 transition-all"
            >
              <div className="w-12 h-12 rounded-xl grid place-items-center bg-white/5 border border-white/10 mb-4 group-hover:shadow-[0_0_25px_rgba(255,106,0,0.5)] transition-shadow">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="text-white/70 mt-2 text-sm">
                Ultra-modern tooling with glowing performance and effortless workflows.
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,106,0,0.12),transparent_40%)]" />
    </section>
  )
}
