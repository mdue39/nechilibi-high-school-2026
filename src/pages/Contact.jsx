import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Field from '../components/Field'
import { school } from '../data/siteContent'
import { inputCls, mailtoHref } from '../lib/form'

export default function Contact({ page }) {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    if (school.email.endsWith('.example')) {
      setStatus('noemail')
      return
    }
    const lines = [`Name: ${f.name}`, `Email: ${f.email}`, '', f.message]
    window.location.href = mailtoHref(school.email, `Message from ${f.name}`, lines)
    setStatus('sent')
  }

  const details = [
    { label: 'Address', value: school.address },
    { label: 'Phone', value: school.phone },
    { label: 'Email', value: school.email },
    { label: 'Office hours', value: school.hours },
  ]

  return (
    <>
      <PageHeader title={page.title} intro="Questions about the school, admissions or your child? Get in touch." />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2">
        <dl className="space-y-5">
          {details.map((d) => (
            <div key={d.label} className="rounded-xl border border-line bg-surface p-5">
              <dt className="text-sm text-muted">{d.label}</dt>
              <dd className="mt-1 font-serif text-xl font-semibold">{d.value}</dd>
            </div>
          ))}
        </dl>

        <form onSubmit={submit} className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold">Send us a message</h2>
          <Field label="Your name *">
            <input required className={inputCls} value={f.name} onChange={set('name')} />
          </Field>
          <Field label="Your email address *">
            <input required type="email" className={inputCls} value={f.email} onChange={set('email')} />
          </Field>
          <Field label="Message *">
            <textarea required rows="5" className={inputCls} value={f.message} onChange={set('message')} />
          </Field>
          <button type="submit" className="rounded-lg bg-brand px-8 py-3 font-semibold text-white hover:brightness-110">
            Send message
          </button>
          <p className="text-sm text-muted">Sending opens your email app with the message filled in.</p>
          {status === 'sent' && (
            <p role="status" className="rounded-lg border border-line bg-surface p-4">
              Your email app should now be open. If nothing opened, email us at {school.email}.
            </p>
          )}
          {status === 'noemail' && (
            <p role="alert" className="rounded-lg border border-line bg-surface p-4">
              The school’s email address has not been added to the site yet. Please try again later.
            </p>
          )}
        </form>
      </section>
    </>
  )
}
