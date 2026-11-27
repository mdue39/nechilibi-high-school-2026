import PageHeader from '../components/PageHeader'
import Photo from '../components/Photo'
import ApplyBanner from '../components/ApplyBanner'
import { school, schoolHead } from '../data/siteContent'

export default function SchoolHead({ page }) {
  return (
    <>
      <PageHeader title={page.title} />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[320px_1fr]">
        <div>
          <Photo src={schoolHead.photo} alt={schoolHead.name} className="aspect-[3/4] w-full rounded-xl" />
          <p className="mt-4 font-serif text-xl font-semibold">{schoolHead.name}</p>
          <p className="text-muted">
            {schoolHead.title}, {school.name}
          </p>
        </div>
        <div className="max-w-prose">
          <blockquote className="border-l-4 border-gold pl-5 font-serif text-2xl leading-snug">“{schoolHead.quote}”</blockquote>
          <div className="mt-8 space-y-4 leading-relaxed text-muted">
            {schoolHead.message.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <ApplyBanner />
    </>
  )
}