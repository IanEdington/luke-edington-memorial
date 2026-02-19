import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

export default function Obituary() {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch('/obituary.md')
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
