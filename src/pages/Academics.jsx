import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Photo from '../components/Photo'
import ApplyBanner from '../components/ApplyBanner'
import { academics, programmes, studentLife } from '../data/siteContent'

export default function Academics({ page }) {
  const levelCards = programmes.filter((p) => p.level)

  return (
    <>
      <PageHeader title={page.title} intro={academics.intro} />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-5 md:grid-cols-2">
          {levelCards.map((p) => (
            <Link key={p.title} to={p.to} className="group rounded-xl border border-line bg-surface p-8 transition-shadow hover:shadow-md">
              <p className="text-sm text-muted">{p.level}</p>
              <h2 className="mt-1 font-serif text-3xl font-semibold">{p.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{p.text}</p>
              <span className="mt-5 inline-block font-semibold underline-offset-4 group-hover:underline">View curriculum</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-3xl font-semibold">Learning with technology</h2>
            <p className="mt-3 max-w-prose leading-relaxed text-muted">{studentLife.technology}</p>
            <Link to="/student-life" className="mt-6 inline-block rounded-lg border border-line bg-bg px-5 py-2.5 text-sm font-semibold hover:bg-surface">
              See student life
            </Link>
          </div>
          <Photo src="/images/students-tech.jpg" alt="Two students programming a robot from tablets at a work table" className="aspect-[4/3] w-full rounded-xl object-top" />
        </div>
      </section>

      <ApplyBanner />
    </>
  )
}