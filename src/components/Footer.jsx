import { Link } from 'react-router-dom'
import { school, footerExplore, footerQuick } from '../data/siteContent'
import Logo from './Logo'

function LinkList({ title, links }) {
  return (
    <div>
      <h2 className="font-serif text-lg font-semibold">{title}</h2>
      <ul className="mt-4 space-y-2 text-white/80">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="hover:text-white hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Logo />
            <p className="font-serif text-xl font-semibold leading-tight">{school.name}</p>
          </div>
          <p className="mt-4 leading-relaxed text-white/75">{school.blurb}</p>
          <ul className="mt-5 flex gap-3">
            {school.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-sm hover:bg-white/10"
                >
                  {s.short}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <LinkList title="Explore" links={footerExplore} />
        <LinkList title="Quick links" links={footerQuick} />

        <div>
          <h2 className="font-serif text-lg font-semibold">Contact us</h2>
          <ul className="mt-4 space-y-2 text-white/80">
            <li>{school.address}</li>
            <li>{school.phone}</li>
            <li>{school.email}</li>
            <li>{school.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15 text-sm text-white/65">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4">
          <p>
            © {new Date().getFullYear()} {school.name}. All rights reserved.
          </p>
          <p className="flex gap-5">
            <Link to="/privacy" className="hover:text-white hover:underline">
              Privacy policy
            </Link>
            <Link to="/terms" className="hover:text-white hover:underline">
              Terms of service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}