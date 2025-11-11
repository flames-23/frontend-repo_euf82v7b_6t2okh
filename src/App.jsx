import React from 'react'

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/75">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <a href="#" className="flex items-center space-x-2 text-white">
            <span className="text-lg font-semibold tracking-tight">CampusConnect</span>
          </a>

          {/* Center: Navigation */}
          <nav aria-label="Primary" className="hidden md:flex items-center gap-6 text-sm">
            {['Events','Mentors','Members','Societies','About Us','Contact Us'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-zinc-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right: Auth Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-400 active:bg-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
            >
              Sign Up
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-zinc-800/60 active:bg-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:ring-offset-2 focus:ring-offset-zinc-900"
            >
              Log In
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative isolate pt-28 sm:pt-32 md:pt-36 lg:pt-40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-zinc-900/60 ring-1 ring-white/10 p-8 sm:p-12 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Your Campus, Connected.
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg text-zinc-300">
            “The ultimate platform uniting students, mentors, and societies to help you connect and thrive in a vibrant campus ecosystem.”
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-400 active:bg-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-900">
              I’m a Student
            </a>
            <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-zinc-800 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-700 active:bg-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:ring-offset-2 focus:ring-offset-zinc-900">
              I’m a Mentor
            </a>
            <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-zinc-800 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-700 active:bg-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:ring-offset-2 focus:ring-offset-zinc-900">
              I’m a Society Head
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      title: 'Create Your Account',
      desc: 'Sign up in minutes and build your profile to showcase your skills and interests.',
    },
    {
      title: 'Explore & Discover',
      desc: 'Browse upcoming events, find mentors in your field, or discover societies that match your passions.',
    },
    {
      title: 'Connect & Grow',
      desc: 'Join events, connect with mentors, and start building your network for academic and professional success.',
    },
  ]

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">How It Works</h2>
          <p className="mt-3 text-zinc-300 max-w-3xl mx-auto">
            Getting started with CampusConnect is simple. Follow these steps to join our community.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-3">
          {steps.map((s, idx) => (
            <div key={s.title} className="rounded-xl bg-zinc-900/50 ring-1 ring-white/10 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white font-semibold">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    {
      title: 'Event Management',
      desc: 'Effortlessly discover, create, and manage campus events, from society meetups to academic workshops.',
    },
    {
      title: 'Find a Mentor',
      desc: 'Connect with experienced mentors for guidance, or share your knowledge and guide fellow students on their journey.',
    },
    {
      title: 'Academic Networking',
      desc: 'Collaborate with peers and faculty on academic projects, and build your professional network before you graduate.',
    },
    {
      title: 'Society Engagement',
      desc: 'Join and lead societies, manage members, and promote initiatives to the wider university community.',
    },
  ]

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Unlock Your University Potential</h2>
          <p className="mt-3 text-zinc-300 max-w-3xl mx-auto">
            Discover the tools you need to succeed. CampusConnect offers a suite of features designed to enhance your academic and social life.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:gap-8 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl bg-zinc-900/50 ring-1 ring-white/10 p-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 h-9 w-9 shrink-0 rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/30 flex items-center justify-center">
                  <span className="text-emerald-400 font-bold">★</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to Join the Community?</h2>
        <p className="mt-3 text-zinc-300">Sign up today and start building connections that matter.</p>
        <div className="mt-8">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-400 active:bg-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
          >
            Get Started for Free
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-zinc-400">© 2024 CampusConnect. All rights reserved.</p>
        <div className="mt-3 flex items-center justify-center gap-4 text-sm">
          {['Privacy Policy','Terms of Service','Contact Us'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-zinc-300 hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#0D0D0D_0%,#111111_50%,#1A1A1A_100%)] text-zinc-100">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
