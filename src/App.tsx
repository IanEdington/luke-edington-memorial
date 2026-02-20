import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Obituary from './components/Obituary'
import EventBanner from './components/EventBanner'
import Gallery from './components/Gallery'
import Music from './components/Music'
import Community from './components/Community'
import Footer from './components/Footer'
import SectionWrapper from './components/SectionWrapper'

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
        <SectionWrapper nextBg="#FFF8E1">
          <Hero />
        </SectionWrapper>

        {/* Obituary — no wave below, EventBanner has its own wave at the top */}
        <Obituary />

        {/* EventBanner — wave at top cuts into cream, gradient flows into Gallery at bottom */}
        <EventBanner />

        <SectionWrapper nextBg="#2D1B4E" flip>
          <Gallery />
        </SectionWrapper>

        <SectionWrapper nextBg="#FFF8E1">
          <Music />
        </SectionWrapper>

        <SectionWrapper nextBg="#1A0A2E" flip>
          <Community />
        </SectionWrapper>
      </main>

      <Footer />
    </>
  )
}
