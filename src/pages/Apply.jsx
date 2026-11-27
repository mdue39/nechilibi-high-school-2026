import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Field from '../components/Field'
import { school, applyLevels } from '../data/siteContent'
import { inputCls, mailtoHref } from '../lib/form'

const empty = {
  firstName: '',
  surname: '',
  dob: '',
  level: applyLevels[0],
  prevSchool: '',
  parentName: '',
  relation: '',
  phone: '',
  email: '',
  address: '',
  notes: '',
}

export default function Apply({ page }) {
  const [f, setF] = useState(empty)
  const [status, setStatus] = useState('idle')
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
   if (school.email.endsWith('.example')) {
      setStatus('noemail')
      return
    }
    const lines = [
      `Learner: ${f.firstName} ${f.surname}`,
      `Date of birth: ${f.dob}`,
      `Applying for: ${f.level}`,
      `Previous school: ${f.prevSchool}`,
      '',
      `Parent or guardian: ${f.parentName} (${f.relation})`,
      `Phone: ${f.phone}`,
      `Email: ${f.email}`,
      `Address: ${f.address}`,
      '',
      `Notes: ${f.notes}`,
    ]
    window.location.href = mailtoHref(school.email, `Application for ${f.level}: ${f.firstName} ${f.surname}`, lines)
    setStatus('sent')
  }

  return (
    <>
      <PageHeader title={page.title} intro="Fill in the form below. Fields marked with * are required." />

      <section className="mx-auto max-w-3xl px-5 py-14">
        <form onSubmit={submit} className="space-y-10">
          <fieldset className="space-y-4">
            <legend className="font-serif text-2xl font-semibold">Learner details</legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="First name *">
                <input required className={inputCls} value={f.firstName} onChange={set('firstName')} />
              </Field>
              <Field label="Surname *">
                <input required className={inputCls} value={f.surname} onChange={set('surname')} />
              </Field>
              <Field label="Date of birth *">
                <input required type="date" className={inputCls} value={f.dob} onChange={set('dob')} />
              </Field>
              <Field label="Applying for *">
                <select required className={inputCls} value={f.level} onChange={set('level')}>
                  {applyLevels.map((l) => (
                    <option key={l}>{l}</option>
                  ))}
                </select>
              </Field>
            </div>
            <Field label="Previous school">
              <input className={inputCls} value={f.prevSchool} onChange={set('prevSchool')} />
            </Field>
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="font-serif text-2xl font-semibold">Parent or guardian</legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name *">
                <input required className={inputCls} value={f.parentName} onChange={set('parentName')} />
              </Field>
              <Field label="Relationship to learner *">
                <input required className={inputCls} value={f.relation} onChange={set('relation')} />
              </Field>
              <Field label="Phone number *">
                <input required type="tel" className={inputCls} value={f.phone} onChange={set('phone')} />
              </Field>
              <Field label="Email address">
                <input type="email" className={inputCls} value={f.email} onChange={set('email')} />
              </Field>
            </div>
            <Field label="Home address *">
              <input required className={inputCls} value={f.address} onChange={set('address')} />
            </Field>
            <Field label="Anything else the school should know">
              <textarea rows="4" className={inputCls} value={f.notes} onChange={set('notes')} />
            </Field>
          </fieldset>

          <div>
            <button type="submit" className="rounded-lg bg-brand px-8 py-3 font-semibold text-white hover:brightness-110">
              Submit application
            </button>
            <p className="mt-3 text-sm text-muted">
              Submitting opens your email app with the application filled in. Press send in your email app to complete it.
            </p>
            {status === 'sent' && (
              <p role="status" className="mt-4 rounded-lg border border-line bg-surface p-4">
                Your email app should now be open. If nothing opened, email the school at {school.email}.
              </p>
            )}
            {status === 'noemail' && (
              <p role="alert" className="mt-4 rounded-lg border border-line bg-surface p-4">
                The school’s email address has not been added to the site yet. Please try again later.
              </p>
            )}
          </div>
        </form>
      </section>
    </>
  )
}