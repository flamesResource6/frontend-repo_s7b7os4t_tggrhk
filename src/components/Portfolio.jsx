import { motion } from 'framer-motion'

const projects = [
  { title: 'Fintech AI Assistant', tag: 'Conversational UI' },
  { title: 'E-commerce Builder', tag: 'Headless + Payments' },
  { title: 'Analytics Studio', tag: 'Dashboards' },
  { title: 'SaaS Starter', tag: 'Subscriptions' },
]

export default function Portfolio() {
  return (
    <section className="relative bg-[#0A0A0A] py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-14"
        >
          Demos
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
              className="group perspective-1000 relative rounded-2xl p-6 bg-white/5 backdrop-blur border border-white/10 hover:border-orange-500/40 transition-all"
            >
              <div className="h-32 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 mb-4 group-hover:shadow-[0_0_25px_rgba(255,106,0,0.3)] transition-shadow" />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <p className="text-white/60 text-sm">{p.tag}</p>
                </div>
                <span className="text-[#FF6A00] text-sm">View →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
