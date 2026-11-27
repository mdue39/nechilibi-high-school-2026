export const inputCls =
  'w-full rounded-lg border border-line bg-bg px-3 py-2.5 text-ink placeholder:text-muted focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40'

export const mailtoHref = (to, subject, lines) =>
  `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`