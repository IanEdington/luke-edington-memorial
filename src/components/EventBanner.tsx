export default function EventBanner() {
  return (
    <section
      id="event"
      className="relative pb-32 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #2D1B4E 0%, #C2185B 55%, #E65100 85%, #1A0A2E 100%)',
      }}
    >
      {/* Wave at top — cuts into cream from Obituary with deep-purple */}
      <div
        style={{
          position: 'absolute',
          top: '-1px',
          left: 0,
          right: 0,
          overflow: 'hidden',
          lineHeight: 0,
          transform: 'rotate(180deg)',
          pointerEvents: 'none',
          zIndex: 5,
        }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          style={{
            display: 'block',
            width: '100%',
            height: '80px',
            transform: 'scaleX(-1)',
          }}
        >
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FFF8E1" />
        </svg>
      </div>

      {/* Decorative circles */}
      <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-3xl mx-auto text-center fade-section pt-20">
        {/* Icon */}
        <div className="text-5xl mb-4" aria-hidden="true">♪</div>

        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
          Celebration of Life
        </h2>

        <div className="w-16 h-1 bg-[#FFB300] mx-auto rounded mb-6" aria-hidden="true" />

        <div className="space-y-2 text-white/90 text-xl font-body mb-6">
          <p className="font-semibold text-[#FFB300] text-2xl">March 7, 2026 at 11:00 AM</p>
          <p>Hope Community Church</p>
          <p>Hanover, Ontario</p>
        </div>

        <p className="text-white/80 text-base max-w-lg mx-auto leading-relaxed mb-2">
          Lunch and music to follow.
        </p>
        <p className="font-handwritten text-xl text-[#FFB300] tracking-wide">
          Please bring your instruments and come ready to jam!!
        </p>
      </div>
    </section>
  )
}
