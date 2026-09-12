import { ArrowUp, ArrowUpRight } from 'lucide-react'

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/earplugapp/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@earplugapp' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/109913078/' },
]

export default function Footer() {
  const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-[var(--ep-line)]">
      {/* team strip */}
      <div className="grid gap-10 px-5 py-16 md:grid-cols-2 md:px-10 md:py-24">
        <div className="reveal overflow-hidden">
          <img
            src="/assets/team.jpg"
            alt="The EarPlug team backstage with guitars"
            className="aspect-[4/3] w-full object-cover transition-all duration-700 hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-mono2 reveal text-[11px] text-[var(--ep-accent)]" style={{ ['--reveal-delay' as string]: '80ms' }}>
            The crew
          </p>
          <h3 className="font-display reveal mt-4 text-4xl font-semibold md:text-6xl" style={{ ['--reveal-delay' as string]: '160ms' }}>
            Reconnect. Turn it up. Make live music unforgettable again.
          </h3>
          <div className="reveal mt-8 flex flex-wrap gap-x-8 gap-y-3" style={{ ['--reveal-delay' as string]: '240ms' }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group font-mono2 flex items-center gap-1.5 text-xs text-[var(--ep-muted)] transition-colors hover:text-[var(--ep-ink)]"
              >
                {s.label}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--ep-accent)]" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* giant outline wordmark */}
      <div className="overflow-hidden px-2">
        <div className="font-display text-stroke select-none text-center text-[18.5vw] font-bold normal-case leading-[0.8] tracking-tight pb-[0.16em] transition-colors duration-700 hover:text-[var(--ep-accent)] hover:[-webkit-text-stroke:0px]">
          EarPlug
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-[var(--ep-line)] px-5 py-5 md:px-10">
        <span className="font-mono2 text-[11px] text-[var(--ep-muted)]">@earplugapp</span>
        <button
          onClick={backToTop}
          className="group font-mono2 flex items-center gap-2 text-[11px] text-[var(--ep-muted)] transition-colors hover:text-[var(--ep-ink)]"
        >
          Back to top
          <span className="rounded-full border border-white/20 p-1.5 transition-colors group-hover:border-[var(--ep-accent)] group-hover:bg-[var(--ep-accent)] group-hover:text-black">
            <ArrowUp className="h-3 w-3" />
          </span>
        </button>
      </div>
    </footer>
  )
}
