import { ArrowUpRight } from 'lucide-react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Marquee from '../components/Marquee'
import { useReveal } from '../hooks/useReveal'

const channels = [
  {
    index: '01',
    label: 'Email',
    value: 'hello@earplug.app',
    href: 'mailto:hello@earplug.app',
  },
  {
    index: '02',
    label: 'Instagram',
    value: '@earplugapp',
    href: 'https://www.instagram.com/earplugapp/',
  },
  {
    index: '03',
    label: 'TikTok',
    value: '@earplugapp',
    href: 'https://www.tiktok.com/@earplugapp',
  },
  {
    index: '04',
    label: 'LinkedIn',
    value: 'EarPlug',
    href: 'https://www.linkedin.com/company/109913078/',
  },
]

export default function Contact() {
  useReveal()

  return (
    <div className="grain bg-[var(--ep-bg)] text-[var(--ep-ink)]">
      <Nav />

      {/* header */}
      <section className="relative flex min-h-[70svh] flex-col justify-end overflow-hidden px-5 pb-12 pt-32 md:px-10 md:pb-16">
        <img
          src="/assets/card2.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ep-bg)]/60 via-transparent to-[var(--ep-bg)]" />
        <div className="relative">
          <p className="font-mono2 fade-up text-[11px] text-[var(--ep-accent)]" style={{ ['--d' as string]: '200ms' }}>
            Want to get involved?
          </p>
          <h1 className="font-display mt-4 text-[16vw] font-bold leading-[0.85] md:text-[11vw]">
            {'CONTACT'.split('').map((letter, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <span className="hero-letter" style={{ ['--d' as string]: `${250 + i * 60}ms` }} aria-hidden="true">
                  {letter}
                </span>
              </span>
            ))}{' '}
            <span className="inline-block overflow-hidden align-bottom">
              <span className="hero-letter text-[var(--ep-accent)]" style={{ ['--d' as string]: '700ms' }} aria-hidden="true">
                US
              </span>
            </span>
          </h1>
          <p className="fade-up mt-6 max-w-md text-base leading-relaxed text-[var(--ep-muted)]" style={{ ['--d' as string]: '850ms' }}>
            Booking a show, joining the team, partnering up, or just want to talk music? Send us a
            message via:
          </p>
        </div>
      </section>

      {/* channels */}
      <section className="border-t border-[var(--ep-line)]">
        {channels.map((c, i) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            className="channel-row reveal group flex items-center justify-between gap-4 border-b border-[var(--ep-line)] px-5 py-8 md:px-10 md:py-12"
            style={{ ['--reveal-delay' as string]: `${i * 80}ms` }}
          >
            <div className="flex items-baseline gap-4 md:gap-8">
              <span className="font-mono2 text-[11px] text-[var(--ep-accent)] transition-colors group-hover:text-black">
                {c.index}
              </span>
              <span className="font-display text-5xl font-semibold md:text-8xl">{c.label}</span>
            </div>
            <div className="flex items-center gap-4 md:gap-8">
              <span className="font-mono2 hidden text-xs text-[var(--ep-muted)] transition-colors group-hover:text-black sm:block">
                {c.value}
              </span>
              <ArrowUpRight className="channel-arrow h-8 w-8 md:h-12 md:w-12" />
            </div>
          </a>
        ))}
      </section>

      <div className="py-6">
        <Marquee
          items={['Say hi', 'Book a show', 'Join the scene', 'Listen local']}
          speed={30}
          accentEvery={2}
          className="font-display text-2xl font-semibold text-[var(--ep-muted)] md:text-4xl"
        />
      </div>

      <Footer />
    </div>
  )
}
