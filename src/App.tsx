import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Obituary from './components/Obituary'
import EventBanner from './components/EventBanner'
import Gallery from './components/Gallery'
import Music from './components/Music'
import Community from './components/Community'
import Footer from './components/Footer'
import WaveDivider from './components/WaveDivider'

function useFadeOnScroll() {
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (query.matches) {
      document.querySelectorAll('.fade-section').forEach((el) => {
        el.classList.add('visible')
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll('.fade-section').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useFadeOnScroll()

  return (
    <>
      <Nav />

      <main>
        {/* Hero */}
        <Hero />

        {/* Wave: dark bg → cream */}
        <WaveDivider topColor="#1A0A2E" bottomColor="#FFF8E1" />

        {/* Obituary */}
        <Obituary />

        {/* Wave: cream → event gradient start */}
        <WaveDivider topColor="#FFF8E1" bottomColor="#2D1B4E" />

        {/* Event Banner */}
        <EventBanner />

        {/* Wave: event gradient end → dark bg */}
        <WaveDivider topColor="#E65100" bottomColor="#1A0A2E" />

        {/* Gallery */}
        <Gallery />

        {/* Wave: dark bg → deep purple */}
        <WaveDivider topColor="#1A0A2E" bottomColor="#2D1B4E" />

        {/* Music */}
        <Music />

        {/* Wave: deep purple → cream */}
        <WaveDivider topColor="#2D1B4E" bottomColor="#FFF8E1" />

        {/* Community */}
        <Community />

        {/* Wave: cream → dark bg */}
        <WaveDivider topColor="#FFF8E1" bottomColor="#1A0A2E" />
      </main>

      <Footer />
    </>
  )
}
