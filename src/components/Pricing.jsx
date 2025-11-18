const brand = {
  deepBlue: '#0F1F4B',
  royalBlue: '#1E3A8A',
  gold: '#D5A021',
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-white to-blue-50 border rounded-2xl p-8 sm:p-10 shadow-sm" style={{ borderColor: '#E5E7EB' }}>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: brand.deepBlue }}>Pricing</h2>
              <p className="mt-4 text-slate-700">Simple, transparent, and competitive for all shipments.</p>
              <ul className="mt-6 space-y-2 text-slate-700 list-disc list-inside">
                <li>Sea Freight: <span className="font-semibold" style={{ color: brand.royalBlue }}>$180 per CBM</span></li>
                <li>Special handling options available</li>
                <li>Minimum volume may apply depending on cargo</li>
              </ul>
            </div>
            <div className="rounded-xl p-6 bg-white border" style={{ borderColor: '#E5E7EB' }}>
              <div className="text-5xl font-extrabold" style={{ color: brand.royalBlue }}>$180 <span className="text-xl font-medium text-slate-600">/ CBM</span></div>
              <p className="mt-2 text-sm text-slate-600">Sea freight rate. Contact us for air rates and special cargo.</p>
              <a href="#contact" className="inline-block mt-6 px-6 py-3 rounded-lg font-semibold" style={{ backgroundColor: brand.gold, color: '#0A0A0A' }}>Calculate My Cost</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
