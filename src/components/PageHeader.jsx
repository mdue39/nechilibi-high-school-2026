import { useEffect } from 'react'
import { school } from '../data/siteContent'

export default function PageHeader({ title, intro }) {
  useEffect(() => {
    document.title = `${title} | ${school.name}`
  }, [title])

  return (
    <section className="bg-brand text-white">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <h1 className="font-serif text-4xl font-semibold">{title}</h1>
        {intro && <p className="mt-3 max-w-2xl text-white/80">{intro}</p>}
      </div>
    </section>
  )
}