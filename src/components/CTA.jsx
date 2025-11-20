export default function CTA() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-violet-600/30 via-fuchsia-500/30 to-sky-500/30 p-1">
          <div className="rounded-[22px] bg-slate-900/80 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to turn social into a growth engine?</h3>
                <p className="mt-3 text-slate-300">Tell us about your goals and we’ll send a custom plan within 24 hours.</p>
              </div>
              <form className="space-y-3">
                <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Your name" />
                <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Work email" />
                <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Website" />
                <button type="button" className="w-full rounded-xl bg-white text-slate-900 px-4 py-3 text-sm font-semibold hover:bg-blue-50 transition-colors">Get my proposal</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
