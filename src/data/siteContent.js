export const school = {
  name: 'Nechilibi High School',
  announcement: 'Welcome to Nechilibi High School. Apply online for our next intake.',
  logo: '/images/logo.png', // the school logo at public/images/logo.png
  hero: '/images/hero.jpg', // a campus photo at public/images/hero.jpg
  blurb:
    'Nechilibi High School offers O Level and A Level education in a supportive community where every learner is known, challenged and encouraged to succeed.',
  // Sample contact details: replace with the school’s real details
  address: 'Dopota , Hwange, Zimbabwe',
  phone: '+263 00 000 0000',
  email: 'info@nechilibihigh.co.zw',
  hours: 'Monday to Friday, during school hours',
  // Replace each '#' with the school’s real social media page
  social: [
    { label: 'Facebook', short: 'f', href: '#' },
    { label: 'Instagram', short: 'in', href: '#' },
    { label: 'X', short: 'X', href: '#' },
  ],
}

export const hero = {
  headline: 'Preparing students for university, work and life.',
  text: 'A school community committed to academic excellence, good character and service, from Form 1 to Upper 6.',
}

export const stats = [
  { value: 'Forms 1–4', label: 'O Level programme' },
  { value: 'Forms 5–6', label: 'A Level programme' },
  { value: '7:30 AM', label: 'Classes begin' },
  { value: 'Tue & Thu', label: 'Sport afternoons' },
]

export const nav = [
  { label: 'Home', to: '/' },
  {
    label: 'Our School',
    children: [
      { label: 'About Us', to: '/about' },
      { label: 'School Head’s Message', to: '/school-head' },
    ],
  },
  {
    label: 'Academics',
    children: [
      { label: 'Overview', to: '/academics' },
      { label: 'O Level', to: '/academics/o-level' },
      { label: 'A Level', to: '/academics/a-level' },
    ],
  },
  {
    label: 'Student Life',
    children: [
      { label: 'Overview', to: '/student-life' },
      { label: 'Sport', to: '/sport' },
      { label: 'Clubs and Societies', to: '/clubs' },
    ],
  },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Parents', to: '/parents' },
  { label: 'News and Events', to: '/news' },
  { label: 'Contact', to: '/contact' },
]

export const footerExplore = [
  { label: 'About Us', to: '/about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Student Life', to: '/student-life' },
  { label: 'Sport', to: '/sport' },
  { label: 'Clubs and Societies', to: '/clubs' },
]

export const footerQuick = [
  { label: 'Apply now', to: '/admissions/apply' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Parents', to: '/parents' },
  { label: 'News and Events', to: '/news' },
  { label: 'Contact', to: '/contact' },
]

const later = 'More information about this page will be added soon.'

export const pages = [
  { path: '/about', title: 'About Us', text: later },
  { path: '/school-head', title: 'School Head’s Message', text: later },
  { path: '/academics', title: 'Academics', text: later },
  { path: '/academics/o-level', title: 'O Level', text: later },
  { path: '/academics/a-level', title: 'A Level', text: later },
  { path: '/student-life', title: 'Student Life', text: later },
  { path: '/sport', title: 'Sport', text: later },
  { path: '/clubs', title: 'Clubs and Societies', text: later },
  { path: '/admissions', title: 'Admissions', text: later },
  { path: '/admissions/apply', title: 'Apply Online', text: later },
  { path: '/parents', title: 'Parents', text: later },
  { path: '/news', title: 'News and Events', text: later },
  { path: '/contact', title: 'Contact Us', text: later },
  {
    path: '/privacy',
    title: 'Privacy Policy',
    text: 'This website does not use accounts and does not store personal information on its own servers. When you send an application or a message through our forms, your email app opens with the details filled in, and the information reaches the school by email. We use it only to respond to your enquiry or to process your application. If you have questions about how your information is handled, please contact the school office.',
  },
  {
    path: '/terms',
    title: 'Terms of Service',
    text: 'The content on this website is provided for general information about Nechilibi High School and may be updated at any time. Photographs and text belong to the school and may not be reused without permission. Please confirm information about fees, dates and subjects with the school office.',
  },
]

export const applyBanner = {
  title: 'Apply to Nechilibi High School',
  text: 'Join a school community that values learning, character and service. Applying online takes only a few minutes.',
}

export const about = {
  story:
    'Nechilibi High School serves learners from Form 1 to Upper 6, offering O Level and A Level programmes. Our campus brings together classroom blocks, shaded grounds and modern technology, creating a place where learners are known by name and encouraged to grow in knowledge and character.',
  purpose:
    'To provide a quality education that develops capable, confident and responsible young people who contribute to their community and nation.',
  vision:
    'A school community where every learner reaches their full potential and leaves ready for further study, work and life.',
  values: [
    'Integrity and respect in all that we do',
    'Excellence in teaching and learning',
    'Discipline and responsibility',
    'Care for every member of our community',
    'Service to family, community and nation',
    'Curiosity and innovation',
  ],
}

export const schoolHead = {
  name: 'The School Head',
  title: 'School Head',
  photo: '/images/school-head.jpg',
  quote: 'Every learner at Nechilibi has something to offer, and our work is to help them discover it.',
  message: [
    'Welcome to Nechilibi High School. Our teachers and staff work together with families so that every learner is challenged in the classroom and supported outside it.',
    'We expect hard work, honesty and respect from our learners, and we give them the guidance, facilities and opportunities to succeed in their examinations and beyond.',
    'I invite you to explore our website, and to visit the school to see our learners at work.',
  ],
}

export const programmes = [
  {
    title: 'O Level',
    level: 'Forms 1 to 4',
    text: 'Four years that build strong foundations and prepare students for their O Level examinations.',
    to: '/academics/o-level',
  },
  {
    title: 'A Level',
    level: 'Lower 6 and Upper 6',
    text: 'Advanced study that prepares students for A Level examinations, university and work.',
    to: '/academics/a-level',
  },
  {
    title: 'Learning with technology',
    text: 'Students use tablets and small programmable robots to practise coding and problem solving.',
    to: '/student-life',
  },
]

export const tiles = [
  { label: 'Learning with technology', to: '/student-life', photo: '/images/students-tech.jpg' },
  { label: 'Sport', to: '/sport', photo: '/images/sport.jpg' },
  { label: 'Clubs and societies', to: '/clubs', photo: '/images/clubs.jpg' },
  { label: 'Our campus', to: '/student-life', photo: '/images/campus-entrance.jpg' },
]

export const news = [
  {
    date: '2026-11-20',
    category: 'News',
    title: 'Welcome to our new website',
    text: 'Explore our programmes, see the school day, and apply online from any device.',
  },
  {
    date: '2026-11-27',
    category: 'Event',
    title: 'Open day for new families',
    text: 'Prospective learners and their families are invited to visit the campus and meet our teachers.',
  },
  {
    date: '2026-12-04',
    category: 'News',
    title: 'Learning with technology',
    text: 'Our learners are building coding and problem-solving skills with tablets and programmable robots.',
  },
]

export const events = [
  { date: '2026-11-27', title: 'Open day for new families', where: 'School main hall' },
  { date: '2026-12-02', title: 'Sports afternoon', where: 'School sports field' },
  { date: '2026-12-09', title: 'End-of-term assembly', where: 'School main hall' },
  { date: '2026-12-16', title: 'Term ends', where: 'Whole school' },
]

export const academics = {
  intro:
    'From Form 1 to Upper 6, our programmes prepare learners for O Level and A Level examinations and for the next stage of their lives.',
}

export const levels = {
  '/academics/o-level': {
    intro: 'A four-year programme that builds strong foundations across sciences, languages, humanities and practical subjects.',
    facts: [
      { label: 'Duration', value: 'Forms 1 to 4 (four years)' },
      { label: 'Entry', value: 'Completion of primary school' },
      { label: 'Examinations', value: 'O Level examinations at the end of Form 4' },
    ],
    subjects: [
      { group: 'Sciences and mathematics', items: ['Mathematics', 'Combined Science', 'Biology, Chemistry and Physics'] },
      { group: 'Languages', items: ['English Language', 'Shona or Ndebele', 'Literature in English'] },
      { group: 'Humanities', items: ['History', 'Geography', 'Religious Studies'] },
      { group: 'Commercial and practical', items: ['Principles of Accounts', 'Business Studies', 'Computer Science'] },
    ],
  },
  '/academics/a-level': {
    intro: 'A two-year programme of advanced study that prepares learners for university, college and work.',
    facts: [
      { label: 'Duration', value: 'Lower 6 and Upper 6 (two years)' },
      { label: 'Entry', value: 'Good O Level passes in the subjects chosen' },
      { label: 'Examinations', value: 'A Level examinations at the end of Upper 6' },
    ],
    subjects: [
      { group: 'Sciences and mathematics', items: ['Pure Mathematics', 'Biology', 'Chemistry and Physics'] },
      { group: 'Languages', items: ['English Literature', 'Shona or Ndebele', 'Communication skills'] },
      { group: 'Humanities', items: ['History', 'Geography', 'Divinity'] },
      { group: 'Commercial and practical', items: ['Accounting', 'Business Studies', 'Computer Science'] },
    ],
  },
}

export const studentLife = {
  intro: 'Learning continues beyond the classroom through sport, clubs, technology and a campus that supports every learner.',
  technology: 'Students use tablets and small programmable robots to practise coding and problem solving.',
}

export const activities = {
  '/sport': {
    intro: 'Sport builds fitness, teamwork and character. Learners take part in practice sessions on Tuesday and Thursday afternoons.',
    items: [
      { name: 'Football', note: 'Practice sessions on Tuesday and Thursday afternoons.' },
      { name: 'Netball', note: 'Practice sessions on Tuesday and Thursday afternoons.' },
      { name: 'Athletics', note: 'Track and field training through the year.' },
      { name: 'Volleyball', note: 'Practice sessions on Tuesday and Thursday afternoons.' },
      { name: 'Basketball', note: 'Practice sessions on Tuesday and Thursday afternoons.' },
      { name: 'Cross country', note: 'Endurance training for all fitness levels.' },
    ],
  },
  '/clubs': {
    intro: 'Clubs and societies give learners the chance to explore their interests and develop new skills.',
    items: [
      { name: 'Computer and robotics club', note: 'Coding and problem solving with tablets and robots.' },
      { name: 'Debate and public speaking', note: 'Building confidence and clear thinking.' },
      { name: 'Music and choir', note: 'Singing and instruments for all forms.' },
      { name: 'Drama', note: 'Acting, writing and performance.' },
      { name: 'Environment club', note: 'Caring for our campus and community.' },
      { name: 'Science and quiz club', note: 'Experiments, puzzles and friendly competition.' },
    ],
  },
}

const morning = [
  { name: 'First session', start: '07:30', end: '10:00' },
  { name: 'Break', start: '10:00', end: '10:30' },
  { name: 'Second session', start: '10:30', end: '13:00' },
  { name: 'Lunch', start: '13:00', end: '14:00' },
]

export function bellsFor(day) {
  if (day === 5) return morning
  if (day === 2 || day === 4) return [...morning, { name: 'Sport', start: '14:00', end: '16:00' }]
  return [...morning, { name: 'Afternoon classes', start: '14:00', end: '16:00' }]
}

export const admissions = {
  intro:
    'We welcome applications for Form 1 and for other forms where places are available. Follow the steps below to apply.',
  steps: [
    { title: 'Complete the application', text: 'Fill in the online application form with the learner’s and the parent or guardian’s details.' },
    { title: 'Prepare your documents', text: 'Gather the documents listed on this page and have them ready for the school office.' },
    { title: 'Meet the school', text: 'The school will invite you to visit the campus and meet the staff.' },
    { title: 'Receive your decision', text: 'The school will contact you with the outcome of the application and the next steps.' },
  ],
  requirements: [
    'Copy of the learner’s birth certificate',
    'Latest school report or examination results',
    'Transfer letter from the previous school, where applicable',
    'Recent passport-size photograph of the learner',
  ],
  keyDates: [
    { label: 'Applications', value: 'Contact the school office for current intake dates' },
    { label: 'School fees', value: 'Available from the school office on request' },
    { label: 'Enquiries', value: 'Use the contact form on this website' },
  ],
}

export const applyLevels = ['Form 1', 'Form 2', 'Form 3', 'Form 4', 'Lower 6']

export const parents = {
  intro:
    'Everything families need for the school year: the daily timetable, term dates, and how to reach the school.',
  terms: [
    { term: 'Term 1', dates: 'January to April' },
    { term: 'Term 2', dates: 'May to August' },
    { term: 'Term 3', dates: 'September to December' },
  ],
  info: [
    {
      title: 'School fees',
      text: 'Fees are paid through the school office. Please contact the office for the current fees structure and payment options.',
    },
    {
      title: 'Uniform',
      text: 'Learners wear the purple school uniform. Details of the uniform are available from the school office.',
    },
    {
      title: 'Contacting the school',
      text: 'Parents and guardians can contact the school office on school days, or use the contact form on this website.',
    },
  ],
}