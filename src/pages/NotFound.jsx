import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { school } from '../data/siteContent'

export default function NotFound() {
  useEffect(() => {
    document.title = `Page not found | ${school.name}`
  }, [])

  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <h1 className="font-serif text-4xl font-semibold">Page not found</h1>
      <p className="mt-3 max-w-xl text-muted">This address doesn’t match any page on the site. Check the link, or go back to the home page.</p>
      <Link to="/" className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-[#2E0F47] hover:bg-white/90">
        Go to the home page
      </Link>
    </section>
  )
}