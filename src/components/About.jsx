const brand = {
  deepBlue: '#0F1F4B',
  royalBlue: '#1E3A8A',
  gold: '#D5A021',
  white: '#FFFFFF',
  lightGray: '#F5F5F7',
  charcoal: '#0A0A0A',
}

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24" style={{ backgroundColor: brand.lightGray }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: brand.deepBlue }}>About Modico</h2>
            <p className="mt-6 text-lg leading-relaxed" style={{ color: brand.deepBlue }}>
              Modico Logistics is a Maldives-based freight-forwarding and sourcing service specializing in importing goods from China to Maldives via sea and air. We provide CBM-based shipping, supplier sourcing, container consolidations, and full handling from China warehouses to Maldives delivery points.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg border" style={{ borderColor: '#E5E7EB' }}>
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop" alt="Warehouse" className="w-full h-60 object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
