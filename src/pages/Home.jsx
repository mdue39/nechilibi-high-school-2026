import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { school, hero, stats, about, schoolHead, programmes, tiles, news } from '../data/siteContent'
import Photo from '../components/Photo'
import SectionHeading from '../components/SectionHeading'
import ApplyBanner from '../components/ApplyBanner'

const dateParts = (iso) => {
  const d = new Date(`${iso}T12:00:00`)
  return { day: d.getDate(), month: d.toLocaleString('en-GB', { month: 'short' }) }
}

export default function Home() {
  useEffect(() => {
    document.title = school.name
  }, [])

  return (
    <>
      <section
        className="bg-brand bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(46,15,71,0.82), rgba(46,15,71,0.7)), url(${school.hero})`,
        }}
      >
        <div className="mx-auto max-w-6xl px-5 pb-32 pt-20 sm:pt-28">
          <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-6xl">{hero.headline}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">{hero.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/admissions/apply" className="rounded-lg bg-white px-6 py-3 font-semibold text-[#2E0F47] hover:bg-white/90">
              Apply now
            </Link>
            <Link to="/about" className="rounded-lg border border-white/60 px-6 py-3 font-medium hover:bg-white/10">
              Explore our school
            </Link>
          </div>
        </div>
      </section>

      <section aria-label="School facts" className="mx-auto -mt-16 max-w-5xl px-5">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line shadow-lg md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse bg-surface p-6 text-center">
              <dt className="mt-1 text-sm text-muted">{s.label}</dt>
              <dd className="font-serif text-3xl font-semibold">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading title="Academic programmes" text="From Form 1 to Upper 6, every student is prepared for the next step." />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {programmes.map((p) => (
            <Link key={p.title} to={p.to} className="group rounded-xl border border-line bg-surface p-6 transition-shadow hover:shadow-md">
              {p.level && <p className="text-sm text-muted">{p.level}</p>}
              <h3 className="mt-1 font-serif text-2xl font-semibold">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
              <span className="mt-4 inline-block font-semibold underline-offset-4 group-hover:underline">Learn more</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <SectionHeading title="What we stand for" to="/about" linkLabel="About our school" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border-t-4 border-gold bg-bg p-6">
              <h3 className="font-serif text-2xl font-semibold">Our purpose</h3>
              <p className="mt-3 leading-relaxed text-muted">{about.purpose}</p>
            </div>
            <div className="rounded-xl border-t-4 border-gold bg-bg p-6">
              <h3 className="font-serif text-2xl font-semibold">Our vision</h3>
              <p className="mt-3 leading-relaxed text-muted">{about.vision}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid overflow-hidden rounded-xl md:grid-cols-2">
          <Photo src={schoolHead.photo} alt={schoolHead.name} className="min-h-[280px] w-full" />
          <div className="flex flex-col justify-center bg-brand p-8 text-white md:p-12">
            <blockquote className="font-serif text-2xl leading-snug">“{schoolHead.quote}”</blockquote>
            <p className="mt-5 font-semibold">{schoolHead.name}</p>
            <p className="text-sm text-white/75">{schoolHead.title}</p>
            <Link to="/school-head" className="mt-6 self-start rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#2E0F47] hover:bg-white/90">
              Read the full message
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <SectionHeading title="Life at Nechilibi" text="Learning, sport, clubs and a campus to be proud of." to="/student-life" linkLabel="Explore student life" />
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {tiles.map((t) => (
            <Link key={t.label} to={t.to} className="relative block aspect-[4/3] overflow-hidden rounded-xl">
              <Photo src={t.photo} alt="" className="absolute inset-0 h-full w-full" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 font-serif text-lg font-semibold text-white">
                {t.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <SectionHeading title="News and events" to="/news" linkLabel="View all news" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {news.slice(0, 3).map((n) => {
              const { day, month } = dateParts(n.date)
              return (
                <article key={n.title} className="flex gap-4 rounded-xl border border-line bg-bg p-6">
                  <div className="h-fit w-14 shrink-0 rounded-lg bg-brand p-2 text-center text-white">
                    <div className="font-serif text-xl font-semibold leading-none">{day}</div>
                    <div className="mt-1 text-xs">{month}</div>
                  </div>
                  <div>
                    <p className="text-sm text-muted">{n.category}</p>
                    <h3 className="font-serif text-lg font-semibold leading-snug">{n.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{n.text}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <ApplyBanner />
    </>
  )
}