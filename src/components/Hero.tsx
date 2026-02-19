export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1A0A2E 0%, #2D1B4E 20%, #C2185B 45%, #1E88E5 70%, #00897B 85%, #1A0A2E 100%)',
        backgroundSize: '300% 300%',
      }}
    >
      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 animate-gradient-flow"
        style={{
          background: 'linear-gradient(135deg, #1A0A2E 0%, #2D1B4E 20%, #C2185B 45%, #1E88E5 70%, #00897B 85%, #1A0A2E 100%)',
          backgroundSize: '300% 300%',
        }}
        aria-hidden="true"
      />

      {/* Noise / texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-24 animate-fade-in">
        {/* Photo */}
        <div className="relative mb-8">
          <div
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden animate-pulse-glow border-4 border-white/20"
            style={{ borderRadius: '50%' }}
          >
            <img
              src="/images/IMG_5430.PNG"
              alt="Luke Edington smiling"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-3 drop-shadow-lg">
          Luke Hawkins Edington
        </h1>

        {/* Dates */}
        <p className="font-handwritten text-2xl sm:text-3xl text-[#FFB300] mb-6 tracking-wide">
          September 14, 1995 &ndash; February 7, 2026
        </p>

        {/* Tagline */}
        <p className="max-w-xl text-white/80 text-lg sm:text-xl leading-relaxed font-light">
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
