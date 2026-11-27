import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ApplyBanner from '../components/ApplyBanner'
import { admissions } from '../data/siteContent'

export default function Admissions({ page }) {
  return (
    <>
      <PageHeader title={page.title} intro={admissions.intro} />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="font-serif text-3xl font-semibold">How to apply</h2>
        <ol className="mt-8 grid gap-5 md:grid-cols-2">
          {admissions.steps.map((s, i) => (
            <li key={i} className="flex gap-4 rounded-xl border border-line bg-surface p-6">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand font-serif font-semibold text-white"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="font-serif text-xl font-semibold">{s.title}</h3>
                <p className="mt-1 leading-relaxed text-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <Link
          to="/admissions/apply"
          className="mt-8 inline-block rounded-lg bg-brand px-6 py-3 font-semibold text-white hover:brightness-110"
        >
          Start your application
        </Link>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-semibold">What you will need</h2>
            <ul className="mt-4 space-y-2">
              {admissions.requirements.map((r, i) => (
                <li key={i} className="border-l-2 border-gold pl-4 text-muted">
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold">Key dates and fees</h2>
            <dl className="mt-4 divide-y divide-line border-y border-line">
              {admissions.keyDates.map((d) => (
                <div key={d.label} className="flex flex-wrap justify-between gap-2 py-3">
                  <dt className="font-medium">{d.label}</dt>
                  <dd className="text-muted">{d.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <ApplyBanner />
    </>
  )
}