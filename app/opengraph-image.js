import { ImageResponse } from 'next/og';

export const alt = 'Daniyal — Building systems. Connecting intelligence.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  // ImageResponse uses inline styles to render a standalone share image.
  return new ImageResponse(
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', padding: '64px 76px', color: '#ffffff', background: 'radial-gradient(ellipse at 95% 80%, #5a2300, #0d0d0d 70%)', fontFamily: 'sans-serif', border: '1px solid #3d1e0b' }}>
      <div style={{ display: 'flex', fontSize: 24, letterSpacing: 4, color: '#c2c2c2' }}>BACKEND / FULL-STACK / AGENTIC AI</div>
      <div style={{ display: 'flex', marginTop: 44, fontSize: 142, fontWeight: 700, letterSpacing: -8 }}>DANIY<span style={{ color: '#ff5500' }}>AL</span></div>
      <div style={{ display: 'flex', marginTop: 24, fontSize: 44 }}>Building systems.</div>
      <div style={{ display: 'flex', fontSize: 44 }}>Connecting intelligence.</div>
      <div style={{ display: 'flex', marginTop: 38, fontSize: 20, color: '#c2c2c2' }}>Reliable backends. Complete products. Purposeful agents.</div>
    </div>, size,
  );
}
