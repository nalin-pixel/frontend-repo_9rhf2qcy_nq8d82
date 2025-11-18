import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Services />
      <CTA />

      <footer className="border-t border-white/10 bg-slate-950/70 py-10 text-center text-white/60">
        <p className="text-sm">Opulent Cleaning Services — discreet, reliable, and detail-obsessed care for refined spaces.</p>
      </footer>
    </div>
  )
}

export default App
