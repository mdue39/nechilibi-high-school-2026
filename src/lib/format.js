export const dateParts = (iso) => {
  const d = new Date(`${iso}T12:00:00`)
  return { day: d.getDate(), month: d.toLocaleString('en-GB', { month: 'short' }) }
}