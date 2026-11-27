import PageHeader from '../components/PageHeader'
import Photo from '../components/Photo'
import ApplyBanner from '../components/ApplyBanner'
import { about } from '../data/siteContent'

export default function About({ page }) {
  return (
    <>
      <PageHeader title={page.title} />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="font-serif text-3xl font-semibold">Our story</h2>
          <p className="mt-4 max-w-prose leading-relaxed text-muted">{about.story}</p>
        </div>
        <Photo src="/images/campus-entrance.jpg" alt="The entrance arch of Nechilibi High School" className="aspect-[4/3] w-full rounded-xl" />
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border-t-4 border-gold bg-bg p-6">
              <h2 className="font-serif text-2xl font-semibold">Our purpose</h2>
              <p className="mt-3 leading-relaxed text-muted">{about.purpose}</p>
            </div>
            <div className="rounded-xl border-t-4 border-gold bg-bg p-6">
              <h2 className="font-serif text-2xl font-semibold">Our vision</h2>
              <p className="mt-3 leading-relaxed text-muted">{about.vision}</p>
            </div>
          </div>

          <h2 className="mt-12 font-serif text-2xl font-semibold">Our values</h2>
          <ul className="mt-4 grid gap-x-10 gap-y-3 md:grid-cols-2">
            {about.values.map((v) => (
              <li key={v} className="border-l-2 border-gold pl-4 text-muted">
                {v}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ApplyBanner />
    </>
  )
}