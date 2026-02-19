import { useEffect } from 'react'

export interface LightboxImage {
  src: string
  alt: string
}

interface LightboxProps {
  images: LightboxImage[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const img = images[index]

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-4 right-4 text-white/80 hover:text-white text-4xl leading-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Close lightbox"
        onClick={onClose}
      >
        &times;
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          className="absolute left-3 sm:left-6 text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white p-2"
          aria-label="Previous image"
          onClick={(e) => { e.stopPropagation(); onPrev() }}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div
        className="max-w-[90vw] max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="max-w-full max-h-[78vh] object-contain rounded-lg shadow-2xl"
        />
        <p className="mt-3 text-white/70 font-body text-sm">{img.alt}</p>
        <p className="text-white/40 text-xs mt-1">{index + 1} / {images.length}</p>
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          className="absolute right-3 sm:right-6 text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white p-2"
          aria-label="Next image"
          onClick={(e) => { e.stopPropagation(); onNext() }}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  )
}
