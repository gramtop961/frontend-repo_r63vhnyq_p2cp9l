const brand = {
  deepBlue: '#0F1F4B',
}

const quotes = [
  'Reliable partner for all our imports.',
  'Pricing is fair and delivery is always on time.',
  'Professional and responsive team — highly recommend.',
]

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24" style={{ backgroundColor: '#F5F5F7' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: brand.deepBlue }}>What Clients Say</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <div key={i} className="rounded-xl bg-white p-6 border shadow-sm">
              <p className="text-slate-700">“{q}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
