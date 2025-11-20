import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Studio from './components/Studio'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import ContactCTA from './components/ContactCTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/70 backdrop-blur border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 text-white font-semibold">
            <span className="inline-block w-8 h-8 rounded-lg bg-[#FF6A00] shadow-[0_0_20px_rgba(255,106,0,0.8)]" />
            Byte Builder Studios
          </a>
          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="#pricing" className="px-4 py-2 rounded-lg bg-[#FF6A00] text-white shadow-[0_0_20px_rgba(255,106,0,0.6)] hover:brightness-110 transition">Start</a>
          </nav>
        </div>
      </header>

      <main className="overflow-hidden">
        <Hero />
        <section id="how"><HowItWorks /></section>
        <section id="features"><Features /></section>
        <Studio />
        <Portfolio />
        <Pricing />
        <ContactCTA />
      </main>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 text-white/60 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Byte Builder Studios — Build apps with AI</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
