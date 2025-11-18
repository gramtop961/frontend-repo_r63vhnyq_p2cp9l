import { Boxes, PackageCheck, Ship, Plane, ShieldCheck, FileCheck2, MapPin } from 'lucide-react'

const brand = {
  deepBlue: '#0F1F4B',
  royalBlue: '#1E3A8A',
  gold: '#D5A021',
  white: '#FFFFFF',
  lightGray: '#F5F5F7',
  charcoal: '#0A0A0A',
}

const services = [
  { title: 'China Sourcing Assistance', icon: Boxes },
  { title: 'Consolidation & Packing', icon: PackageCheck },
  { title: 'Sea Freight (CBM-based)', icon: Ship },
  { title: 'Air Freight', icon: Plane },
  { title: 'Supplier Verification', icon: ShieldCheck },
  { title: 'Customs Handling', icon: FileCheck2 },
  { title: 'Last-mile Delivery to Malé', icon: MapPin },
]

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: brand.deepBlue }}>Our Services</h2>
          <div className="h-1 w-32 rounded" style={{ background: brand.gold }} />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, icon: Icon }) => (
            <div key={title} className="group rounded-xl border bg-white shadow-sm p-6 transition hover:shadow-md" style={{ borderColor: '#E5E7EB' }}>
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#F8FAFC' }}>
                  <Icon className="w-6 h-6" color={brand.royalBlue} />
                </div>
                <div className="h-1 w-10" style={{ backgroundColor: brand.gold }} />
              </div>
              <h3 className="mt-5 text-lg font-semibold" style={{ color: brand.deepBlue }}>{title}</h3>
              <p className="mt-2 text-sm text-slate-600">Professional, reliable, and transparent handling for every shipment.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
