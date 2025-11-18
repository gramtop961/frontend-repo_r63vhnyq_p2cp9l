import { motion } from 'framer-motion'
import { Ship, PackageSearch, BadgeCheck } from 'lucide-react'

const brand = {
  deepBlue: '#0F1F4B',
  royalBlue: '#1E3A8A',
  gold: '#D5A021',
  white: '#FFFFFF',
  lightGray: '#F5F5F7',
  charcoal: '#0A0A0A',
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505839673365-e3971f8d9184?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.65)'
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${brand.deepBlue} 0%, ${brand.royalBlue} 60%)`,
          mixBlendMode: 'multiply',
          opacity: 0.9,
        }}
      />

      {/* Maldives flag badge */}
      <div className="absolute top-6 right-6 z-10 flex items-center gap-2 px-3 py-2 rounded-md shadow-lg"
           style={{ backgroundColor: 'rgba(15,31,75,0.75)', border: `1px solid ${brand.gold}` }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives.svg"
          alt="Maldives Flag"
          className="h-5 w-7 object-cover rounded-sm"
          style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.25)' }}
        />
        <span className="text-sm font-medium" style={{ color: brand.white }}>Maldives</span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 sm:py-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: 'rgba(213,160,33,0.15)', color: brand.white, border: `1px solid ${brand.gold}` }}>
            <Ship className="w-4 h-4" color={brand.gold} />
            Trusted Maldives-based Forwarder
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight" style={{ color: brand.white }}>
            Your Reliable Partner for China-to-Maldives Shipping
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Sourcing, consolidation, forwarding, and door-to-door delivery — all handled by Modico with unmatched efficiency.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="px-6 py-3 rounded-lg font-semibold shadow-md" style={{ backgroundColor: brand.gold, color: brand.charcoal }}>
              Get a Quote
            </a>
            <a href="#schedule" className="px-6 py-3 rounded-lg font-semibold border" style={{ borderColor: brand.gold, color: brand.white }}>
              Book a Container Spot
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/90">
            <div className="flex items-center gap-2"><BadgeCheck className="w-5 h-5" color={brand.gold} /><span>On-time delivery</span></div>
            <div className="flex items-center gap-2"><PackageSearch className="w-5 h-5" color={brand.gold} /><span>Transparent pricing</span></div>
            <div className="flex items-center gap-2"><Ship className="w-5 h-5" color={brand.gold} /><span>Maldives-based team</span></div>
          </div>
        </motion.div>
      </div>

      {/* subtle gradient edge */}
      <div className="absolute bottom-0 inset-x-0 h-24" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.2), transparent)' }} />
    </section>
  )
}
