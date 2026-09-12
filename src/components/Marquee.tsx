import type { ReactNode } from 'react'

interface MarqueeProps {
  items: ReactNode[]
  reverse?: boolean
  speed?: number
  className?: string
  accentEvery?: number
}

/** Infinite horizontal ticker. Content is duplicated for a seamless loop. */
export default function Marquee({
  items,
  reverse = false,
  speed = 32,
  className = '',
  accentEvery = 0,
}: MarqueeProps) {
  const row = (
    <>
      {items.map((item, i) => (
        <span key={i} className="flex items-center shrink-0">
          <span
            className={
              accentEvery > 0 && i % accentEvery === accentEvery - 1
                ? 'text-[var(--ep-accent)]'
                : undefined
            }
          >
            {item}
          </span>
          <span className="mx-6 md:mx-10 inline-block h-[0.5em] w-[0.5em] rounded-full bg-[var(--ep-accent)]" />
        </span>
      ))}
    </>
  )

  return (
    <div className={`marquee overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className={`marquee-track ${reverse ? 'reverse' : ''}`}
        style={{ ['--speed' as string]: `${speed}s` }}
      >
        <div className="flex shrink-0 items-center">{row}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {row}
        </div>
      </div>
    </div>
  )
}
