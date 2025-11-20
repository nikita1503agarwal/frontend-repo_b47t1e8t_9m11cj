export default function Testimonials() {
  const items = [
    {
      quote: 'They 5x’d our monthly revenue in 4 months. The creative + paid combo is elite.',
      name: 'Maya Patel',
      role: 'CEO, Bloom Beauty'
    },
    {
      quote: 'Finally a team that speaks both brand and performance. Best decision we made this year.',
      name: 'Jackson Lee',
      role: 'VP Growth, Taskly'
    },
    {
      quote: 'Our TikTok went from 0 to 250k in 90 days and CAC dropped 38%.',
      name: 'Sofia Mendes',
      role: 'CMO, KairoFit'
    }
  ]

  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Client results</h2>
          <p className="mt-3 text-slate-300">We partner long‑term and win together.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <figure key={i} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <blockquote className="text-slate-200">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-400">— {t.name}, {t.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
