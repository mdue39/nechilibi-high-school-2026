import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Photo from '../components/Photo'
import SectionHeading from '../components/SectionHeading'
import ApplyBanner from '../components/ApplyBanner'
import { studentLife } from '../data/siteContent'

export default function StudentLife({ page }) {
  return (
    <>
      <PageHeader title={page.title} intro={studentLife.intro} />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <SectionHeading title="Our campus" text="Tree-lined paths lead past the classroom blocks to the main entrance." />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Photo src="/images/campus-entrance.jpg" alt="The entrance arch reading Nechilibi High, beside a tree-lined path" className="aspect-[4/3] w-full rounded-xl" />
          <Photo src="/images/campus-block.jpg" alt="A classroom block with green window frames and a tiled walkway" className="aspect-[4/3] w-full rounded-xl" />
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <SectionHeading title="Learning with technology" text={studentLife.technology} />
          <div className="mt-8 grid gap-4 md:grid-cols-[1.6fr_1fr]">
            <Photo src="/images/students-class.jpg" alt="Students in purple uniforms line up with tablets to control small robots on the floor" className="h-72 w-full rounded-xl md:h-[380px]" />
            <Photo src="/images/students-tech.jpg" alt="Two students programming a robot from tablets at a work table" className="h-72 w-full rounded-xl object-top md:h-[380px]" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <SectionHeading title="Beyond the classroom" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Link to="/sport" className="group rounded-xl border border-line bg-surface p-8 transition-shadow hover:shadow-md">
            <h3 className="font-serif text-2xl font-semibold">Sport</h3>
            <p className="mt-2 text-muted">See the sports the school offers.</p>
            <span className="mt-4 inline-block font-semibold underline-offset-4 group-hover:underline">View sport</span>
          </Link>
          <Link to="/clubs" className="group rounded-xl border border-line bg-surface p-8 transition-shadow hover:shadow-md">
            <h3 className="font-serif text-2xl font-semibold">Clubs and societies</h3>
            <p className="mt-2 text-muted">Find a club that suits your interests.</p>
            <span className="mt-4 inline-block font-semibold underline-offset-4 group-hover:underline">View clubs</span>
          </Link>
        </div>
      </section>

      <ApplyBanner />
    </>
  )
}