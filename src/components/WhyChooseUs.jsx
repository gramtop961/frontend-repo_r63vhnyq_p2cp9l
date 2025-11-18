import { CheckCircle2 } from 'lucide-react'

const brand = {
  deepBlue: '#0F1F4B',
  royalBlue: '#1E3A8A',
  gold: '#D5A021',
  white: '#FFFFFF',
}

const usps = [
  'Transparent pricing',
  'Weekly shipments',
  'Professional communication',
  'End-to-end handling (China → Maldives)',
  'Safe packaging and container management',
  '24/7 support',
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24" style={{ backgroundColor: brand.deepBlue }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why Choose Modico</h2>
          <div className="mt-2 h-1 w-24" style={{ backgroundColor: brand.gold }} />
          <p className="mt-6 text-white/80">We operate with clarity, consistency, and accountability at every leg of your shipment.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {usps.map((item) => (
            <div key={item} className="rounded-xl p-6 border/10 bg-white/5 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6" color={brand.gold} />
                <p className="text-white/90">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
