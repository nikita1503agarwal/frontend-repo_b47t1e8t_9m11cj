export default function Process() {
  const steps = [
    {
      title: 'Discovery & Audit',
      desc: 'We analyze your brand, audience, competitors, and current performance.'
    },
    {
      title: 'Strategy & Roadmap',
      desc: 'Channel mix, content pillars, ad plan, and KPIs mapped to your goals.'
    },
    {
      title: 'Production & Launch',
      desc: 'Creative produced in weekly sprints; paid campaigns kick off.'
    },
    {
      title: 'Scale & Optimize',
      desc: 'Iterate with data—double down on winners and expand reach.'
    }
  ]

  return (
    <section id="process" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How we work</h2>
          <p className="mt-3 text-slate-300">A proven, repeatable system designed to compound results.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="relative rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <div className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-white text-slate-900 grid place-items-center font-semibold shadow">
                {i + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
