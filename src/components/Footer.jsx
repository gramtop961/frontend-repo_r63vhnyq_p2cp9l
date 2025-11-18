import { Facebook, Instagram, Linkedin } from 'lucide-react'

const brand = {
  deepBlue: '#0F1F4B',
  white: '#FFFFFF',
}

export default function Footer() {
  return (
    <footer className="py-10" style={{ backgroundColor: brand.deepBlue, color: brand.white }}>
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
        <div>
          <div className="text-2xl font-extrabold">Modico</div>
          <p className="mt-2 text-white/70">China-to-Maldives logistics partner.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Quick Links</div>
          <ul className="space-y-1 text-white/80">
            <li><a href="#">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <p className="text-white/80">hello@modico.mv<br/>+960 XXXXXXX</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Follow</div>
          <div className="flex items-center gap-3 text-white/80">
            <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-white/60 text-sm">© {new Date().getFullYear()} Modico Logistics. All rights reserved.</div>
    </footer>
  )
}
