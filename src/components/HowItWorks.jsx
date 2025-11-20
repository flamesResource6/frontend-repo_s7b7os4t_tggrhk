import { motion } from 'framer-motion'
import { MessageSquare, Sparkles, Rocket } from 'lucide-react'

const steps = [
  {
    title: 'Chat Your Idea',
    desc: 'Explain your idea in natural language.',
    icon: MessageSquare,
  },
  {
    title: 'AI Builds Instantly',
    desc: 'Our engine generates UX, logic, and structure.',
    icon: Sparkles,
  },
  {
    title: 'Launch & Monetize',
    desc: 'Deploy with custom domain, payments, analytics.',
    icon: Rocket,
  },
]

export default function HowItWorks() {
  return (
    <section className="relative bg-[#0A0A0A] py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,106,0,0.1),transparent_60%)]" />
      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-14"
        >
          How It Works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(({ title, desc, icon: Icon }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-2xl p-6 bg-white/5 backdrop-blur border border-white/10 hover:border-orange-500/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl grid place-items-center bg-white/5 border border-white/10 mb-4 group-hover:shadow-[0_0_25px_rgba(255,106,0,0.5)] transition-shadow">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="text-white/70 mt-2">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
