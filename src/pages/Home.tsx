import { Link } from 'react-router'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Marquee from '../components/Marquee'
import { useReveal } from '../hooks/useReveal'

const JOIN_URL = 'https://earplug.dev/'

const audiences = [
  {
    index: '01',
    title: 'Musicians',
    img: '/assets/story-crowdsurf.jpg',
    alt: 'Guitarist performing under blue stage light',
    copy: 'Get discovered. Put your sound in front of the people who are actually looking for it.',
  },
  {
    index: '02',
    title: 'Fans',
    img: '/assets/card3.jpg',
    alt: 'Crowd reaching toward the stage under purple light',
    copy: 'Never miss a night. Know exactly what is happening in your scene, as it happens.',
  },
  {
    index: '03',
    title: 'Venues',
    img: '/assets/story-crowd.jpg',
    alt: 'Band playing a red-lit stage',
    copy: 'Book with confidence. Find reliable, great acts that fit your room and your crowd.',
  },
]

const problems = [
  {
    index: '01',
    img: '/assets/card1.jpg',
    alt: 'Bassist playing inches from the crowd',
    heading: 'Talented local musicians struggle to get discovered.',
    copy: 'Great bands are playing to empty rooms — not because the music is missing, but because the connection is.',
  },
  {
    index: '02',
    img: '/assets/story-drummer.jpg',
    alt: 'Crowd-surfer with a guitar above the audience',
    heading: "Fans have no clue what's happening around them.",
    copy: 'The best night of your month might be happening three blocks away. Right now, you would never know.',
  },
  {
    index: '03',
    img: '/assets/story-bass.jpg',
    alt: 'Band on a small stage under red light trails',
    heading: "Venues don't know where to find reliable, great acts.",
    copy: 'Booking is still word-of-mouth and cold DMs. Rooms deserve a better way to fill their stage.',
  },
]

export default function Home() {
  useReveal()

  const word = 'EARPLUG'.split('')

  return (
    <div className="grain bg-[var(--ep-bg)] text-[var(--ep-ink)]">
      <Nav />

      {/* ============ HERO ============ */}
      <section className="relative flex h-[100svh] flex-col overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/hero.mp4"
          poster="/assets/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-[var(--ep-bg)]" />

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4">
          <h1
            className="font-display select-none text-center text-[19vw] font-bold leading-[0.82] tracking-tight md:text-[17vw]"
            aria-label="EarPlug"
          >
            {word.map((letter, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <span
                  className="hero-letter"
                  style={{ ['--d' as string]: `${150 + i * 70}ms` }}
                  aria-hidden="true"
                >
                  {letter}
                </span>
              </span>
            ))}
          </h1>
          <p
            className="fade-up font-mono2 mt-6 text-xs tracking-[0.35em] text-white/90 md:text-sm"
            style={{ ['--d' as string]: '750ms' }}
          >
            Listen local.
          </p>
        </div>

        <div className="relative z-10 flex items-end justify-between px-5 pb-8 md:px-10">
          <p className="fade-up font-mono2 max-w-[240px] text-[11px] leading-relaxed text-white/70" style={{ ['--d' as string]: '900ms' }}>
            Live music, reconnected — musicians, venues & fans on one platform.
          </p>
          <div className="fade-up flex flex-col items-center gap-2" style={{ ['--d' as string]: '1000ms' }}>
            <span className="font-mono2 text-[10px] text-white/60">Scroll</span>
            <span className="scroll-cue-line block h-12 w-px bg-[var(--ep-accent)]" />
            <ArrowDown className="h-3.5 w-3.5 text-[var(--ep-accent)]" />
          </div>
        </div>
      </section>

      {/* ============ TICKER ============ */}
      <div className="border-y border-[var(--ep-line)] py-5">
        <Marquee
          items={['Live music', 'Local scenes', 'Musicians', 'Venues', 'Fans', 'House shows', 'Late nights']}
          speed={36}
          accentEvery={3}
          className="font-display text-3xl font-semibold md:text-5xl"
        />
      </div>

      {/* ============ STATEMENT ============ */}
      <section className="px-5 py-24 md:px-10 md:py-36">
        <p className="font-mono2 reveal text-[11px] text-[var(--ep-accent)]">What we do</p>
        <h2 className="font-display mt-6 text-[11vw] font-semibold leading-[0.9] md:text-[7.5vw]">
          <span className="reveal block">Connecting local</span>
          <span className="reveal block text-[var(--ep-accent)]" style={{ ['--reveal-delay' as string]: '120ms' }}>
            musicians, venues
          </span>
          <span className="reveal block" style={{ ['--reveal-delay' as string]: '240ms' }}>
            &amp; fans<span className="text-[var(--ep-accent)]">.</span>
          </span>
        </h2>
      </section>

      {/* ============ WHO ARE YOU ============ */}
      <section className="px-5 pb-24 md:px-10 md:pb-36">
        <div className="reveal relative mb-12 overflow-hidden md:mb-16">
          <img
            src="/assets/whoareyou.jpg"
            alt="Backyard show crowd at night"
            className="h-[46vh] w-full object-cover md:h-[60vh]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
            <h2 className="font-display text-6xl font-bold md:text-8xl">Who are you?</h2>
            <p className="max-w-sm self-end text-right text-sm leading-relaxed text-white/85 md:text-base">
              Artist, venue, or fan — EarPlug plugs you straight into your local live music scene.
            </p>
          </div>
        </div>

        <div className="grid gap-px bg-[var(--ep-line)] md:grid-cols-3">
          {audiences.map((a, i) => (
            <article
              key={a.title}
              className="aud-card reveal group relative cursor-pointer bg-[var(--ep-bg)]"
              style={{ ['--reveal-delay' as string]: `${i * 120}ms` }}
            >
              <div className="overflow-hidden">
                <img src={a.img} alt={a.alt} className="aspect-[4/5] w-full object-cover" loading="lazy" />
              </div>
              <div className="px-5 py-7 md:px-6 md:py-8 lg:px-8">
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono2 text-[11px] text-[var(--ep-accent)]">{a.index}</span>
                    <h3 className="font-display text-3xl font-semibold md:text-4xl">{a.title}</h3>
                  </div>
                  <ArrowUpRight className="aud-arrow h-6 w-6" />
                </div>
                <span className="aud-bar mt-4 block h-[2px] w-full bg-[var(--ep-accent)]" />
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--ep-muted)]">{a.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============ STORY ============ */}
      <section className="border-t border-[var(--ep-line)] px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono2 reveal text-[11px] text-[var(--ep-accent)]">Why EarPlug exists</p>
          <p className="reveal mt-6 text-lg leading-relaxed text-white/85 md:text-2xl" style={{ ['--reveal-delay' as string]: '100ms' }}>
            Born from college jam sessions and late-night gigs, EarPlug started with one
            realization — live music is supposed to bring people together.
          </p>
          <p className="font-display reveal mt-8 text-5xl font-bold md:text-7xl" style={{ ['--reveal-delay' as string]: '200ms' }}>
            But it often <span className="text-stroke-accent">doesn&rsquo;t.</span>
          </p>
        </div>

        <div className="mt-24 flex flex-col gap-24 md:mt-36 md:gap-36">
          {problems.map((p, i) => (
            <div
              key={p.index}
              className={`grid items-center gap-8 md:grid-cols-2 md:gap-14 ${
                i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="reveal overflow-hidden">
                <img
                  src={p.img}
                  alt={p.alt}
                  className="story-img aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <span className="font-mono2 reveal text-[11px] text-[var(--ep-accent)]">{p.index}</span>
                <h3
                  className="font-display reveal mt-4 text-4xl font-semibold leading-[0.95] md:text-6xl"
                  style={{ ['--reveal-delay' as string]: '100ms' }}
                >
                  {p.heading}
                </h3>
                <p
                  className="reveal mt-6 max-w-md text-base leading-relaxed text-[var(--ep-muted)]"
                  style={{ ['--reveal-delay' as string]: '200ms' }}
                >
                  {p.copy}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-24 max-w-4xl text-center md:mt-36">
          <p className="reveal text-xl leading-relaxed text-white/90 md:text-3xl md:leading-snug">
            So we built EarPlug to reconnect these communities — one platform that bridges{' '}
            <span className="text-[var(--ep-accent)]">artists</span>,{' '}
            <span className="text-[var(--ep-accent)]">venues</span> and{' '}
            <span className="text-[var(--ep-accent)]">fans</span>, and makes live music accessible
            to everyone.
          </p>
        </div>
      </section>

      {/* ============ SECOND TICKER ============ */}
      <div className="border-y border-[var(--ep-line)] py-4">
        <Marquee
          items={['Stop missing out', 'Get ready for EarPlug']}
          speed={26}
          reverse
          className="font-mono2 text-sm text-[var(--ep-muted)]"
        />
      </div>

      {/* ============ JOIN CTA ============ */}
      <section className="relative overflow-hidden bg-[var(--ep-accent)] px-5 py-28 text-[#0a0a0b] md:px-10 md:py-40">
        <div className="pointer-events-none absolute -right-10 -top-24 select-none opacity-15">
          <span className="font-display text-[40vw] font-bold leading-none text-black">EP</span>
        </div>
        <div className="relative">
          <p className="font-mono2 reveal text-[11px] font-semibold">Stop missing out — get ready for EarPlug</p>
          <h2 className="font-display reveal mt-4 text-[18vw] font-bold leading-[0.85] md:text-[13vw]" style={{ ['--reveal-delay' as string]: '100ms' }}>
            Join us
          </h2>
          <div className="reveal mt-10 flex flex-wrap items-center gap-6" style={{ ['--reveal-delay' as string]: '200ms' }}>
            <a
              href={JOIN_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[#0a0a0b] px-8 py-4 font-mono2 text-xs text-white transition-transform duration-300 hover:scale-[1.04]"
            >
              Join the waitlist
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <Link to="/contact" className="link-line font-mono2 text-xs font-semibold">
              Or talk to us first
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
