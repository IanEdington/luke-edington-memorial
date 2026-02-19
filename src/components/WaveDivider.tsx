interface WaveDividerProps {
  /** Background color of the section BELOW the wave */
  fillColor: string
  /** Flip horizontally to alternate the wave direction */
  flip?: boolean
}

/**
 * Placed at the bottom of a `position: relative` wrapper div.
 * Background is transparent — whatever is behind (gradient etc.) shows through
 * the top half of the wave. Only the area below the wave path gets `fillColor`.
 */
export default function WaveDivider({ fillColor, flip = false }: WaveDividerProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        bottom: '-1px', // -1px closes the subpixel gap
        left: 0,
        right: 0,
        overflow: 'hidden',
        lineHeight: 0,
        pointerEvents: 'none',
        zIndex: 5,
      }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{
          display: 'block',
          width: '100%',
          height: '80px',
          transform: flip ? 'scaleX(-1)' : undefined,
        }}
      >
        {/* Only the region below the wave path is filled; above is transparent */}
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill={fillColor} />
      </svg>
    </div>
  )
}
