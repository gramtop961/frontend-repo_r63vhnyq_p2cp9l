const brand = {
  deepBlue: '#0F1F4B',
  royalBlue: '#1E3A8A',
  gold: '#D5A021',
}

export default function Schedule() {
  return (
    <section id="schedule" className="py-16 sm:py-24" style={{ backgroundColor: '#F5F5F7' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: brand.deepBlue }}>Container Schedule</h2>
            <p className="mt-2 text-slate-700">Live status for bookings and container timelines.</p>
          </div>
          <div className="rounded-xl p-5 border shadow-sm" style={{ backgroundColor: brand.royalBlue, color: '#fff', borderColor: brand.gold }}>
            <div className="text-sm uppercase tracking-wide text-white/80">Status</div>
            <div className="text-lg font-semibold mt-1">Now Receiving Boxes (China Side)</div>
            <div className="mt-2 text-sm">Next Container Closing Date: <span className="font-semibold" style={{ color: brand.gold }}>[Slot Placeholder]</span></div>
            <div className="mt-2 text-sm">Bookings Open</div>
          </div>
        </div>
      </div>
    </section>
  )
}
