import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, school } from '../data/siteContent'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

const inGroup = (group, pathname) =>
  group.children.some((c) => pathname === c.to || pathname.startsWith(c.to + '/'))

const topLink = ({ isActive }) =>
  `border-b-2 px-3 py-2 text-[15px] font-medium ${
    isActive ? 'border-gold text-white' : 'border-transparent text-white/85 hover:text-white'
  }`

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(null)
  const [mobile, setMobile] = useState(false)
  const [group, setGroup] = useState(null) 

  useEffect(() => {
    setOpen(null)
    setMobile(false)
    setGroup(null)
  }, [pathname])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(null)
        setMobile(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="sticky top-0 z-40 bg-brand text-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex items-center gap-3">
          <Logo />
          <span className="font-serif text-xl font-semibold leading-tight">{school.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) =>
              item.children ? (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpen(item.label)}
                  onMouseLeave={() => setOpen(null)}
                  onFocus={() => setOpen(item.label)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) setOpen(null)
                  }}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={open === item.label}
                    onClick={() => setOpen(item.label)}
                    className={`border-b-2 px-3 py-2 text-[15px] font-medium ${
                      inGroup(item, pathname)
                        ? 'border-gold text-white'
                        : 'border-transparent text-white/85 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                  {open === item.label && (
                    <ul className="absolute left-0 top-full z-50 min-w-[230px] border border-line bg-surface py-2 text-ink shadow-lg">
                      {item.children.map((c) => (
                        <li key={c.to}>
                          <NavLink
                            to={c.to}
                            end
                            className={({ isActive }) =>
                              `block border-l-4 px-4 py-2 text-[15px] hover:bg-bg ${
                                isActive ? 'border-gold font-semibold' : 'border-transparent'
                              }`
                            }
                          >
                            {c.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.to === '/'} className={topLink}>
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/admissions/apply"
           className="hidden rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#2E0F47] hover:bg-white/90 sm:block"
          >
            Apply now
          </Link>
          <ThemeToggle />
          <button
            type="button"
            aria-expanded={mobile}
            aria-controls="mobile-menu"
            onClick={() => setMobile(!mobile)}
            className="rounded-lg border border-white/40 px-3 py-2 text-sm xl:hidden"
          >
            {mobile ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {mobile && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-white/15 px-5 pb-5 pt-2 xl:hidden">
          <ul>
            {nav.map((item) =>
              item.children ? (
                <li key={item.label} className="border-b border-white/10">
                  <button
                    type="button"
                    aria-expanded={group === item.label}
                    onClick={() => setGroup(group === item.label ? null : item.label)}
                    className="flex w-full items-center justify-between py-3 text-left font-medium"
                  >
                    {item.label}
                    <span aria-hidden="true">{group === item.label ? '−' : '+'}</span>
                  </button>
                  {group === item.label && (
                    <ul className="pb-2 pl-4">
                      {item.children.map((c) => (
                        <li key={c.to}>
                          <NavLink
                            to={c.to}
                            end
                            className={({ isActive }) =>
                              `block py-2 ${isActive ? 'font-semibold text-gold' : 'text-white/85'}`
                            }
                          >
                            {c.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.to} className="border-b border-white/10">
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) => `block py-3 font-medium ${isActive ? 'text-gold' : ''}`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
          <Link
            to="/admissions/apply"
           className="mt-4 block rounded-lg bg-white px-5 py-3 text-center font-semibold text-[#2E0F47]"
          >
            Apply now
          </Link>
        </nav>
      )}
    </header>
  )
}