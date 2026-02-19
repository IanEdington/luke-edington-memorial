export default function Community() {
  return (
    <section id="community" className="bg-[#FFF8E1] pt-20 pb-32 px-4">
      <div className="max-w-3xl mx-auto text-center fade-section">
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#2D1B4E] mb-4">
          Share a Memory
        </h2>
        <p className="font-body text-[#2D1B4E]/80 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Luke's family would love to hear your stories, see your photos, and feel your love.
          Please share your memories to be read and celebrated at his Celebration of Life.
        </p>

        {/* Google Form CTA */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeNe5qCbBxiawgQ1i7DLpFnUKFFLvFnNZ1JnlpKlmWoRi0Z_g/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C2185B] to-[#E65100] hover:from-[#AD1457] hover:to-[#BF360C] text-white rounded-xl font-body font-bold text-lg transition-all shadow-lg shadow-[#C2185B]/30 hover:shadow-xl hover:shadow-[#C2185B]/40 hover:-translate-y-0.5 mb-12"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Share Your Memories
        </a>

        {/* Divider */}
        <div className="w-16 h-px bg-[#2D1B4E]/20 mx-auto mb-10" aria-hidden="true" />

        {/* Facebook */}
        <h3 className="font-display text-2xl font-bold text-[#2D1B4E] mb-3">Connect on Facebook</h3>
        <p className="font-body text-[#2D1B4E]/70 text-base mb-6">
          Join the community remembering Luke, share posts, and stay connected with his family.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.facebook.com/share/p/1HnDcaM7Ep/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-lg font-body font-semibold text-sm transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Memorial Post
          </a>
          <a
            href="https://www.facebook.com/edingtonluke"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2D1B4E] hover:bg-[#3D2B5E] text-white rounded-lg font-body font-semibold text-sm transition-colors border border-[#2D1B4E]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Luke's Facebook Profile
          </a>
        </div>
      </div>
    </section>
  )
}
