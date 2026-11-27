import { Link } from 'react-router-dom'
import { applyBanner } from '../data/siteContent'

export default function ApplyBanner() {
  return (
    <section className="bg-brand text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center">
        <div>
          <h2 className="font-serif text-3xl font-semibold">{applyBanner.title}</h2>
          <p className="mt-2 max-w-xl text-white/80">{applyBanner.text}</p>
        </div>
        <Link to="/admissions/apply" className="rounded-lg bg-white px-6 py-3 font-semibold text-[#2E0F47] hover:bg-white/90">
          Apply now
        </Link>
      </div>
    </section>
  )
}