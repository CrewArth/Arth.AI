import { useEffect, useRef, useState, type PointerEvent } from 'react'

export function HeroVisual() {
  const visualRef = useRef<HTMLDivElement>(null)
  const [hidden, setHidden] = useState(document.hidden)

  useEffect(() => {
    const updateVisibility = () => setHidden(document.hidden)
    document.addEventListener('visibilitychange', updateVisibility)
    return () => document.removeEventListener('visibilitychange', updateVisibility)
  }, [])

  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse') return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -8
    visualRef.current?.style.setProperty('--tilt-x', `${y.toFixed(1)}deg`)
    visualRef.current?.style.setProperty('--tilt-y', `${x.toFixed(1)}deg`)
  }

  const reset = () => {
    visualRef.current?.style.setProperty('--tilt-x', '0deg')
    visualRef.current?.style.setProperty('--tilt-y', '0deg')
  }

  return (
    <div className={`hero-visual${hidden ? ' is-paused' : ''}`} ref={visualRef} onPointerMove={move} onPointerLeave={reset} aria-hidden="true">
      <div className="visual-grid" />
      <div className="orb-glow" />
      <div className="orb-scene">
        <div className="orb-ring ring-one" />
        <div className="orb-ring ring-two" />
        <div className="orb-ring ring-three" />
        <div className="orb-core"><span className="orb-core-inner" /></div>
        <span className="orb-node node-one" />
        <span className="orb-node node-two" />
        <span className="orb-node node-three" />
        <span className="orb-node node-four" />
      </div>
      <div className="visual-caption"><span className="signal-dot" /> BUILT AROUND YOUR BUSINESS</div>
    </div>
  )
}
