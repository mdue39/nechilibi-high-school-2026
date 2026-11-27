import PageHeader from '../components/PageHeader'
import BellSchedule from '../components/BellSchedule'
import ApplyBanner from '../components/ApplyBanner'
import { parents } from '../data/siteContent'

export default function Parents({ page }) {
  return (
    <>
      <PageHeader title={page.title} intro={parents.intro} />

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-14 lg:grid-cols-[1fr_1.2fr]">
        <BellSchedule />
        <div className="rounded-xl border border-line bg-surface p-6">
          <h2 className="font-serif text-2xl font-semibold">Term dates</h2>
          <dl className="mt-4 divide-y divide-line border-y border-line">
            {parents.terms.map((t) => (
              <div key={t.term} className="flex flex-wrap justify-between gap-2 py-3">
                <dt className="font-medium">{t.term}</dt>
                <dd className="text-muted">{t.dates}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-14 md:grid-cols-3">
          {parents.info.map((i) => (
            <article key={i.title} className="rounded-xl border border-line border-t-4 border-t-gold bg-bg p-6">
              <h2 className="font-serif text-xl font-semibold">{i.title}</h2>
              <p className="mt-2 leading-relaxed text-muted">{i.text}</p>
            </article>
          ))}
        </div>
      </section>

      <ApplyBanner />
    </>
  )
}