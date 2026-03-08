export default function Music() {
  return (
    <section id="music" className="bg-[#2D1B4E] pt-20 pb-32 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 fade-section">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#E991B0] mb-4">
            Luke's Music
          </h2>
          <p className="text-white/70 font-body text-base max-w-xl mx-auto">
            A large part of Luke's life was sharing music. Here's some of what he would have wanted to share with you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 fade-section">
          {/* YouTube */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-2xl text-white font-semibold text-center">
              Luke's Original Music
            </h3>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl shadow-black/40">
              <iframe
                src="https://www.youtube.com/embed/Ds61mqQHdH8"
                title="Luke Edington's Music"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="flex justify-center">
              <a
                href="https://www.youtube.com/@lukedingtaweyeah4285"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#FF0000]/80 hover:bg-[#FF0000] text-white rounded-lg font-body font-semibold text-sm transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch on YouTube
              </a>
            </div>
          </div>

          {/* Spotify */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-2xl text-white font-semibold text-center">
              Worship Playlist
            </h3>
            <div className="rounded-xl overflow-hidden shadow-2xl shadow-black/40">
              <iframe
                src="https://open.spotify.com/embed/playlist/5dxXiG9nxP57oabDNgxTNb?utm_source=generator&theme=0"
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Luke's Worship Playlist on Spotify"
                className="block"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://open.spotify.com/playlist/5dxXiG9nxP57oabDNgxTNb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1DB954]/80 hover:bg-[#1DB954] text-white rounded-lg font-body font-semibold text-sm transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Open in Spotify
              </a>
              <a
                href="https://open.spotify.com/user/31r3nptcux6ecd76yechmeyhudzy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-body font-semibold text-sm transition-colors border border-white/20"
              >
                Luke's Spotify Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
