import type { ReactNode } from 'react'
import WaveDivider from './WaveDivider'

interface SectionWrapperProps {
  children: ReactNode
  /** Background color of the section that follows — fills below the wave path */
  nextBg: string
  /** Flip the wave horizontally to alternate direction between sections */
  flip?: boolean
}

/**
 * Wraps a section and attaches a transparent-top wave divider at its bottom.
 * The section's own background (gradient or solid) shows through above the wave
 * path; only below the path does `nextBg` fill in.
 */
export default function SectionWrapper({ children, nextBg, flip = false }: SectionWrapperProps) {
  return (
    <div style={{ position: 'relative' }}>
      {children}
      <WaveDivider fillColor={nextBg} flip={flip} />
    </div>
  )
}
