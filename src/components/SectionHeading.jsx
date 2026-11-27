import { Link } from 'react-router-dom'

export default function SectionHeading({ title, text, to, linkLabel }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h2 className="font-serif text-3xl font-semibold">{title}</h2>
        {text && <p className="mt-2 max-w-xl text-muted">{text}</p>}
      </div>
      {to && (
        <Link to={to} className="rounded-lg border border-line bg-surface px-4 py-2 text-sm font-semibold hover:bg-bg">
          {linkLabel}
        </Link>
      )}
    </div>
  )
}