export default function EventBanner() {
  return (
    <section
      id="event"
      className="relative pb-40 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #2D1B4E 0%, #C2185B 55%, #E65100 85%, #1A0A2E 100%)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-25px',
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

      <div className="relative max-w-3xl mx-auto text-center fade-section pt-28">
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

        <div className="mt-8">
          <a
            href="https://www.youtube.com/playlist?list=PLQrgBvQAvNjh5EQ5fVFI2pCGlmHpQb6FU"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FFB300] text-[#1A0A2E] font-bold text-lg px-8 py-3 rounded-full hover:bg-yellow-300 transition-colors"
          >
            Watch the Recording
          </a>
        </div>
      </div>
    </section>
  )
}
