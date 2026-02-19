import { useState, useEffect } from 'react'

const links = [
  { href: '#obituary', label: 'In Memory' },
  { href: '#event', label: 'Celebration of Life' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#music', label: 'Music' },
  { href: '#community', label: 'Community' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1A0A2E]/90 backdrop-blur-md shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="font-display text-lg font-bold text-[#FFB300] tracking-wide hover:opacity-80 transition-opacity"
          onClick={close}
        >
          Luke Edington
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="nav-link text-[#FFF8E1]/80 hover:text-[#FFB300] text-sm font-semibold tracking-wide transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB300]"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block w-6 h-0.5 bg-[#FFF8E1] transition-transform duration-200 origin-center ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#FFF8E1] transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#FFF8E1] transition-transform duration-200 origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#1A0A2E]/95 backdrop-blur-md border-t border-white/10">
          <ul className="flex flex-col py-4 px-6 gap-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block text-[#FFF8E1]/90 hover:text-[#FFB300] font-semibold text-base py-1 transition-colors"
                  onClick={close}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
