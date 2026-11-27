import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import SchoolHead from './pages/SchoolHead'
import Academics from './pages/Academics'
import Level from './pages/Level'
import StudentLife from './pages/StudentLife'
import ActivityPage from './pages/ActivityPage'
import Admissions from './pages/Admissions'
import Apply from './pages/Apply'
import Parents from './pages/Parents'
import News from './pages/News'
import Contact from './pages/Contact'
import PlainPage from './pages/PlainPage'
import NotFound from './pages/NotFound'
import { pages } from './data/siteContent'

// Pages that have their own design. Privacy and Terms still use the simple page.
const custom = {
  '/about': About,
  '/school-head': SchoolHead,
  '/academics': Academics,
  '/academics/o-level': Level,
  '/academics/a-level': Level,
  '/student-life': StudentLife,
  '/sport': ActivityPage,
  '/clubs': ActivityPage,
  '/admissions': Admissions,
  '/admissions/apply': Apply,
  '/parents': Parents,
  '/news': News,
  '/contact': Contact,
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        {pages.map((p) => {
          const Page = custom[p.path] || PlainPage
          return <Route key={p.path} path={p.path} element={<Page page={p} />} />
        })}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}