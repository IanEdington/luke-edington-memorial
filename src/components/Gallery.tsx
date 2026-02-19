import { useState } from 'react'
import Lightbox from './Lightbox'
import type { LightboxImage } from './Lightbox'

const images: LightboxImage[] = [
  { src: '/images/IMG_5430.PNG',    alt: 'Luke smiling in a grey jacket' },
  { src: '/images/IMG_0034.png',    alt: 'Luke skiing mid-flip' },
  { src: '/images/201A4C5E-3271-404E-B087-423A35C09B2F.jpeg', alt: 'Luke with a fish at sunset' },
  { src: '/images/IMG_0114.jpeg',   alt: 'Luke on the "I amsterdam" sign' },
  { src: '/images/IMG_1206.png',    alt: 'Luke by a creek in a maroon shirt' },
]

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const open  = (i: number) => setLightboxIndex(i)
  const close = () => setLightboxIndex(null)
  const prev  = () => setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : 0))
  const next  = () => setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : 0))

  return (
    <section id="gallery" className="bg-[#1A0A2E] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-section">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#FFB300] mb-4">
            Gallery
          </h2>
          <p className="text-white/60 font-body text-base max-w-md mx-auto">
            Moments from Luke's life — adventurous, joyful, alive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 fade-section">
          {images.map((img, i) => (
            <button
              key={img.src}
              className="group relative overflow-hidden rounded-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFB300] aspect-square"
              onClick={() => open(i)}
              aria-label={`Open photo: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-body">{img.alt}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  )
}
