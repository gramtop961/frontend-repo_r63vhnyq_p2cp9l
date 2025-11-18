import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import ProcessTimeline from './components/ProcessTimeline'
import Pricing from './components/Pricing'
import Schedule from './components/Schedule'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-[#0F1F4B] to-[#1E3A8A]" />
            <span className="font-extrabold text-[#0F1F4B] text-xl">Modico</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-slate-700">
            <a href="#services" className="hover:text-[#1E3A8A]">Services</a>
            <a href="#pricing" className="hover:text-[#1E3A8A]">Pricing</a>
            <a href="#schedule" className="hover:text-[#1E3A8A]">Schedule</a>
            <a href="#contact" className="px-4 py-2 rounded-lg font-semibold text-white" style={{ background: '#1E3A8A' }}>Get a Quote</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <ProcessTimeline />
        <Pricing />
        <Schedule />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
