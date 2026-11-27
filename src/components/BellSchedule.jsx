import { useEffect, useState } from 'react'
import { bellsFor } from '../data/siteContent'

const toMin = (t) => {
  const [h, m] = t.split(':').map(Number)
  return h * 60 + m
}
const show = (t) => {
  const [h, m] = t.split(':').map(Number)
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2, '0')}`
}

export default function BellSchedule() {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30000)
    return () => clearInterval(id)
  }, [])

  const mins = now.getHours() * 60 + now.getMinutes()
  const weekend = now.getDay() === 0 || now.getDay() === 6
  const bells = bellsFor(weekend ? 1 : now.getDay())
  const current = weekend ? null : bells.find((b) => mins >= toMin(b.start) && mins < toMin(b.end))
  const next = weekend ? null : bells.find((b) => toMin(b.start) > mins)

  let status
  if (weekend) status = 'No classes today'
  else if (current) status = `${current.name}, ${toMin(current.end) - mins} minutes remaining`
  else if (next) status = `${next.name} begins at ${show(next.start)}`
  else status = 'The school day has ended'

  return (
    <div className="rounded-xl border border-line bg-surface p-6">
      <h2 className="font-serif text-2xl font-semibold">{weekend ? 'School day timetable' : 'Today’s bell schedule'}</h2>
      <p className="mt-1 text-sm text-muted" aria-live="polite">
        {status}
      </p>
      <ul className="mt-4 space-y-1">
        {bells.map((b) => {
          const active = current && current.name === b.name
          return (
            <li
              key={b.name}
              className={`flex justify-between rounded-lg border-l-4 px-3 py-2 ${
                active ? 'border-gold bg-brand font-semibold text-white' : 'border-transparent'
              }`}
            >
              <span>{b.name}</span>
              <span className={`text-sm tabular-nums ${active ? '' : 'text-muted'}`}>
                {show(b.start)} – {show(b.end)}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}