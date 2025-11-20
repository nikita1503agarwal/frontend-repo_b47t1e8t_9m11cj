import { Rocket, Megaphone, BarChart3, PenTool } from 'lucide-react'

function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-slate-900/40 p-6 hover:border-white/20 transition-all">
      <div className="h-12 w-12 rounded-xl bg-white/10 grid place-items-center text-white shadow-inner">
        <Icon size={22} />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{desc}</p>
      <div className="mt-4 text-xs text-slate-400 group-hover:text-slate-300">Learn more →</div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(400px_circle_at_20%_20%,rgba(236,72,153,0.15),transparent_40%),radial-gradient(400px_circle_at_80%_10%,rgba(56,189,248,0.15),transparent_40%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-3 text-slate-300">Full‑service social media growth, from strategy to execution.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard icon={PenTool} title="Content Studio" desc="Thumb‑stopping creative designed for each platform, produced weekly." />
          <ServiceCard icon={Megaphone} title="Paid Social" desc="ROI‑driven campaigns on Meta, TikTok, YouTube, and LinkedIn." />
          <ServiceCard icon={BarChart3} title="Analytics" desc="Dashboards that tie content and ad spend to real business outcomes." />
          <ServiceCard icon={Rocket} title="Growth Ops" desc="Community, creators, UGC, and partnerships that scale your reach." />
        </div>
      </div>
    </section>
  )
}
