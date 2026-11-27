import PageHeader from '../components/PageHeader'
import ApplyBanner from '../components/ApplyBanner'
import { levels } from '../data/siteContent'

export default function Level({ page }) {
  const d = levels[page.path]

  return (
    <>
      <PageHeader title={page.title} intro={d.intro} />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <dl className="grid gap-5 md:grid-cols-3">
          {d.facts.map((f) => (
            <div key={f.label} className="rounded-xl border border-line bg-surface p-6">
              <dt className="text-sm text-muted">{f.label}</dt>
              <dd className="mt-1 font-serif text-xl font-semibold">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="font-serif text-3xl font-semibold">Subjects</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {d.subjects.map((g) => (
              <div key={g.group} className="border-l-2 border-gold pl-5">
                <h3 className="font-serif text-xl font-semibold">{g.group}</h3>
                <ul className="mt-2 space-y-1 text-muted">
                  {g.items.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ApplyBanner />
    </>
  )
}