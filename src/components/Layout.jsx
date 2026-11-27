import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import { school } from '../data/siteContent'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-bg text-ink">
      <ScrollToTop />
      <div className="bg-gold px-4 py-2 text-center text-sm font-medium text-[#2E0F47]">{school.announcement}</div>
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}