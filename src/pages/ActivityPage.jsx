import PageHeader from '../components/PageHeader'
import ApplyBanner from '../components/ApplyBanner'
import { activities } from '../data/siteContent'

export default function ActivityPage({ page }) {
  const d = activities[page.path]

  return (
    <>
      <PageHeader title={page.title} intro={d.intro} />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {d.items.map((a, i) => (
            <article key={i} className="rounded-xl border border-line border-t-4 border-t-gold bg-surface p-6">
              <h2 className="font-serif text-xl font-semibold">{a.name}</h2>
              <p className="mt-2 leading-relaxed text-muted">{a.note}</p>
            </article>
          ))}
        </div>
      </section>

      <ApplyBanner />
    </>
  )
}
