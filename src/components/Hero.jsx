import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(600px_circle_at_10%_10%,rgba(168,85,247,0.25),transparent_40%),radial-gradient(600px_circle_at_90%_10%,rgba(59,130,246,0.25),transparent_40%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Social media that actually moves the needle
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Grow faster with world‑class
              <span className="bg-gradient-to-r from-pink-400 via-violet-400 to-blue-400 bg-clip-text text-transparent"> Social Media</span>
            </h1>
            <p className="mt-5 text-lg text-slate-300 max-w-xl">
              We manage and scale your presence across every platform — content, ads, and analytics handled by a senior team.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex justify-center items-center rounded-xl bg-white text-slate-900 px-5 py-3 font-medium hover:bg-blue-50 transition-colors">
                Get a free strategy call
              </a>
              <a href="#services" className="inline-flex justify-center items-center rounded-xl border border-white/15 px-5 py-3 text-slate-200 hover:bg-white/10 transition-colors">
                Explore services
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-slate-400">
              <div className="text-sm">
                <p className="font-semibold text-white">$12M+</p>
                <p className="text-xs">Ad spend managed</p>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-white">250M+</p>
                <p className="text-xs">Monthly impressions</p>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-white">96%</p>
                <p className="text-xs">Client retention</p>
              </div>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[620px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-xl">
              <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
