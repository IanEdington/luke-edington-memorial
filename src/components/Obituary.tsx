import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

export default function Obituary() {
  const [content, setContent] = useState('')

  useEffect(() => {
    // Check for ?v=v1 or ?v=v2 URL parameter
    const params = new URLSearchParams(window.location.search)
    const version = params.get('v')

    // Default to v2, allow v1 via ?v=v1
    const filename = version === 'v1' ? '/obituary-v1.md' : '/obituary-v2.md'

    fetch(filename)
      .then((r) => r.text())
      .then(setContent)
      .catch(() => setContent(''))
  }, [])

  return (
    <section
      id="obituary"
      className="bg-[#FFF8E1] pt-20 pb-32 px-4"
    >
      <div className="max-w-3xl mx-auto fade-section">
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#2D1B4E] mb-10 text-center">
          In Loving Memory
        </h2>
        <article className="obituary-prose font-body text-[#2D1B4E] text-lg">
          <ReactMarkdown
            components={{
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C2185B] underline underline-offset-2 hover:text-[#AD1457] transition-colors"
                >
                  {children}
                </a>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </div>
    </section>
  )
}
