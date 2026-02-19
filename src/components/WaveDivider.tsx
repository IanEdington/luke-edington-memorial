interface WaveDividerProps {
  topColor?: string
  bottomColor?: string
  flipX?: boolean
  flipY?: boolean
}

export default function WaveDivider({
  topColor = '#1A0A2E',
  bottomColor = '#FFF8E1',
  flipX = false,
  flipY = false,
}: WaveDividerProps) {
  const transform = [flipX && 'scaleX(-1)', flipY && 'scaleY(-1)'].filter(Boolean).join(' ') || undefined
  return (
    <div
      className="relative w-full overflow-hidden leading-none"
      style={{ backgroundColor: topColor, transform }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ display: 'block', height: '80px' }}
      >
        <path
          d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  )
}
