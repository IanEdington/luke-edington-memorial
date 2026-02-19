export default function EventBanner() {
  return (
    <section
      id="event"
      className="relative pt-16 pb-32 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #2D1B4E 0%, #C2185B 55%, #E65100 85%, #1A0A2E 100%)',
      }}
    >
      {/* Decorative circles */}
      <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-3xl mx-auto text-center fade-section">
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
          Please bring your instruments and come ready to jam!
        </p>
      </div>
    </section>
  )
}
