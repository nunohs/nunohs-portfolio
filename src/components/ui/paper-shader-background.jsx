import { Canvas } from '@react-three/fiber'
import { ShaderPlane, EnergyRing } from './background-paper-shaders'

/**
 * Full-viewport animated shader behind page content.
 * Uses pointer-events-none so navigation and links stay clickable.
 */
export function PaperShaderBackground({
  color1 = '#E6ECE3',
  color2 = '#F8F6F1',
  className = '',
}) {
  return (
    <div
      className={`fixed inset-0 -z-[1] h-[100dvh] w-full overflow-hidden pointer-events-none ${className}`}
      aria-hidden
    >
      <Canvas
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0, 2.6], fov: 42 }}
        style={{ width: '100%', height: '100%', display: 'block' }}
        dpr={[1, 2]}
      >
        <ShaderPlane
          position={[0, 0, 0]}
          scale={[22, 22, 1]}
          color1={color1}
          color2={color2}
        />
      </Canvas>
      {/* Subtle dark veil — keeps texture visible but doesn't overpower text */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 18% 10%, rgba(220,229,216,0.62) 0%, transparent 48%), radial-gradient(ellipse at 82% 18%, rgba(238,241,232,0.78) 0%, transparent 52%), linear-gradient(135deg, rgba(248,246,241,0.86) 0%, rgba(230,236,227,0.54) 100%)',
        }}
        aria-hidden
      />
    </div>
  )
}
