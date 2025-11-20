import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    monthly: 19,
    yearly: 190,
    features: ['AI chat builder', 'Exportable code', 'Basic analytics'],
    cta: 'Start Free',
  },
  {
    name: 'Pro',
    monthly: 59,
    yearly: 590,
    features: ['Custom themes', 'Payments + Auth', 'Priority builds'],
    cta: 'Go Pro',
    popular: true,
  },
  {
    name: 'Studio',
    monthly: 129,
    yearly: 1290,
    features: ['Dedicated engineer', 'White-glove launch', 'Custom integrations'],
    cta: 'Talk to Sales',
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(true)

  return (
    <section id="pricing" className="relative bg-[#0A0A0A] py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between gap-6 mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Pricing</h2>
          <div className="flex items-center gap-2 text-white/80">
            <span>Monthly</span>
            <button
              onClick={() => setYearly(!yearly)}
              className={`relative w-14 h-8 rounded-full transition-colors ${yearly ? 'bg-[#FF6A00]' : 'bg-white/20'}`}
            >
              <span
                className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform ${yearly ? 'translate-x-6' : ''}`}
              />
            </button>
            <span>Yearly</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className={`relative rounded-2xl p-6 bg-white/5 backdrop-blur border ${t.popular ? 'border-[#FF6A00]/50 shadow-[0_0_30px_rgba(255,106,0,0.25)]' : 'border-white/10'}`}
            >
              {t.popular && (
                <span className="absolute -top-3 right-4 text-xs px-2 py-1 rounded-full bg-[#FF6A00] text-white shadow-[0_0_20px_rgba(255,106,0,0.6)]">Popular</span>
              )}
              <h3 className="text-white font-semibold text-xl">{t.name}</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-white text-4xl font-extrabold">$
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={yearly ? t.yearly : t.monthly}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      {yearly ? t.yearly : t.monthly}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <span className="text-white/60 mb-2 text-sm">/{yearly ? 'yr' : 'mo'}</span>
              </div>
              <ul className="mt-4 space-y-2 text-white/80">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] shadow-[0_0_10px_rgba(255,106,0,0.8)]" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex items-center justify-center w-full py-3 rounded-xl bg-[#FF6A00] text-white font-semibold hover:brightness-110 transition shadow-[0_0_25px_rgba(255,106,0,0.5)]">
                {t.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
