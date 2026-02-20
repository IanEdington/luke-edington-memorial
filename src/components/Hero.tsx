export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Base tie-dye layer — static radial gradients */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, #C2185B 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, #1E88E5 0%, transparent 50%),
            radial-gradient(ellipse at 40% 70%, #00897B 0%, transparent 50%),
            radial-gradient(ellipse at 90% 80%, #E65100 0%, transparent 50%),
            radial-gradient(ellipse at 10% 90%, #2D1B4E 0%, transparent 50%),
            radial-gradient(ellipse at 60% 50%, #FFB300 0%, transparent 40%),
            #1A0A2E
          `,
        }}
        aria-hidden="true"
      />

      {/* Animated overlay layer 1 — larger slow movement */}
      <div
        className="absolute opacity-70 animate-tie-dye-slow"
        style={{
          top: '-15%',
          bottom: '-15%',
          left: '-30%',
          right: '-30%',
          background: `
            radial-gradient(circle at 30% 40%, #E991B0 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, #00897B 0%, transparent 50%),
            radial-gradient(circle at 50% 80%, #1E88E5 0%, transparent 50%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Animated overlay layer 2 — smaller faster movement */}
      <div
        className="absolute opacity-50 animate-tie-dye-fast"
        style={{
          top: '-15%',
          bottom: '-15%',
          left: '-30%',
          right: '-30%',
          background: `
            radial-gradient(circle at 15% 60%, #C2185B 0%, transparent 40%),
            radial-gradient(circle at 85% 50%, #FFB300 0%, transparent 40%),
            radial-gradient(circle at 40% 20%, #E65100 0%, transparent 35%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Heavy noise texture overlay for psychedelic grain */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '150px 150px',
        }}
        aria-hidden="true"
      />

      {/* Additional organic texture layer — swirling patterns */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-soft-light pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='swirl' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M20,50 Q30,20 50,30 T80,50 Q70,80 50,70 T20,50' fill='none' stroke='%23fff' stroke-width='0.5' opacity='0.3'/%3E%3Cpath d='M10,30 Q25,10 40,20 T70,40' fill='none' stroke='%23fff' stroke-width='0.3' opacity='0.2'/%3E%3Ccircle cx='30' cy='70' r='3' fill='%23fff' opacity='0.15'/%3E%3Ccircle cx='70' cy='20' r='2' fill='%23fff' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23swirl)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '100px 100px',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-24 animate-fade-in" style={{ transform: 'translateY(-15%)' }}>
        {/* Photo */}
        <div className="relative mb-8">
          <div
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden animate-pulse-glow border-4 border-white/20"
            style={{ borderRadius: '50%' }}
          >
            <img
              src="/images/IMG_5430_cropped.PNG"
              alt="Luke Edington smiling"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-3" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)' }}>
          Luke Hawkins Edington
        </h1>

        {/* Dates */}
        <p className="font-handwritten text-2xl sm:text-3xl text-[#FFB300] mb-6 tracking-wide" style={{ textShadow: '0 3px 8px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.6)' }}>
          September 14, 1995 &ndash; February 7, 2026
        </p>

        {/* Tagline */}
        <p className="max-w-xl text-white/80 text-lg sm:text-xl leading-relaxed font-light" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.6)' }}>
          A gentle soul who radiated love, kindness, and acceptance.
          <br />
          A musician. A warrior. Free at last.
        </p>

        {/* Scroll cue */}
        <a
          href="#obituary"
          className="mt-14 flex flex-col items-center gap-2 text-white/50 hover:text-[#FFB300] transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs font-body tracking-widest uppercase">His Story</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
