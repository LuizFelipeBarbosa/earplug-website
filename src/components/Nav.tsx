import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const JOIN_URL = 'https://earplug.app/'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent" />
        <nav className="relative flex items-center justify-between px-5 py-4 md:px-10 md:py-6">
          <Link to="/" className="flex items-center" aria-label="EarPlug home">
            <img
              src="/assets/logo-white.png"
              alt="EarPlug"
              className="h-8 w-auto object-contain transition-opacity duration-300 hover:opacity-80 md:h-9"
            />
          </Link>

          <div className="flex items-center gap-2.5 md:gap-3">
            <a
              href={JOIN_URL}
              target="_blank"
              rel="noreferrer"
              className="font-mono2 rounded-full border border-white/30 px-4 py-2 text-[11px] transition-colors duration-300 hover:border-[var(--ep-accent)] hover:bg-[var(--ep-accent)] hover:text-black md:px-5 md:text-xs"
            >
              Open the app
            </a>
            <Link
              to="/contact"
              className="font-mono2 hidden rounded-full border border-white/30 px-5 py-2 text-xs transition-colors duration-300 hover:border-white hover:bg-white hover:text-black sm:block"
            >
              Contact us
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="rounded-full border border-white/30 p-2.5 transition-colors duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </header>

      {/* full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-[#0a0a0b] transition-[clip-path] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? '[clip-path:inset(0_0_0%_0)]' : 'pointer-events-none [clip-path:inset(0_0_100%_0)]'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 md:px-10 md:py-6">
          <span className="font-mono2 text-xs text-[var(--ep-muted)]">Menu</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="rounded-full border border-white/30 p-2.5 transition-colors duration-300 hover:border-[var(--ep-accent)] hover:bg-[var(--ep-accent)] hover:text-black"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-center px-5 md:px-10">
          {[
            { label: 'Home', to: '/', index: '01' },
            { label: 'Contact', to: '/contact', index: '02' },
          ].map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className="group flex items-baseline gap-4 border-b border-[var(--ep-line)] py-4 md:py-6"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="font-mono2 text-xs text-[var(--ep-accent)]">{item.index}</span>
              <span className="font-display text-6xl font-semibold transition-all duration-500 group-hover:translate-x-3 group-hover:text-[var(--ep-accent)] md:text-8xl">
                {item.label}
              </span>
              <ArrowUpRight className="ml-auto h-8 w-8 opacity-0 transition-all duration-500 group-hover:opacity-100 md:h-12 md:w-12" />
            </Link>
          ))}
          <a
            href={JOIN_URL}
            target="_blank"
            rel="noreferrer"
            className="group flex items-baseline gap-4 border-b border-[var(--ep-line)] py-4 md:py-6"
          >
            <span className="font-mono2 text-xs text-[var(--ep-accent)]">03</span>
            <span className="font-display text-6xl font-semibold transition-all duration-500 group-hover:translate-x-3 group-hover:text-[var(--ep-accent)] md:text-8xl">
              Open the app
            </span>
            <ArrowUpRight className="ml-auto h-8 w-8 opacity-0 transition-all duration-500 group-hover:opacity-100 md:h-12 md:w-12" />
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 px-5 pb-8 md:px-10">
          <span className="font-mono2 text-[11px] text-[var(--ep-muted)]">Listen local.</span>
          <a className="font-mono2 link-line text-[11px]" href="https://www.instagram.com/earplugapp/" target="_blank" rel="noreferrer">Instagram</a>
          <a className="font-mono2 link-line text-[11px]" href="https://www.tiktok.com/@earplugapp" target="_blank" rel="noreferrer">TikTok</a>
          <a className="font-mono2 link-line text-[11px]" href="https://www.linkedin.com/company/109913078/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </>
  )
}
