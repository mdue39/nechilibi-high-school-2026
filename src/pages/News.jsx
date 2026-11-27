import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { news, events } from '../data/siteContent'
import { dateParts } from '../lib/format'

function DateBadge({ iso }) {
  const { day, month } = dateParts(iso)
  return (
    <div className="h-fit w-14 shrink-0 rounded-lg bg-brand p-2 text-center text-white">
      <div className="font-serif text-xl font-semibold leading-none">{day}</div>
      <div className="mt-1 text-xs">{month}</div>
    </div>
  )
}

export default function News({ page }) {
  const cats = ['All', ...new Set(news.map((n) => n.category))]
  const [cat, setCat] = useState('All')
  const items = news.filter((n) => cat === 'All' || n.category === cat)

  return (
    <>
      <PageHeader title={page.title} />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="font-serif text-3xl font-semibold">Latest news</h2>
        <div className="mt-5 flex flex-wrap gap-2" role="tablist" aria-label="Filter news">
          {cats.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium ${
                cat === c ? 'border-brand bg-brand text-white' : 'border-line bg-surface text-muted hover:text-ink'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((n) => (
            <article key={n.title} className="flex gap-4 rounded-xl border border-line bg-surface p-6">
              <DateBadge iso={n.date} />
              <div>
                <p className="text-sm text-muted">{n.category}</p>
                <h3 className="font-serif text-lg font-semibold leading-snug">{n.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{n.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="font-serif text-3xl font-semibold">Upcoming events</h2>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {events.map((e, i) => (
              <li key={i} className="flex items-center gap-5 py-4">
                <DateBadge iso={e.date} />
                <div>
                  <p className="font-semibold">{e.title}</p>
                  <p className="text-sm text-muted">{e.where}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
