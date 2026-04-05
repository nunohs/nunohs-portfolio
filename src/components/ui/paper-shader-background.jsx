import { Canvas } from '@react-three/fiber'
import { ShaderPlane, EnergyRing } from './background-paper-shaders'

/**
 * Full-viewport animated paper-style shader behind page content.
 * Uses pointer-events-none so navigation and links stay clickable.
 */
export function PaperShaderBackground({
  color1 = '#6366f1', //#2c2c30
  color2 = '#e8eafc', //
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
      {/* Soft veil so text stays readable on all displays */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/55 via-indigo-50/35 to-slate-100/65"
        aria-hidden
      />
    </div>
  )
}
