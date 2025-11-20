import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Background gradient wash */}
      <div className="fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_-10%,rgba(99,102,241,0.25),transparent),radial-gradient(800px_500px_at_80%_20%,rgba(236,72,153,0.20),transparent)] pointer-events-none" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Testimonials />
        <CTA />
      </main>

      <footer className="py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} VibeSocial Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
