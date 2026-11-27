import { useEffect } from 'react'
import { school } from '../data/siteContent'

export default function PlainPage({ page }) {
  useEffect(() => {
    document.title = `${page.title} | ${school.name}`
  }, [page.title])

  return (
    <>
      <section className="bg-brand text-white">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h1 className="font-serif text-4xl font-semibold">{page.title}</h1>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-12">
        <p className="max-w-2xl leading-relaxed text-muted">{page.text}</p>
      </section>
    </>
  )
}