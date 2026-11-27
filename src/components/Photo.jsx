import { useState } from 'react'

export default function Photo({ src, alt, className = '' }) {
  const [ok, setOk] = useState(true)
  if (!ok) {
    return <div role="img" aria-label={alt} className={`bg-gradient-to-br from-brand to-[#7A3AA0] ${className}`} />
  }
  return <img src={src} alt={alt} loading="lazy" onError={() => setOk(false)} className={`object-cover ${className}`} />
}