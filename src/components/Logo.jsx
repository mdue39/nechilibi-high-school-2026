import { useState } from 'react'
import { school } from '../data/siteContent'

export default function Logo({ size = 'h-11 w-11' }) {
  const [ok, setOk] = useState(true)
  if (ok) {
    return <img src={school.logo} alt="" onError={() => setOk(false)} className={`${size} object-contain`} />
  }
  return (
    <span
      aria-hidden="true"
      className={`${size} flex items-center justify-center rounded-full border-2 border-gold font-serif font-bold text-gold`}
    >
      N
    </span>
  )
}