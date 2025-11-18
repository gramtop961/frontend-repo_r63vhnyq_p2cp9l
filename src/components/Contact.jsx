import { Phone, Mail, MessageCircle } from 'lucide-react'

const brand = {
  deepBlue: '#0F1F4B',
  gold: '#D5A021',
  white: '#FFFFFF',
}

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24" style={{ backgroundColor: brand.deepBlue }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact Modico</h2>
            <div className="mt-2 h-1 w-24" style={{ backgroundColor: brand.gold }} />
            <p className="mt-4 text-white/80">Tell us what you want to import and we’ll get back with a clear quotation.</p>
            <div className="mt-6 space-y-3 text-white/90">
              <div className="flex items-center gap-2"><Phone className="w-5 h-5" color={brand.gold} /><span>+960 XXXXXXX</span></div>
              <div className="flex items-center gap-2"><Mail className="w-5 h-5" color={brand.gold} /><span>hello@modico.mv</span></div>
            </div>
            <a href="https://wa.me/9600000000" target="_blank" className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-lg font-semibold" style={{ backgroundColor: brand.gold, color: '#0A0A0A' }}>
              <MessageCircle className="w-5 h-5" /> Chat with Us: +960 XXXXXXX
            </a>
          </div>
          <form className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-white">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/80">Name</label>
                <input type="text" placeholder="Your name" className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/40" />
              </div>
              <div>
                <label className="text-sm text-white/80">Contact Number</label>
                <input type="text" placeholder="e.g., +960 7XXXXXX" className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/40" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-white/80">Email</label>
              <input type="email" placeholder="name@email.com" className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/40" />
            </div>
            <div className="mt-4">
              <label className="text-sm text-white/80">Product links</label>
              <textarea placeholder="Paste links to products here" rows={4} className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/40" />
            </div>
            <div className="mt-4">
              <label className="text-sm text-white/80">Message</label>
              <textarea placeholder="Tell us about your shipment" rows={4} className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/40" />
            </div>
            <button type="submit" className="mt-6 w-full px-6 py-3 rounded-lg font-semibold" style={{ backgroundColor: brand.gold, color: '#0A0A0A' }}>Send Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  )
}
