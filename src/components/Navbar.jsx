import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function NavLink({ children, href = '#' }) {
  return (
    <a href={href} className="text-sm text-slate-300 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex h-14 items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-4">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-pink-500 via-violet-500 to-blue-500 shadow-lg shadow-violet-500/30" />
            <div className="leading-tight">
              <p className="text-white font-semibold">VibeSocial</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-400">Marketing Studio</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#process">Process</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-medium shadow-sm hover:bg-blue-50 transition-colors">
              Get a Proposal
            </a>
          </div>

          <button className="md:hidden p-2 text-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-2 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-4 space-y-3">
            <a onClick={() => setOpen(false)} href="#services" className="block text-slate-300 hover:text-white">Services</a>
            <a onClick={() => setOpen(false)} href="#process" className="block text-slate-300 hover:text-white">Process</a>
            <a onClick={() => setOpen(false)} href="#testimonials" className="block text-slate-300 hover:text-white">Testimonials</a>
            <a onClick={() => setOpen(false)} href="#contact" className="block text-slate-300 hover:text-white">Contact</a>
            <a onClick={() => setOpen(false)} href="#contact" className="inline-flex w-full justify-center rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-medium shadow-sm hover:bg-blue-50 transition-colors">
              Get a Proposal
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
