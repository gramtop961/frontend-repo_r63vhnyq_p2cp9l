import { Link as LinkIcon, FileText, Warehouse, Package, Ship } from 'lucide-react'

const brand = {
  deepBlue: '#0F1F4B',
  royalBlue: '#1E3A8A',
  gold: '#D5A021',
}

const steps = [
  { title: 'Send Product Links', icon: LinkIcon },
  { title: 'Get Quotation', icon: FileText },
  { title: 'Supplier to China Warehouse', icon: Warehouse },
  { title: 'Consolidation + Container Loading', icon: Package },
  { title: 'Shipment to Maldives', icon: Ship },
]

export default function ProcessTimeline() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: brand.deepBlue }}>Shipping Process</h2>
        <div className="mt-10 grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-6">
          {steps.map(({ title, icon: Icon }, idx) => (
            <div key={title} className="relative p-6 rounded-xl border bg-white shadow-sm" style={{ borderColor: '#E5E7EB' }}>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#EEF2FF' }}>
                  <Icon className="w-6 h-6" color={brand.royalBlue} />
                </div>
                <span className="text-sm font-semibold" style={{ color: brand.royalBlue }}>Step {idx + 1}</span>
              </div>
              <h3 className="mt-4 font-semibold" style={{ color: brand.deepBlue }}>{title}</h3>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5" style={{ backgroundColor: brand.gold }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
